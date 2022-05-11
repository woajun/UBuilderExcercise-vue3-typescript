<template>
  <div :class="{ inline: inline }">
    <Datepicker
      style="display: inline-block"
      v-model="result"
      :format="format"
      position="left"
      :enable-time-picker="false"
    >
      <template #dp-input="{ value }">
        <span v-if="label"> {{ label }} : </span>
        <input type="text" :value="value" :placeholder="placeholder" />
      </template>
    </Datepicker>
  </div>
</template>

<script setup lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { defineProps, defineEmits, computed, WritableComputedRef } from "vue";

const props = defineProps<{
  kind?: "date";
  width?: string;
  field?: string;
  label?: string;
  initialValue?: string;
  placeholder?: string;
  searchItem?: string;
  inline?: boolean;
}>();
const emit = defineEmits(["update:searchItem"]);

const result: WritableComputedRef<string | undefined> = computed({
  get() {
    return props.searchItem;
  },
  set(newVal) {
    emit("update:searchItem", format(newVal));
  },
});

const format = (date: any) => {
  if (date instanceof Date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
};

if (props.initialValue !== undefined) {
  emit("update:searchItem", props.initialValue);
} else {
  emit("update:searchItem", "");
}
</script>
<style>
.inline {
  display: inline;
}
</style>
