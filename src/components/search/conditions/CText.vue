<template>
  <div>
    <template v-if="label"> {{ label }} : </template>
    <input
      type="text"
      :placeholder="placeholder"
      :value="searchItem"
      @input="emit('update:searchItem', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  label?: string;
  labelWidth?: string;
  fullWidth?: string;
  field: string;
  kind: "text";
  default?: string;
  placeholder?: string;
  searchItem?: string;
}>();
const emit = defineEmits(["update:searchItem"]);

setDefault();
function setDefault() {
  if (props.default !== undefined) {
    emit("update:searchItem", props.default);
  } else {
    emit("update:searchItem", "");
  }
}
</script>
