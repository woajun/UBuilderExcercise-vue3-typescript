<template>
  <label v-if="label"
    >{{ label }} :
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
import { defineProps, defineEmits, computed, ref, watchEffect } from "vue";
import { Data } from "./Condition";
const props = defineProps<{
  label?: string;
  placeholder?: string;
  data: Promise<Data> | Data;
  valueKey: string;
  descriptionKey: string;
  modelValue: string | number;
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

watchEffect(async () => {
  try {
    loading.value = true;
    isError.value = false;
    updateOptions(await props.data);
  } catch (error) {
    console.log(error);
    updateOptions([]);
    setSelected("");
    isError.value = true;
  } finally {
    loading.value = false;
  }
});

function updateOptions(newOptions: Data) {
  if (!isArray(newOptions)) throw new Error("Is not Array : " + newOptions);
  setOptions(newOptions);
}

function setOptions(newOptions: Data) {
  options.value = newOptions;
}

function setSelected(newValue: string | unknown) {
  emit("update:modelValue", newValue);
}
</script>
