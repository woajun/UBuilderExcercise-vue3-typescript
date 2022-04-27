<template>
  <div class="inline">
    <template v-if="select.label"> {{ select.label }} : </template>
    <select v-model="value">
      <template v-for="option in select.options" :key="option.value">
        <template v-if="option.parent == parent || !option.parent">
          <option :value="option.value" :disabled="option.disabled">
            {{ option.description }}
          </option>
        </template>
      </template>
    </select>
    {{ select.endLabel }}
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits, computed, onMounted, watch } from "vue";
import { Select } from "../Conditions";

interface Props {
  arg: Select;
  modelValue: any;
  parentValue: any;
}
const props = defineProps<Props>();
const select = ref(props.arg);
const emit = defineEmits(["update:modelValue"]);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
const parent = computed(() => props.parentValue);

watch(parent, () => {
  value.value = "";
});

onMounted(() => {
  init();
});

function init() {
  value.value = select.value.selectedValue;
}
</script>
<style>
.inline {
  display: inline;
}
</style>
