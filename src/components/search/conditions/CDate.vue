<template>
  <span>
    <input
      type="text"
      v-model="cDate.date"
      :placeholder="cDate.placeholder"
      @change="$emit('update:value', cDate.date)"
    />
  </span>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { CDate } from "../Conditions";

interface Props {
  arg: CDate;
}

const props = defineProps<Props>();
const cDate = ref(props.arg);
</script>
