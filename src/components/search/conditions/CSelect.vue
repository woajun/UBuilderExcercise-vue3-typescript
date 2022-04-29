<template>
  <div class="inline">
    <template v-if="label"> {{ label }} : </template>
    <select v-model="selected">
      <template v-for="option in options" :key="option.value">
        <template v-if="option.parent == parent || !option.parent">
          <option :value="option.value" :disabled="option.disabled">
            {{ option.description }}
          </option>
        </template>
      </template>
    </select>
    {{ endLabel }}
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from "vue";
import { SelectOption } from "../Conditions";

const props = defineProps<{
  kind: "select";
  options: Array<SelectOption>;
  endLabel?: string;
  width?: string;
  selectedValue?: string;
  dependField?: string;
  label?: string;
  labelWidth?: string;
  fullWidth?: string;
  field: string;
  value?: string;

  parent: string;
}>();
const emit = defineEmits(["update:value"]);
const selected = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("update:value", value);
  },
});
</script>
<style>
.inline {
  display: inline;
}
</style>
