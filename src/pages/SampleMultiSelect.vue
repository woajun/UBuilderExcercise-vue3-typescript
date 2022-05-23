<template>
  <div>
    {{ searchItem }}
    <c-multi-select :selects="selects" v-model="searchItem" />
  </div>
</template>
<script setup lang="ts">
import CMultiSelect from "@/components/search/conditions/CMultiSelect.vue";
import { computed, reactive, ref } from "vue";

const searchItem = ref({
  slt1: "users",
  slt2: "",
  slt3: "",
});
const getSlt1 = () => searchItem.value.slt1;
const getSlt2 = () => searchItem.value.slt2;

const dataOne = [
  { description: "users", value: "users" },
  { description: "comments", value: "comments" },
  { description: "error", value: "error" },
];

const dataTwo = computed(() => {
  return searchFor(`https://jsonplaceholder.typicode.com/${getSlt1()}`);

  async function searchFor(url: string) {
    const resp = await fetch(url);
    return await resp.json();
  }
});

const dataThree = computed(() => {
  if (getSlt1() !== "users" || !getSlt2()) return [];
  return [{ value: "male" }, { value: "female" }];
});

const selects = reactive([
  {
    valueKey: "value",
    descriptionKey: "value",
    field: "slt1",
    data: dataOne,
    label: "선택",
  },
  {
    valueKey: "id",
    descriptionKey: "name",
    field: "slt2",
    data: dataTwo,
  },
  {
    valueKey: "value",
    descriptionKey: "value",
    field: "slt3",
    data: dataThree,
  },
]);
</script>
