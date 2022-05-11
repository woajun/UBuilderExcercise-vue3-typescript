<template>
  {{ period }}
  <div>
    <span v-if="label"> {{ label }} : </span>
    <CDate
      :search-item="period[0]"
      @update:search-item="(v) => (period[0] = v)"
      :period="true"
    ></CDate>
    ~
    <CDate
      :search-item="period[1]"
      @update:search-item="(v) => (period[1] = v)"
      :period="true"
    ></CDate>
  </div>
</template>

<script setup lang="ts">
import CDate from "./CDate.vue";
import "@vuepic/vue-datepicker/dist/main.css";
import { defineProps, defineEmits, watch, reactive } from "vue";

const props = defineProps<{
  kind: "period";
  label?: string;
  field: string;
  initialValue?: string | string[];
  placeholder?: string | string[];
  searchItem?: string | string[];
}>();
const emit = defineEmits(["update:searchItem"]);
const period: string[] = reactive([]);

watch(period, (v) => {
  emit("update:searchItem", v);
});
</script>
