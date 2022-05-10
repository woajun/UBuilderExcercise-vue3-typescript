<template>
  <div class="sl">
    {{ searchItem }}
    <button @click.prevent="submit" :form="formId">검색</button>
    <Search
      :id="formId"
      :conditions="conditions"
      :search-item="searchItem"
      @update:search-item="addSearchItem"
    ></Search>
    <!-- <Table :table-setting="tableSetting" :data="data"></Table> -->
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, reactive } from "vue";
import Search from "@/components/search/Search.vue";
// import Table from "@/components/list/Table.vue";
import { TableSetting } from "@/components/list/tableSetting";
import SearchSetting from "@/components/search/SearchSetting";

const props = defineProps<{
  searchSetting: SearchSetting;
  tableSetting: TableSetting;
}>();

// const data = [];

const formId = "id" + Math.random().toString(16).slice(2);
const conditions = computed(() => props.searchSetting.conditions);
const searchUrl = computed(() => props.searchSetting.searchUrl);
const searchItem: Record<string, string | string[]> = reactive({});

function addSearchItem(key: string, value: string | string[]) {
  searchItem[key] = value;
}

function submit() {
  console.log(searchUrl.value);
  console.log(searchItem);
}
</script>
