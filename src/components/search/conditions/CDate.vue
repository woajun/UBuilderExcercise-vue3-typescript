<template>
  <div>
    <Datepicker
      style="display: inline-block"
      v-model="value"
      :format="format"
      position="left"
      :enable-time-picker="false"
    >
      <template #dp-input="{ value }">
        <span v-if="cDate.label"> {{ cDate.label }} : </span>
        <input type="text" :value="value" :placeholder="cDate.placeholder" />
      </template>
    </Datepicker>
  </div>
</template>

<script setup lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import {
  defineProps,
  ref,
  defineEmits,
  computed,
  WritableComputedRef,
  onMounted,
} from "vue";
import { CDate } from "../Conditions";

const props = defineProps<{
  arg: CDate;
  modelValue: any;
}>();
const emit = defineEmits(["update:modelValue"]);
const cDate = ref(props.arg);

const value: WritableComputedRef<Date | undefined> = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", format(value));
  },
});

const format = (date: Date | undefined) => {
  if (typeof date === "undefined") return;
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

onMounted(() => {
  value.value = cDate.value.date;
});
</script>
