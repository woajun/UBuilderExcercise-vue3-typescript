<template>
  <div class="sl">
    {{ searchItem }}
    <button @click="runSearch">검색</button>
    <search :search-setting="searchSetting" ref="searchRef" />
    <list :list-setting="listSetting" v-model="rows" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import search from "@/components/search/Search.vue";
import list from "@/components/list/List.vue";
import { ICondition } from "@/components/search/Conditions";
import { ListSetting } from "@/components/list/listSettings";

defineProps<{
  searchSetting: Array<ICondition>;
  listSetting: ListSetting;
}>();

const searchRef = ref<InstanceType<typeof search> | null>(null);
const searchItem: undefined | any = ref(null);
const rows = ref();

function runSearch() {
  searchItem.value = searchRef.value?.getSearchItem().value;
  const params = searchRef.value?.getSearchItem().value;
  const response = searchByAxios(params);
  rows.value = response;
}

function searchByAxios(params: any) {
  const response = "ss";
  return response;
}
</script>
<style scoped></style>
