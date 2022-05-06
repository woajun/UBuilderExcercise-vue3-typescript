<template>
  <div>
    <template v-if="label"> {{ label }} : </template>
    <input
      type="text"
      :placeholder="placeholder"
      :value="result"
      @input="emit('update:searchItem', ($event.target as HTMLInputElement).value)"
    />
    <button @click.prevent="showModal = true">🔍</button>
  </div>
  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <template v-if="modal.conditions">
          {{ modalSearchItem }}
          <Search
            :conditions="modal.conditions"
            :search-item="modalSearchItem"
            @update:search-item="addModalSearchItem"
          ></Search>
        </template>
      </template>
      <template #body>
        <Table :table-setting="modal.tableSetting" :data="modalData"></Table>
      </template>
    </modal>
  </Teleport>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref, reactive } from "vue";
import Modal from "./CMagnifierModal.vue";
import { MagnifierResult, MagnifierModal } from "./Condition";
import Search from "@/components/search/Search.vue";
import Table from "@/components/list/Table.vue";
const props = defineProps<{
  kind: "magnifier";
  label?: string;
  labelWidth?: string;
  fullWidth?: string;
  field: string;
  default?: string;
  valueWidth?: string;
  valueClickEvent?: boolean;
  placeholder?: string;
  disabled?: boolean;
  results?: Array<MagnifierResult>;
  modal: MagnifierModal;
  data?: Array<Record<string, string>>;
  dataURL?: string;

  searchItem?: string;
  parentVal?: string;
}>();
const emit = defineEmits(["update:searchItem"]);

const modalSearchItem: Record<string, string> = reactive({});

const modalData = ref();
const showModal = ref(false);
const result = computed({
  get() {
    return props.searchItem;
  },
  set(value) {
    emit("update:searchItem", value);
  },
});

if (props.default !== undefined) {
  emit("update:searchItem", props.default);
} else {
  emit("update:searchItem", "");
}

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
