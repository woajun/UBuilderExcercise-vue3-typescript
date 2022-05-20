<template>
  <label>
    <template v-if="label"> {{ label }} : </template>
    <select v-model="selected">
      <option v-if="placeholder" disabled value="">
        {{ placeholder }}
      </option>
      <option v-if="isError" disabled value="">에러 발생</option>
      <template v-for="option in options" :key="option[valueKey]">
        <option :value="option[valueKey]">
          {{ option[descriptionKey] }}
        </option>
      </template>
    </select>
    <span v-show="loading">Loading...</span>
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
}>();
const emit = defineEmits(["update:modelValue"]);
const selected = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    setSelected(value);
  },
});
const options = ref();
const loading = ref(false);
const isError = ref(false);

watch(() => props.data, updateData);

function setOptions(newOptions: Data) {
  options.value = newOptions;
}

function setSelected(newValue: unknown) {
  emit("update:modelValue", newValue);
}

async function updateData(newData: Promise<Data> | Data) {
  try {
    loading.value = true;
    isError.value = false;
    updateOptions(await newData);
  } catch (error) {
    console.log(error);
    updateOptions([]);
    isError.value = true;
  } finally {
    loading.value = false;
  }
}

function updateOptions(newOptions: Data) {
  if (!isArray(newOptions)) throw new Error("Is not Array : " + newOptions);
  setOptions(newOptions);
}

updateData(props.data);
</script>
