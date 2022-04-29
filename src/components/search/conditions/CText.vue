<template>
  <div>
    <template v-if="label"> {{ label }} : </template>
    <input
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', ($event.target as HTMLTextAreaElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
// import { Text } from "../Conditions";

// const props = defineProps<Text>(); // Not Supported in Vue3
const props = defineProps<{
  id: string;
  label?: string;
  labelWidth?: string;
  fullWidth?: string;
  field: string;
  kind: "text";
  value?: string;
  placeholder?: string;
}>();
const emit = defineEmits(["update:value"]);
</script>
