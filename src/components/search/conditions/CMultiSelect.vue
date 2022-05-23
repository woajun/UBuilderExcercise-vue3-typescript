<template>
  <hr />
  <template v-for="select in selects" :key="select.field">
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
import { defineProps, reactive, watch, defineEmits } from "vue";
import { Data } from "./Condition";

type Selected = Record<string, any>;

interface SingleSelect {
  label?: string;
  placeholder?: string;
  valueKey: string;
  descriptionKey: string;
}

interface MultiSelectItem extends SingleSelect {
  data: Data | Promise<Data>;
  field: string;
}

defineProps<{
  selects: Array<MultiSelectItem>;
  modelValue: Record<string, any>;
}>();

const emit = defineEmits(["update:modelValue"]);

const selected: Selected = reactive({});

watch(selected, (newSelected) => emit("update:modelValue", newSelected));
</script>
