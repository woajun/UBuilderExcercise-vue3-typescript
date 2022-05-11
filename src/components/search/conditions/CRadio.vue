<template>
  <div>
    <template v-if="label"> {{ label }} : </template>
    <input
      v-if="placeholder"
      v-model="checked"
      type="radio"
      :name="field"
      :id="field + placeholder"
      value=""
    />
    <label :for="field + placeholder">
      {{ placeholder }}
    </label>
    <template v-for="option in options" :key="option.value">
      <input
        v-model="checked"
        type="radio"
        :value="option.value"
        :id="field + option.value"
        :name="field"
      />
      <label :for="field + option.value">
        {{ option.description }}
      </label>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";
import { Option } from "./Condition";

const props = defineProps<{
  label?: string;
  labelWidth?: string;
  fullWidth?: string;
  field: string;
  initialValue?: string;
  kind: "radio";
  options: Array<Option>;
  searchItem?: string;
  placeholder?: string;
}>();
const emit = defineEmits(["update:searchItem"]);
const checked = computed({
  get() {
    return props.searchItem;
  },
  set(value) {
    emit("update:searchItem", value);
  },
});

if (props.initialValue !== undefined) {
  emit("update:searchItem", props.initialValue);
} else {
  emit("update:searchItem", "");
}
</script>
