<template>
  <div>
    <template v-if="text.label"> {{ text.label }} : </template>
    <input
      type="text"
      v-model="text.value"
      :placeholder="text.placeholder"
      @change="$emit('update:value', text.value)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { Text } from "../Conditions";

interface Props {
  arg: Text;
}
const props = defineProps<Props>();
const text = ref(props.arg);
</script>
