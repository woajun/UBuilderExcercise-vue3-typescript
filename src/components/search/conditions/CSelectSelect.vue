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
        :search-item="searchItem"
        @update:search-item="(v, i) => emit('update:searchItem', v, i)"
        :index="index + 1"
      ></CSelectSelect>
    </template>
  </template>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import { Option } from "./Condition";

const props = defineProps<{
  options: Array<Option>;
  searchItem: string[];
  index: number;
}>();

const emit = defineEmits(["update:searchItem"]);

const selected = computed({
  get() {
    return props.searchItem[props.index];
  },
  set(value) {
    emit("update:searchItem", value, props.index);
    for (let i = props.index + 1; i < props.searchItem.length; i++) {
      emit("update:searchItem", "", i);
    }
  },
});

const children = computed(() => {
  const option = props.options.find((op) => op.value === selected.value);
  return option?.children;
});
</script>
