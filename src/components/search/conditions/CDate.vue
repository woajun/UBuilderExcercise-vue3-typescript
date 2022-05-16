<template>
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
</template>

<script setup lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import {
  defineProps,
  defineEmits,
  computed,
  WritableComputedRef,
  onMounted,
} from "vue";

const props = defineProps<{
  kind?: "date";
  field: string;
  label?: string;
  initialValue?: string;
  placeholder?: string;
  searchItem: Record<string, any>;
}>();
const emit = defineEmits(["update:searchItem"]);

const result: WritableComputedRef<string | undefined> = computed({
  get() {
    return props.searchItem[props.field];
  },
  set(newVal) {
    emit("update:searchItem", props.field, format(newVal));
  },
});

const format = (date: any) => {
  if (date instanceof Date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  } else {
    return date;
  }
};

onMounted(() => {
  if (props.initialValue !== undefined) {
    result.value = props.initialValue;
  } else if (!result.value) {
    result.value = "";
  }
});
</script>
