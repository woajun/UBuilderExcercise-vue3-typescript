<template>
  <div class="sl">
    {{ searchItem }}
    <form>
      <button @click.prevent="submit">검색</button>
      <Search
        :conditions="conditions"
        :search-item="searchItem"
        @update:search-item="addSearchItem"
      ></Search>
    </form>
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

const conditions = computed(() => props.searchSetting.conditions);
const searchUrl = computed(() => props.searchSetting.searchUrl);
const searchItem: Record<string, string> = reactive({});

function addSearchItem(key: string, value: string) {
  searchItem[key] = value;
}

function submit() {
  console.log(searchUrl.value);
  console.log(searchItem);
}
</script>
