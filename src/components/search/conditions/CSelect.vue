<template>
  <div>
    <template v-if="label"> {{ label }} : </template>
    <CSelectSelect
      :placeholder="placeholder"
      :initial-value="initialValue"
      :options="options"
      :search-item="items"
      @update:search-item="(v, i) => (items[i] = v)"
      :index="0"
    ></CSelectSelect>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive, watch } from "vue";
import { Option } from "./Condition";
import CSelectSelect from "./CSelectSelect.vue";

defineProps<{
  kind: "select";
  label?: string;
  field: string;
  initialValue?: string | string[];
  options: Array<Option>;
  width?: string;
  placeholder?: string | string[];
  searchItem?: string | string[];
}>();

const items: string[] = reactive([]);

const emit = defineEmits(["update:searchItem"]);
watch(items, (newItems) => {
  emit("update:searchItem", newItems);
});
</script>
