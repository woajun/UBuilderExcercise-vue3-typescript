<template>
  <div class="inline">
    {{ item }} <br />
    <template v-if="label"> {{ label }} : </template>
    <CSelectSelect
      :options="options"
      :search-item="item"
      @update:search-item="(v) => (item = v)"
    ></CSelectSelect>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { Option } from "./Condition";
import CSelectSelect from "./CSelectSelect.vue";

const props = defineProps<{
  kind: "select";
  label?: string;
  field: string;
  default?: string;
  options: Array<Option>;
  width?: string;
  placeholder?: string;
  searchItem?: string;
}>();
const item = ref();
</script>
<style>
.inline {
  display: inline;
}
</style>
