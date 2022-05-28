<template>
  <label>
    <template v-if="label"> {{ label }} : </template>
    <select
      v-model="selected"
      :disabled="isError || disabled || isDependsOnNull || isEmpty"
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
  dependsOnValue?: unknown;
}>();
const emit = defineEmits([
  "update:modelValue",
  "update:disabled",
  "update:selectedObject",
]);
const selected = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
    emitSelectedObject(value);
  },
});
const options = ref<Data>([]);
const isLoading = ref(false);
const isError = ref(false);
const isDependsOnNull = ref(false);
const isEmpty = ref(false);

function checkEmpty(options: Data) {
  isEmpty.value = options.length === 0 ? true : false;
}

function emitSelectedObject(value: unknown) {
  emit("update:selectedObject", getSltdObj(value));

  function getSltdObj(value: unknown) {
    return options.value.find((e) => e[props.valueKey] === value) ?? {};
  }
}

watch(() => options.value, checkEmpty);
watch(() => props.data, updateData);
watch(() => props.dependsOnValue, dependsOnChanged);

function dependsOnChanged(newValue: unknown) {
  emit("update:modelValue", undefined);
  isDependsOnNull.value = newValue ? false : true;
}

async function updateData(newData: Promise<Data> | Data) {
  try {
    isLoading.value = true;
    isError.value = false;
    updateOptions(await newData);
  } catch (error) {
    console.log(error);
    emit("update:modelValue", undefined);
    updateOptions([]);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }

  function updateOptions(newOptions: Data) {
    if (!isArray(newOptions)) throw new Error("Is not Array : " + newOptions);
    options.value = newOptions;
  }
}

updateData(props.data);
// 부모가 있고, 초기값이 없으면 실행.
if (props.dependsOnValue !== undefined && !props.modelValue)
  dependsOnChanged(props.dependsOnValue);
checkEmpty(options.value);
</script>
