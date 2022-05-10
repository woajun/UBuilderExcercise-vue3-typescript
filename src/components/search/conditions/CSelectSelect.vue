<template>
  <select v-model="selected">
    <template v-for="option in options" :key="option.value">
      <option :value="option.value">
        {{ option.description }}
      </option>
    </template>
  </select>
  <template v-if="children">
    <template v-if="children.length > 0">
      <CSelectSelect
        :options="children"
        :search-item="item"
        @update:search-item="(v) => (item = v)"
      ></CSelectSelect>
    </template>
  </template>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from "vue";
import { Option } from "./Condition";

const props = defineProps<{
  options: Array<Option>;
  searchItem?: string | string[];
}>();

const emit = defineEmits(["update:searchItem"]);
const item = ref();

const selected = computed({
  get() {
    return props.searchItem;
  },
  set(value) {
    emit("update:searchItem", value);
  },
});

const children = computed(() => {
  const option = props.options.find((op) => op.value === selected.value);
  return option?.children;
});
</script>
