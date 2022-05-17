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
    <button @click="dataChange">data change</button>
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
</script>
