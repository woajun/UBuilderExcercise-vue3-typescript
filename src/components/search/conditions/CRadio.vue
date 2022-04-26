<template>
  <div>
    <template v-if="radio.label"> {{ radio.label }} : </template>
    <template
      v-for="option in radio.options"
      :key="option.value"
      @change="$emit('update:value', radio.checkedValue)"
    >
      <input
        type="radio"
        :value="option.value"
        :id="radio.field + option.value"
        :checked="radio.checkedValue === option.value"
        :disabled="option.disabled"
        v-model="radio.checkedValue"
      />
      <label :for="radio.field + option.value">
        {{ option.description }}
      </label>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { Radio } from "../Conditions";

interface Props {
  arg: Radio;
}
const props = defineProps<Props>();
const radio = ref(props.arg);
</script>

<style></style>
