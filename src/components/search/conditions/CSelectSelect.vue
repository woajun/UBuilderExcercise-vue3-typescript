<template>
  <select v-model="selected">
    <option v-if="placeholder" disabled value="">
      {{ placeholder }}
    </option>
    <template v-for="option in data" :key="option[value]">
      <option :value="option[value]">
        {{ option[description] }}
      </option>
    </template>
  </select>
  <template v-if="nestedSelect">
    <!-- <CSelectSelect
        :placeholder="placeholder"
        :initial-value="initialValue"
        :data="data"
        :value="value"
        :description="description"
        :nestedSelect="nestedSelect"
        :searchItem="searchItem"
        :field="field"
        @update:search-item="(v, i) => emit('update:searchItem', v, i)"
      ></CSelectSelect> -->
  </template>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import { NestedSelect, Data } from "./Condition";

const props = defineProps<{
  placeholder?: string;
  initialValue?: string;
  data: Data;
  value: string;
  description: string;
  nestedSelect?: NestedSelect;
  searchItem: Record<string, any>;
  field: string;
}>();

const emit = defineEmits(["update:searchItem"]);

const selected = computed({
  get() {
    return props.searchItem[props.value];
  },
  set(value) {
    emit("update:searchItem", props.field, value);
  },
});
</script>
