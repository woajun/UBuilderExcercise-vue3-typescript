<template>
  <div>
    {{ searchItem }}
    <c-multi-select :selects="selects" v-model="searchItem" />
  </div>
</template>
<script setup lang="ts">
import CMultiSelect from "@/components/search/conditions/CMultiSelect.vue";
import { computed, reactive } from "vue";

const searchItem = reactive({
  slt1: null,
  slt2: null,
  slt3: null,
});

const dataOne = [
  { description: "users", value: "users" },
  { description: "comments", value: "comments" },
  { description: "error", value: "error" },
];

const dataTwo = computed(() => {
  return searchFor(`https://jsonplaceholder.typicode.com/${searchItem.slt1}`);

  async function searchFor(url: string) {
    const resp = await fetch(url);
    return await resp.json();
  }
});

const dataThree = computed(() => {
  if (searchItem.slt1 !== "users" || !searchItem.slt1) return [];
  return [{ value: "male" }, { value: "female" }];
});

const selects = reactive([
  {
    valueKey: "value",
    descriptionKey: "value",
    field: "slt1",
    data: dataOne,
    label: "선택",
    placeholder: "선택1",
  },
  {
    valueKey: "id",
    descriptionKey: "name",
    field: "slt2",
    data: dataTwo,
    placeholder: "선택2",
    dependField: "slt1",
  },
  {
    valueKey: "value",
    descriptionKey: "value",
    field: "slt3",
    data: dataThree,
    placeholder: "선택3",
    dependField: "slt2",
  },
]);
</script>
