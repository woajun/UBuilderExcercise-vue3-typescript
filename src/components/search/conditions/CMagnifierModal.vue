<template>
  <Teleport to="body">
    <DefaultModal :show="showModal">
      <template #header>
        <template v-if="conditions">
          <Search
            :conditions="conditions"
            :search-item="modalSearchItem"
            @update:search-item="addModalSearchItem"
            form-id="modalForm"
          ></Search>
        </template>
      </template>
      <template #body>
        <Table
          :table-setting="tableSetting"
          :data="modalData"
          v-model:selected="modalSelected"
        ></Table>
      </template>
      <template #footer>
        <button
          class="modal-default-button"
          @click.prevent="$emit('update:selected', modalSelected)"
          form="modalForm"
        >
          선택
        </button>
        <button
          class="modal-default-button"
          @click="$emit('update:showModal', false)"
        >
          닫기
        </button>
        {{ modalSelected }}
      </template>
    </DefaultModal>
  </Teleport>
</template>

<script setup lang="ts">
import DefaultModal from "@/components/common/DefaultModal.vue";
import Search from "@/components/search/Search.vue";
import Table from "@/components/list/Table.vue";
import { defineProps, onMounted, reactive, ref } from "vue";
import { TableSetting } from "@/components/list/tableSetting"; // for MagnifierModal
import Condition from "@/components/search/conditions/Condition";

const props = defineProps<{
  conditions?: Array<Condition>;
  tableSetting: TableSetting;
  data?: Array<Record<string, string>>;
  showModal: boolean;
  selected?: Record<string, any>;
}>();

const modalSearchItem: Record<string, string> = reactive({});
const modalData = ref();
const modalSelected = ref();

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

onMounted(() => {
  modalSelected.value = props.selected;
});
</script>
