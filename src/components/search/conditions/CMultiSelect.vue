<template>
  <template v-for="select in selects" :key="select">
    <c-single-select
      :label="select.label"
      :placeholder="select.placeholder"
      :valueKey="select.valueKey"
      :descriptionKey="select.descriptionKey"
      :data="select.data(selected)"
      v-model="selected[select.field]"
    />
  </template>
</template>

<script setup lang="ts">
import CSingleSelect from "./CSingleSelect.vue";
import { defineProps, reactive } from "vue";

import { Data } from "./Condition";
type Selected = Record<string, any>;

interface singleSelect {
  label?: string;
  placeholder?: string;
  valueKey: string;
  descriptionKey: string;
}
interface multiSelectItem extends singleSelect {
  data: (selecteds: Selected) => Data | Promise<Data>;
  field: string;
}
defineProps<{
  selects: Array<multiSelectItem>;
}>();
const selected: Selected = reactive({});
</script>
