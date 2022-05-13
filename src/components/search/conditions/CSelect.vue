<template>
  <div>
    <template v-if="label"> {{ label }} : </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { NestedSelect, Data } from "./Condition";
import CSelectSelect from "./CSelectSelect.vue";

defineProps<{
  kind: "select";
  width?: string;
  field: string;
  label?: string;
  initialValue?: string | string[];
  placeholder?: string | string[];
  description: string;
  value: string;
  nestedSelect: NestedSelect;
  data: Data;

  searchItem?: string[];
}>();
</script>
