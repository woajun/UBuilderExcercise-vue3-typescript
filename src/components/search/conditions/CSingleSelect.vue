<template>
  <label v-if="label"
    >{{ label }} :
    <select v-model="selected">
      <option v-if="placeholder" disabled value="">
        {{ placeholder }}
      </option>
      <template v-for="option in options" :key="option[valueKey]">
        <option :value="option[valueKey]">
          {{ option[descriptionKey] }}
        </option>
      </template>
    </select>
  </label>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref, watchEffect } from "vue";

const props = defineProps<{
  label?: string;
  placeholder?: string;
  data: Array<Record<string, any>> | Promise<any>;
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
    emit("update:modelValue", value);
  },
});
const options = ref();

async function fetchData() {
  try {
    const response = await fetch(props.data);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("It's not API");
    return props.data;
  }
}

watchEffect(async () => {
  options.value = await fetchData();
});
</script>
