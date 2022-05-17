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
    {{ networkStatus }}
  </label>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, watch, ref, onMounted } from "vue";
import { Data } from "./Condition";

const props = defineProps<{
  label?: string;
  placeholder?: string;
  data?: Data;
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
const dataURL = ref("");
const options = ref();
const networkStatus = ref("");

watch(dataURL, async (url) => {
  networkStatus.value = "Loading...";
  try {
    const res = await fetch(url);
    options.value = await res.json();
    networkStatus.value = "";
  } catch (error) {
    networkStatus.value = "Error! Could not reach the API. " + error;
  }
});

onMounted(() => {
  if (typeof props.data === "string") {
    dataURL.value = props.data;
  } else {
    options.value = props.data;
  }
});
</script>
