<template>
  <div style="display: inline">
    <template v-if="select.label"> {{ select.label }} : </template>
    <select
      v-model="select.selectedValue"
      @change="$emit('update:value', select.selectedValue)"
    >
      <option
        v-for="(option, t) in select.options"
        :key="t"
        :value="option.value"
        :disabled="option.disabled"
      >
        {{ option.description }}
      </option>
    </select>
    {{ select.endLabel }}
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { Select } from "../Conditions";

interface Props {
  arg: Select;
}
const props = defineProps<Props>();
const select = ref(props.arg);
</script>
