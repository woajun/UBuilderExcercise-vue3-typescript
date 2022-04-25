<template>
  <div class="sl">
    <button @click="doSearch">검색</button>
    {{ searchItem }}
    <search :search-setting="searchSetting" v-model:search-item="searchItem" />
    <list :list-setting="listSetting" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import search from "@/components/search/Search.vue";
import list from "@/components/list/List.vue";
import { ICondition } from "@/components/search/Conditions";
import { ListSetting } from "@/components/list/listSettings";
import { init, typeA, typeB, typeC } from "./mockServer";

const props = defineProps<{
  searchSetting: Array<ICondition>;
  listSetting: ListSetting;
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
