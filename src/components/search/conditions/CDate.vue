<template>
  <div style="width: 150px">
    {{ cDate.label }}
    <Datepicker
      v-model="date"
      @update:modelValue="updateEvent"
      :format="format"
      position="left"
    >
      <template #dp-input="{ value }">
        <input type="text" :value="value" />
      </template>
    </Datepicker>
  </div>
</template>

<script setup lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { defineProps, ref, defineEmits } from "vue";
import { CDate } from "../Conditions";

interface Props {
  arg: CDate;
}

const props = defineProps<Props>();
const cDate = ref(props.arg);
const date = ref(cDate.value.date);
const emit = defineEmits(["update:value"]);

const format = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

function updateEvent() {
  if (date.value) {
    emit("update:value", format(date.value));
  }
}
</script>
