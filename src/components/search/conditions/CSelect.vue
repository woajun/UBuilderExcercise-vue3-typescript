<template>
  <div>
    <template v-if="label"> {{ label }} : </template>
    <CSelectSelect
      :placeholder="placeholder"
      :initial-value="initialValue"
      :data="data"
      :value="value"
      :description="description"
      :nestedSelect="nestedSelect"
      :searchItem="searchItem"
      :field="field"
      @update:search-item="(f, v) => emit('update:searchItem', f, v)"
    ></CSelectSelect>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { NestedSelect, Data } from "./Condition";
import CSelectSelect from "./CSelectSelect.vue";

defineProps<{
  kind: "select";
  width?: string;
  field: string;
  label?: string;
  initialValue?: string;
  placeholder?: string;
  description: string;
  value: string;
  nestedSelect: NestedSelect;
  data: Data;
  searchItem: Record<string, any>;
}>();

const emit = defineEmits(["update:searchItem"]);
</script>
