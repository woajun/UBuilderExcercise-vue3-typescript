<template>
  <div class="inline">
    <template v-if="label"> {{ label }} : </template>
    <select v-model="selected">
      <template v-for="option in options" :key="option.value">
        <template v-if="option.parent == parentVal || !option.parent">
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
import { defineProps, defineEmits, computed, watch } from "vue";
import { SelectOption } from "./Condition";

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
  default?: string;
  parentVal?: string;
  searchItem?: string;
}>();

const emit = defineEmits(["update:searchItem"]);

const selected = computed({
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

watch(
  () => props.parentVal,
  () => {
    emit("update:searchItem", "");
  }
);
</script>
<style>
.inline {
  display: inline;
}
</style>
