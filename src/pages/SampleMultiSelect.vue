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
  slt2: undefined,
  slt3: "",
});

const dataOne = [
  { description: "users", value: "users" },
  { description: "comments", value: "comments" },
  { description: "error", value: "error" },
];

const dataTwo = computed(() => {
  return searchFor(
    `https://jsonplaceholder.typicode.com/${searchItem.value.slt1}`
  );

  async function searchFor(url: string) {
    const resp = await fetch(url);
    return await resp.json();
  }
});

const dataThree = computed(() => {
  if (searchItem.value.slt1 !== "users" || !searchItem.value.slt1) return [];
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
  },
  {
    valueKey: "value",
    descriptionKey: "value",
    field: "slt3",
    data: dataThree,
    placeholder: "선택3",
  },
]);
</script>
