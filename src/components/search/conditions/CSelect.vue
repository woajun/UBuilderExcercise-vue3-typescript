<template>
  <div class="inline">
    <template v-if="label"> {{ label }} : </template>
    <select v-model="selected">
      <template v-for="option in options" :key="option.value">
        <option :value="option.value">
          {{ option.description }}
        </option>
      </template>
    </select>
    {{ children }}
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import { Option } from "./Condition";

const props = defineProps<{
  kind: "select";
  label?: string;
  labelWidth?: string;
  fullWidth?: string;
  field: string;
  parentField?: string;
  default?: string;
  options: Array<Option>;
  endLabel?: string;
  width?: string;
  placeholder?: string;

  searchItem?: string;
}>();

const emit = defineEmits(["update:searchItem"]);

const selected = computed({
  get() {
    return props.searchItem;
  },
  set(value) {
    emit("update:searchItem", value);
  },
});

const children = computed(() =>
  props.options.filter((op) => op.value === selected.value)
);
</script>
<style>
.inline {
  display: inline;
}
</style>
