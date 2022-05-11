<template>
  <div>
    <span v-if="label"> {{ label }} : </span>
    <CDate
      :search-item="period[0]"
      @update:search-item="(v) => (period[0] = v)"
      :inline="true"
      :initial-value="getInitVal(0)"
      :placeholder="getPlaceholder(0)"
    ></CDate>
    ~
    <CDate
      :search-item="period[1]"
      @update:search-item="(v) => (period[1] = v)"
      :inline="true"
      :initial-value="getInitVal(1)"
      :placeholder="getPlaceholder(1)"
    ></CDate>
  </div>
</template>

<script setup lang="ts">
import CDate from "./CDate.vue";
import "@vuepic/vue-datepicker/dist/main.css";
import { defineProps, defineEmits, watch, reactive } from "vue";

const props = defineProps<{
  kind?: "period";
  width?: string;
  field: string;
  label?: string;
  initialValue?: string | string[];
  placeholder?: string | string[];
  searchItem?: string[];
}>();

const emit = defineEmits(["update:searchItem"]);
const period: string[] = reactive([]);

watch(period, (v) => {
  emit("update:searchItem", v);
});

function getInitVal(index: number) {
  if (Array.isArray(props.initialValue)) {
    return props.initialValue[index];
  }
}

function getPlaceholder(index: number) {
  if (Array.isArray(props.placeholder)) {
    return props.placeholder[index];
  }
}
</script>
