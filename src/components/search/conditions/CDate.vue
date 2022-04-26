<template>
  <div>
    <Datepicker
      style="display: inline-block"
      v-model="date"
      @update:modelValue="updateEvent"
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
import { defineProps, ref, defineEmits, onMounted } from "vue";
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
  } else {
    emit("update:value", "");
  }
}
onMounted(() => {
  updateEvent();
});
</script>
