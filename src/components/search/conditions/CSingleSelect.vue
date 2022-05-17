<template>
  <label v-if="label" :for="field">{{ label }} : </label>
  <select v-model="selected" :id="field">
    <option v-if="placeholder" disabled value="">
      {{ placeholder }}
    </option>
    <template v-for="option in data" :key="option[valueKey]">
      <option :value="option[valueKey]">
        {{ option[descriptionKey] }}
      </option>
    </template>
  </select>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import { Data } from "./Condition";

const props = defineProps<{
  label?: string;
  placeholder?: string;
  data?: Data;
  valueKey: string;
  descriptionKey: string;
  field: string;
  modelValue: string | number;
}>();

const emit = defineEmits(["update:modelValue"]);

const selected = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
