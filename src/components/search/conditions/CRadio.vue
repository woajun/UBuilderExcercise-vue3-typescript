<template>
  <div>
    <template v-if="label"> {{ label }} : </template>
    <template v-for="option in options" :key="option.value">
      <input
        v-model="checked"
        :type="kind"
        :value="option.value"
        :id="field + option.value"
        :disabled="option.disabled"
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
import { RadioOption } from "./Condition";

const props = defineProps<{
  label?: string;
  labelWidth?: string;
  fullWidth?: string;
  field: string;
  default?: string;
  kind: "radio";
  options: Array<RadioOption>;
  searchItem?: string;
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

if (props.default !== undefined) {
  emit("update:searchItem", props.default);
} else {
  emit("update:searchItem", "");
}
</script>
