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
  <button @click="dataChange">URL1</button>
  <button @click="dataChange2">URL2</button>
  <button @click="dataChange3">unvalid array</button>
  <button @click="dataChange4">empty array</button>
</template>

<script setup lang="ts">
import CSingleSelect from "@/components/search/conditions/CSingleSelect.vue";
import { ref } from "vue";

const selectValue = ref(1);

const data = ref();

function dataChange() {
  data.value = fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => {
      return res.json();
    }
  );
}

function dataChange2() {
  data.value = fetch("https://jsonplaceholder.typicode.com/comments").then(
    (res) => {
      return res.json();
    }
  );
}

function dataChange3() {
  data.value = fetch("https://jsonplaceholder.typicode.com/user").then(
    (res) => {
      return res.json();
    }
  );
}
function dataChange4() {
  data.value = [];
}
</script>
