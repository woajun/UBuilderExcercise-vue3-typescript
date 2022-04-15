<template>
  <div class="sl">
    <button @click="runSearch">검색</button>
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

function runSearch() {
  console.log(searchRef.value?.getSearch());
}
</script>
<style scoped></style>
