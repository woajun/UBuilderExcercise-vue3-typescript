<template>
  <div class="sl">
    <button @click="doSearch">검색</button>
    <search :search-setting="searchSetting" ref="searchRef" />
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

defineProps<{
  searchSetting: Array<ICondition>;
  listSetting: ListSetting;
  searchUrl: string;
}>();

const searchRef = ref<InstanceType<typeof search> | null>(null);
const data = ref<Array<any>>([]);

function doSearch() {
  const params = searchRef.value?.searchItem;
  console.log(params);
  requestToServer(params);
}

function requestToServer(params: any) {
  // serachUrl 사용
  if (!params) return (data.value = init);
  if (params.type == "") {
    data.value = init;
  } else if (params.type == "A") {
    data.value = typeA;
  } else if (params.type == "B") {
    data.value = typeB;
  } else if (params.type == "C") {
    data.value = typeC;
  }
}

doSearch();
</script>
<style scoped></style>
