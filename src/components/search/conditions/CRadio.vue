<template>
  <template v-if="label"> {{ label }} : </template>
  <template v-if="placeholder">
    <input
      v-model="checked"
      type="radio"
      :name="field"
      :id="field + placeholder"
      value=""
    />
    <label :for="field + placeholder">
      {{ placeholder }}
    </label>
  </template>
  <template v-for="option in data" :key="option[value]">
    <input
      v-model="checked"
      type="radio"
      :value="option[value]"
      :id="field + option[value]"
      :name="field"
    />
    <label :for="field + option[value]">
      {{ option[description] }}
    </label>
  </template>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, onMounted } from "vue";
import { Data } from "./Condition";

const props = defineProps<{
  kind: "radio";
  width?: string;
  label?: string;
  field: string;
  initialValue?: string;
  data: Data;
  searchItem: Record<string, any>;
  placeholder?: string;
  description: string;
  value: string;
}>();
const emit = defineEmits(["update:searchItem"]);
const checked = computed({
  get() {
    return props.searchItem[props.field];
  },
  set(value) {
    emit("update:searchItem", props.field, value);
  },
});

// TODO 초기화
onMounted(() => {
  if (props.initialValue) {
    checked.value = props.initialValue;
  } else if (!checked.value) {
    checked.value = "";
  }
});
</script>
