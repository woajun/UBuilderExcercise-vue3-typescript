<template>
  <label>
    <template v-if="label"> {{ label }} : </template>
    <select
      v-model="selected"
      :disabled="isError || disabled || isDependsOnNull"
    >
      <template v-if="placeholder">
        <template v-if="!selected">
          <option disabled :value="selected">
            {{ placeholder }}
          </option>
        </template>
      </template>
      <option v-if="isError" disabled :value="undefined">
        데이터를 불러오지 못했습니다.
      </option>
      <template v-for="option in options" :key="option[valueKey]">
        <option :value="option[valueKey]">
          {{ option[descriptionKey] }}
        </option>
      </template>
    </select>
    <span v-show="isLoading">Loading...</span>
  </label>
</template>

<script setup lang="ts">
import { isArray } from "@vue/shared";
import { defineProps, defineEmits, computed, ref, watch } from "vue";
import { Data } from "./Condition";
const props = defineProps<{
  label?: string;
  placeholder?: string;
  data: Promise<Data> | Data;
  valueKey: string;
  descriptionKey: string;
  modelValue: unknown;
  disabled?: boolean;
  dependsOn?: unknown;
}>();
const emit = defineEmits(["update:modelValue", "update:disabled"]);
const selected = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    setSelected(value);
  },
});
const options = ref();
const isLoading = ref(false);
const isError = ref(false);
const isDependsOnNull = ref(false);

watch(() => props.data, updateData);

watch(() => props.dependsOn, dependOnEvent);

function dependOnEvent(newValue: unknown) {
  setSelected(undefined);
  console.log("부모값:", newValue);
  if (newValue) {
    isDependsOnNull.value = false;
  } else {
    isDependsOnNull.value = true;
  }
}

function setOptions(newOptions: Data) {
  options.value = newOptions;
}

function setSelected(newValue: unknown) {
  emit("update:modelValue", newValue);
}

async function updateData(newData: Promise<Data> | Data) {
  try {
    isLoading.value = true;
    isError.value = false;
    updateOptions(await newData);
  } catch (error) {
    console.log(error);
    setSelected(undefined);
    updateOptions([]);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
}

function updateOptions(newOptions: Data) {
  if (!isArray(newOptions)) throw new Error("Is not Array : " + newOptions);
  setOptions(newOptions);
}

updateData(props.data);
if (props.dependsOn) dependOnEvent(props.dependsOn);
</script>
