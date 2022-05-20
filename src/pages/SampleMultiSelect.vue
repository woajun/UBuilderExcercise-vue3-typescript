<template>
  <div>
    <c-single-select
      label="1차 선택"
      v-model="slt1"
      value-key="value"
      description-key="description"
      :data="data1"
    />
    <c-single-select
      v-model="slt2"
      value-key="id"
      description-key="name"
      :data="data2"
    />
    <hr />
    {{ slt1 }}
    {{ slt2 }}
  </div>
</template>
<script setup lang="ts">
import CSingleSelect from "@/components/search/conditions/CSingleSelect.vue";
import { computed, reactive, ref } from "vue";

const slt1 = ref("users");
const slt2 = ref("");
const data1 = reactive([
  { description: "users", value: "users" },
  { description: "comments", value: "comments" },
]);
const data2 = computed(() =>
  searchFor(`https://jsonplaceholder.typicode.com/${slt1.value}`)
);

async function searchFor(url: string) {
  const resp = await fetch(url);
  return await resp.json();
}
</script>
