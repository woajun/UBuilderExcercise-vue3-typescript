<template>
  <div>
    <c-multi-select :selects="selects" />
  </div>
</template>
<script setup lang="ts">
import CMultiSelect from "@/components/search/conditions/CMultiSelect.vue";
import { computed, reactive, ref } from "vue";

const selects = [
  {
    valueKey: "value",
    descriptionKey: "value",
    field: "slt1",
    data: reactive([
      { description: "users", value: "users" },
      { description: "comments", value: "comments" },
    ]),
    label: "선택",
  },
];

// const data2 = computed(() =>
//   searchFor(`https://jsonplaceholder.typicode.com/${slt1.value}`)
// );

// const data3 = computed(() => {
//   if (slt1.value !== "users") return [];
//   if (!slt2.value) return [];
//   return [{ value: "male" }, { value: "female" }];
// });

// async function searchFor(url: string) {
//   const resp = await fetch(url);
//   return await resp.json();
// }
</script>
