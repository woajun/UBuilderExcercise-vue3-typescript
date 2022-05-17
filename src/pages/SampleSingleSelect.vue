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
    <button @click="dataChange">URL</button>
    <button @click="dataChangeArray">Array</button>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
import CSingleSelect from "@/components/search/conditions/CSingleSelect.vue";
import { ref } from "vue";

const selectValue = ref(1);
const data = ref();

data.value = "https://jsonplaceholder.typicode.com/users";

function dataChange() {
  data.value = "https://jsonplaceholder.typicode.com/comments";
}

function dataChangeArray() {
  data.value = [
    {
      name: "10201-가나가",
      id: 1,
    },
    {
      name: "10202-가나나",
      id: 2,
    },
    {
      name: "10203-가나다",
      id: 3,
    },
  ];
}
</script>
