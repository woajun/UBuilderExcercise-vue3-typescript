<template>
  <div>
    <template v-if="label"> {{ label }} : </template>
    <input
      type="text"
      :placeholder="placeholder"
      :value="searchItem[field]"
      @input="emit('update:searchItem', field, ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  kind: "text";
  width?: string;
  field: string;
  label?: string;
  initialValue?: string;
  placeholder?: string;
  searchItem: Record<string, any>;
}>();
const emit = defineEmits(["update:searchItem"]);

if (props.initialValue)
  emit("update:searchItem", props.field, props.initialValue);
</script>
