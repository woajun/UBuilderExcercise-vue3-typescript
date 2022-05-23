<template>
  <div>
    {{ searchItem }}
    <c-multi-select :selects="selects" v-model="searchItem" />
  </div>
</template>
<script setup lang="ts">
import CMultiSelect from "@/components/search/conditions/CMultiSelect.vue";
import { reactive, ref, watch } from "vue";

type Data = Array<Record<string, any>>;

const searchItem = ref({
  slt1: "",
  slt2: "",
  slt3: "",
});

const dataOne = [
  { description: "users", value: "users" },
  { description: "comments", value: "comments" },
];
const dataTwo = ref();
const dataThree = ref();

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

watch(
  () => {
    return { slt1: searchItem.value.slt1, slt2: searchItem.value.slt2 };
  },
  ({ slt1, slt2 }) => {
    dataTwo.value = data2(slt1);
    dataThree.value = data3(slt1, slt2);
  }
);

function data2(slt1: string): Promise<Data> {
  return searchFor(`https://jsonplaceholder.typicode.com/${slt1}`);

  async function searchFor(url: string) {
    const resp = await fetch(url);
    return await resp.json();
  }
}

function data3(slt1: string, slt2: string): Data {
  if (slt1 !== "users") return [];
  if (!slt2) return [];
  return [{ value: "male" }, { value: "female" }];
}
</script>
