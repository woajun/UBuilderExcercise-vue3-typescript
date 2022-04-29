<template>
  <div class="sl">
    <form>
      <button @click.prevent="submit">검색</button>
      {{ searchItem }}
      <Search :search-setting="searchSetting"></Search>
    </form>
    <Table :table-setting="tableSetting" :data="data"></Table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import Search from "@/components/search/Search.vue";
import Table from "@/components/list/Table.vue";
import { ICondition } from "@/components/search/Conditions";
import { TableSetting } from "@/components/list/tableSetting";

const props = defineProps<{
  searchSetting: Array<ICondition>;
  tableSetting: TableSetting;
  searchUrl: string;
}>();
const data = ref<Array<any>>([]);
const searchItem = ref<Record<string, any>>({});

function submit() {
  props.searchSetting.forEach((c) => {
    searchItem.value[c.field] = c.value;
  });
}
</script>
