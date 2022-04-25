<template>
  <div style="display: inline">
    <select
      v-model="select.selectedValue"
      @change="$emit('update:value', select.selectedValue)"
    >
      <template v-if="select.options['default' as any]">
        <option
          v-for="option in select.options['default' as any]"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.description }}
        </option>
      </template>
      <option
        v-for="option in select.options[parent]"
        :key="option.value"
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
  parent: any;
}

const props = defineProps<Props>();
const select = ref(props.arg);
</script>
