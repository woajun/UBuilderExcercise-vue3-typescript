<template>
  <div class="sl">
    <button @click="doSearch">검색</button>
    {{ searchItem }}
    <Search
      :search-setting="searchSetting"
      v-model:search-item="searchItem"
    ></Search>
    <Table :table-setting="tableSetting" :data="data"></Table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import Search from "@/components/search/Search.vue";
import Table from "@/components/list/Table.vue";
import { ICondition } from "@/components/search/Conditions";
import { TableSetting } from "@/components/list/tableSetting";
import { init, typeA, typeB, typeC } from "./mockServer";

const props = defineProps<{
  searchSetting: Array<ICondition>;
  tableSetting: TableSetting;
  searchUrl: string;
}>();
const searchItem = ref<Record<string, unknown>>({});
const data = ref<Array<any>>([]);

function doSearch() {
  requestToServer();
}

function requestToServer() {
  const params = searchItem.value;
  if (params.type == "A") {
    data.value = typeA;
  } else if (params.type == "B") {
    data.value = typeB;
  } else if (params.type == "C") {
    data.value = typeC;
  } else {
    data.value = init;
  }
}

doSearch();
</script>
<style scoped></style>
