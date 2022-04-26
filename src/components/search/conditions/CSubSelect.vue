<template>
  <div style="display: inline">
    <select v-model="select.selectedValue" @change="selectChangeEvent($event)">
      <template v-if="select.options['default' as any]">
        <option
          v-for="option in (select.options['default' as any] as any)"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.description }}
        </option>
      </template>
      <option
        v-for="option in ((select.options[parent as any]) as any)"
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
import { defineProps, ref, defineEmits } from "vue";
import { Select } from "../Conditions";

interface Props {
  arg: Select;
  parent: any;
}

const props = defineProps<Props>();
const select = ref(props.arg);
const emit = defineEmits(["update:value"]);

function selectChangeEvent(e: Event) {
  const target = e.target as HTMLSelectElement;
  emit("update:value", target.value);
}
</script>
