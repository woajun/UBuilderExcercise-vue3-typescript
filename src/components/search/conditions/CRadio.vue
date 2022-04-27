<template>
  <div>
    <template v-if="radio.label"> {{ radio.label }} : </template>
    <template v-for="option in radio.options" :key="option.value">
      <input
        v-model="value"
        type="radio"
        :value="option.value"
        :id="radio.field + option.value"
        :disabled="option.disabled"
      />
      <label :for="radio.field + option.value">
        {{ option.description }}
      </label>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits, computed, onMounted } from "vue";
import { Radio } from "../Conditions";

const props = defineProps<{
  arg: Radio;
  modelValue: any;
}>();
const radio = ref(props.arg);
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

onMounted(() => {
  value.value = radio.value.checkedValue;
});
</script>
