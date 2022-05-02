<template>
  <div class="sl">
    {{ searchItem }}
    <form>
      <button @click.prevent="submit">검색</button>
      <Search
        :conditions="searchSetting"
        :search-item="searchItem"
        @update:search-item="addSearchItem"
      ></Search>
    </form>
    <!-- <Table :table-setting="tableSetting" :data="data"></Table> -->
  </div>
</template>

<script setup lang="ts">
import { defineProps, reactive } from "vue";
import Search from "@/components/search/Search.vue";
// import Table from "@/components/list/Table.vue";
import { ICondition } from "@/components/search/Conditions";
import { TableSetting } from "@/components/list/tableSetting";

defineProps<{
  searchSetting: Array<ICondition>;
  tableSetting: TableSetting;
  searchUrl: string;
}>();
// const data = [];

const searchItem: Record<string, string> = reactive({});

function addSearchItem(key: string, value: string) {
  searchItem[key] = value;
}

function submit() {
  console.log(searchItem);
}
</script>
