<template>
  <div>
    {{ searchItem }}
    <c-multi-select
      :selects="selects"
      @update:searchItem="(newSearchItem) => (searchItem = newSearchItem)"
    />
  </div>
</template>
<script setup lang="ts">
import CMultiSelect from "@/components/search/conditions/CMultiSelect.vue";
import { ref } from "vue";

type Data = Array<Record<string, any>>;
type Selected = Record<string, any>;

const searchItem = ref({});

const selects = [
  {
    valueKey: "value",
    descriptionKey: "value",
    field: "slt1",
    data: data1,
    label: "선택",
  },
  {
    valueKey: "id",
    descriptionKey: "name",
    field: "slt2",
    data: data2,
  },
  {
    valueKey: "value",
    descriptionKey: "value",
    field: "slt3",
    data: data3,
  },
];

function data1(): Data {
  return [
    { description: "users", value: "users" },
    { description: "comments", value: "comments" },
  ];
}

function data2(selected: Selected): Promise<Data> {
  const slt1 = selected["slt1"];
  return searchFor(`https://jsonplaceholder.typicode.com/${slt1}`);

  async function searchFor(url: string) {
    const resp = await fetch(url);
    return await resp.json();
  }
}

function data3(selected: Selected): Data {
  const slt1 = selected["slt1"];
  const slt2 = selected["slt2"];

  if (slt1 !== "users") return [];
  if (!slt2) return [];
  return [{ value: "male" }, { value: "female" }];
}
</script>
