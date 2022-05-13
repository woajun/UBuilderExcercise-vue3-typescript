<template>
  {{ nestData }}
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
    <!-- :data="data.find((e) => e[value] == selected)[nestedSelect.data]" -->
    <CSelectSelect
      :data="nestData"
      :placeholder="nestedSelect.placeholder"
      :value="nestedSelect.value"
      :description="nestedSelect.description"
      :nestedSelect="nestedSelect.nestedSelect"
      :searchItem="searchItem"
      :field="nestedSelect.field"
      @update:search-item="(f, v) => emit('update:searchItem', f, v)"
    ></CSelectSelect>
  </template>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import { NestedSelect, Data } from "./Condition";

const nestData = computed(() => {
  const a = props.data?.find((e) => e[props.value] === selected.value);
  console.log(a);
  if (props.nestedSelect && a !== undefined) {
    console.log(a[props.nestedSelect.data]);
    return a[props.nestedSelect.data];
  }
  return undefined;
});

const props = defineProps<{
  placeholder?: string;
  initialValue?: string;
  data?: Data;
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
