<template>
  <hr />
  <template v-for="select in selects" :key="select.field">
    <c-single-select
      :label="select.label"
      :placeholder="select.placeholder"
      :valueKey="select.valueKey"
      :descriptionKey="select.descriptionKey"
      :data="select.data"
      :modelValue="selected[select.field]"
      @update:modelValue="(v) => (selected[select.field] = v)"
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
</script>
