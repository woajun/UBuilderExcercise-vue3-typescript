<template>
  <div>
    {{ selectValue }}
    <c-single-select
      v-model="selectValue"
      label="학년선택"
      kind="singleSelect"
      descriptionKey="name"
      valueKey="id"
      :data="data"
    />
  </div>
  <button @click="btnURL1">URL1</button>
  <button @click="btnURL2">URL2</button>
  <button @click="btnURL3">URL3</button>
  <button @click="btnUnvalidArray">unvalid array</button>
  <button @click="btnStaticArray">static array</button>
</template>

<script setup lang="ts">
import CSingleSelect from "@/components/search/conditions/CSingleSelect.vue";
import { Ref, ref } from "vue";

type Data = Array<Record<string, any>>;

const selectValue = ref("1");

const data: Ref<Promise<Data> | Data> = ref(
  fetchJson("https://jsonplaceholder.typicode.com/users")
);

async function fetchJson(url: string): Promise<Data> {
  const response = await fetch(url);
  return await response.json();
}

function btnURL1() {
  data.value = fetchJson("https://jsonplaceholder.typicode.com/users");
}

function btnURL2() {
  data.value = fetchJson("https://jsonplaceholder.typicode.com/comments");
}
function btnURL3() {
  data.value = fetchJson("https://jsonplaceholder.typicode.com/posts/1");
}

function btnUnvalidArray() {
  data.value = fetchJson("https://aaaaaaaa.bbbbbbbbbbb");
}

function btnStaticArray() {
  data.value = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
    { id: 5, name: 5 },
  ];
}
</script>
