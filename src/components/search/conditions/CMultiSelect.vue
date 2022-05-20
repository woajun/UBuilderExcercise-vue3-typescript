<template>
  <template v-for="select in selects" :key="select">
    <c-single-select
      :label="select.label"
      :placeholder="select.placeholder"
      :valueKey="select.valueKey"
      :descriptionKey="select.descriptionKey"
      :data="select.data"
      v-model="selected[select.field]"
    />
  </template>
</template>

<script setup lang="ts">
import CSingleSelect from "./CSingleSelect.vue";
import { defineProps, reactive } from "vue";

import { Data } from "./Condition";

interface singleSelect {
  label?: string;
  placeholder?: string;
  data: Promise<Data> | Data;
  valueKey: string;
  descriptionKey: string;
}
interface multiSelectItem extends singleSelect {
  field: string;
}
const props = defineProps<{
  selects: Array<multiSelectItem>;
}>();
const selected: Record<string, any> = reactive({});
</script>
