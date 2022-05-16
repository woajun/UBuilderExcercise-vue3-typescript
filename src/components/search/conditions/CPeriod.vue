<template>
  <span v-if="label"> {{ label }} : </span>
  <CDate
    :field="field"
    :initial-value="initialValue"
    :placeholder="placeholder"
    :search-item="searchItem"
    @update:search-item="(f, v) => emit('update:searchItem', f, v)"
  ></CDate>
  ~
  <CDate
    :field="endField"
    :initial-value="endInitialValue"
    :placeholder="endPlaceholder"
    :search-item="searchItem"
    @update:search-item="(f, v) => emit('update:searchItem', f, v)"
  ></CDate>
</template>

<script setup lang="ts">
import CDate from "./CDate.vue";
import "@vuepic/vue-datepicker/dist/main.css";
import { defineProps, defineEmits } from "vue";

defineProps<{
  kind?: "period";
  width?: string;
  field: string;
  label?: string;
  initialValue?: string;
  placeholder?: string;
  endField: string;
  endPlaceholder?: string;
  endInitialValue?: string;
  searchItem: Record<string, any>;
}>();

const emit = defineEmits(["update:searchItem"]);
</script>
