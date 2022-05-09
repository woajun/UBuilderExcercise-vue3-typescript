<template>
  <Teleport to="body">
    <DefaultModal :show="showModal" @close="$emit('update:showModal', false)">
      <template #header>
        <template v-if="conditions">
          <Search
            :conditions="conditions"
            :search-item="searchItem"
            @update:search-item="addSearchItem"
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

const searchItem: Record<string, string> = reactive({});
const modalData = ref();
const modalSelected = ref();

function addSearchItem(key: string, value: string) {
  searchItem[key] = value;
  if (props.data) {
    modalData.value = filtering(props.data, searchItem);
  }
}

function filtering(
  target: Array<Record<string, any>>,
  searchItem: Record<string, any>
) {
  const result = target.filter((e) => {
    let flag = true;
    for (const key in searchItem) {
      flag = flag && isInclude(e[key], searchItem[key]);
    }
    if (flag) return e;
  });
  return result;

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
