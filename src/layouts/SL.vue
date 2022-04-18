<template>
  <div class="sl">
    <button @click="runSearch">검색</button>
    {{ searchItem }}
    <search :search-setting="searchSetting" ref="searchRef" />
    <list :list-setting="listSetting" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import search from "@/components/search/Search.vue";
import list from "@/components/list/List.vue";
import { ICondition } from "@/components/search/Conditions";
import { ListSetting } from "@/components/list/listSettings";

const props = defineProps<{
  searchSetting: Array<ICondition>;
  listSetting: ListSetting;
}>();

const searchRef = ref<InstanceType<typeof search> | null>(null);

let searchItem: undefined | any = ref({});

//TODO list초기화
function initList() {}

function runSearch() {
  searchItem.value = searchRef.value?.getSearchItem().value;
  // 백엔드에 요청
  // 검색결과 응답받음.
  // list에 전달
}
</script>
<style scoped></style>
