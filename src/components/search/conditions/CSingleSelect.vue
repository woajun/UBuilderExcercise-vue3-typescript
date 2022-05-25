<template>
  <label>
    <template v-if="label"> {{ label }} : </template>
    <select
      v-model="selected"
      :disabled="isError || disabled || isDependsOnNull"
    >
      <option v-if="isError" disabled :value="undefined">
        데이터를 불러오지 못했습니다.
      </option>
      <template v-else-if="placeholder">
        <template v-if="!selected">
          <option disabled :value="selected">
            {{ placeholder }}
          </option>
        </template>
        <template v-else>
          <option disabled>
            {{ placeholder }}
          </option>
        </template>
      </template>
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

function setOptions(newOptions: Data) {
  options.value = newOptions;
}

function setSelected(newValue: unknown) {
  emit("update:modelValue", newValue);
}

function dependOnEvent(newValue: unknown) {
  setSelected(undefined);
  isDependsOnNull.value = newValue ? false : true;
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

  function updateOptions(newOptions: Data) {
    if (!isArray(newOptions)) throw new Error("Is not Array : " + newOptions);
    setOptions(newOptions);
  }
}

updateData(props.data);
// 부모가 있고, 초기값이 없으면 실행.
if (props.dependsOn !== undefined && !props.modelValue)
  dependOnEvent(props.dependsOn);
</script>
