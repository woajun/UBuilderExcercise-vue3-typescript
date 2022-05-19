<template>
  <div>
    <span> 선택값 : </span>
    <span v-show="selectValue">{{ typeof selectValue }} </span>
    <span v-if="selectValue">{{ selectValue.id }} </span>
    <span v-if="selectValue">{{ selectValue.name }} </span>
    <br />
    <c-single-select
      v-model="selectValue"
      label="학년선택"
      kind="singleSelect"
      descriptionKey="name"
      valueKey="id"
      :data="data"
      placeholder="선택하세요"
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

const selectValue = ref();

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
    { id: "이", name: 2 },
    { id: 3, name: "숫자3" },
    { id: "사", name: 4 },
    { id: { id: "가", name: "A" }, name: "A" },
    { id: { id: "나", name: "B" }, name: "B" },
    { id: [], name: 6 },
    { id: new Date(), name: 7 },
  ];
}
</script>
