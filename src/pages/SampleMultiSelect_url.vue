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
  slt1: "",
  slt2: "",
  slt3: "",
});

const dataOne = computed(() => {
  return searchFor(`https://jsonplaceholder.typicode.com/users`);

  async function searchFor(url: string) {
    const resp = await fetch(url);
    return await resp.json();
  }
});

const selects = reactive([
  {
    valueKey: "id",
    descriptionKey: "name",
    field: "slt1",
    data: dataOne,
    label: "선택",
    placeholder: "선택1",
  },
  {
    valueKey: "street",
    descriptionKey: "street",
    field: "slt2",
    data: "address",
    placeholder: "선택2",
    dependsOn: "slt1",
  },
  {
    valueKey: "lat",
    descriptionKey: "lat",
    field: "slt3",
    data: "geo",
    placeholder: "선택3",
    dependsOn: "slt2",
  },
]);
</script>
