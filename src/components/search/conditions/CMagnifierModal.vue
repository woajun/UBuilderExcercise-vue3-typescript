<template>
  <Teleport to="body">
    <DefaultModal :show="showModal" @close="$emit('update:showModal', false)">
      <template #header>
        <template v-if="conditions">
          {{ modalSearchItem }}
          <Search
            :conditions="conditions"
            :search-item="modalSearchItem"
            @update:search-item="addModalSearchItem"
          ></Search>
        </template>
      </template>
      <template #body>
        <Table :table-setting="tableSetting" :data="modalData"></Table>
      </template>
    </DefaultModal>
  </Teleport>
</template>

<script setup lang="ts">
import DefaultModal from "@/components/common/DefaultModal.vue";
import Search from "@/components/search/Search.vue";
import Table from "@/components/list/Table.vue";
import { defineProps, reactive, ref } from "vue";
import { TableSetting } from "@/components/list/tableSetting"; // for MagnifierModal
import Condition from "@/components/search/conditions/Condition";

const props = defineProps<{
  matchField?: string;
  conditions?: Array<Condition>;
  tableSetting: TableSetting;
  data?: Array<Record<string, string>>;
  showModal: boolean;
}>();

const modalSearchItem: Record<string, string> = reactive({});
const modalData = ref();

function addModalSearchItem(key: string, value: string) {
  modalSearchItem[key] = value;
  if (props.data) {
    modalData.value = doSearch(props.data, modalSearchItem);
  }
}

function doSearch(
  dataArr: Array<Record<string, any>>,
  searchObj: Record<string, any>
) {
  const filtered = dataArr.filter((e) => {
    let flag = true;
    for (const key in searchObj) {
      flag = flag && isInclude(e[key], searchObj[key]);
    }
    if (flag) return e;
  });
  return filtered;

  function isInclude(target: string, search: string): boolean {
    if (target.includes(search)) {
      return true;
    }
    return false;
  }
}
</script>
