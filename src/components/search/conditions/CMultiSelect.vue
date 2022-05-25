<template>
  <hr />
  <template v-for="(select, i) in selects" :key="select.field">
    <c-single-select
      :label="select.label"
      :placeholder="select.placeholder"
      :valueKey="select.valueKey"
      :descriptionKey="select.descriptionKey"
      :data="select.data"
      :modelValue="getSelected(select.field, i)"
      @update:modelValue="(v) => setSelected(v, select.field)"
    />
  </template>
</template>

<script setup lang="ts">
import CSingleSelect from "./CSingleSelect.vue";
import { defineProps, defineEmits, computed } from "vue";
import { Data } from "./Condition";

interface SelectItem {
  label?: string;
  placeholder?: string;
  valueKey: string;
  descriptionKey: string;
  data: Data | Promise<Data>;
  field: string;
}

const props = defineProps<{
  selects: Array<SelectItem>;
  modelValue: Record<string, any>;
}>();

const emit = defineEmits(["update:modelValue"]);

const selected = computed<Record<string, any>>(() => props.modelValue);

const fields: string[] = [];

function getSelected(field: string, index: number) {
  fields[index] = field;
  console.log(fields);
  return selected.value[field];
}

function setSelected(value: any, field: string) {
  console.log(field);
  selected.value[field] = value;
}
</script>
