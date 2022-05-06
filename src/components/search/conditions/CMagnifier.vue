<template>
  <div>
    <template v-if="label"> {{ label }} : </template>
    <input type="text" :placeholder="placeholder" v-model="value" />
    <button @click.prevent="showModal = true">🔍</button>
    <template v-for="res in results" :key="res.field">
      <input type="text" disabled :value="result[res.field]" />
    </template>
  </div>
  <Modal v-bind="modal" :data="data" v-model:showModal="showModal"></Modal>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  computed,
  ref,
  reactive,
  WritableComputedRef,
  onMounted,
} from "vue";
import Modal from "./CMagnifierModal.vue";
import { MagnifierResult, MagnifierModal } from "./Condition";

const props = defineProps<{
  kind: "magnifier";
  label?: string;
  labelWidth?: string;
  fullWidth?: string;
  field: string;
  fieldLinked?: string;
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
const showModal = ref(false);
const result: Record<string, any> = reactive({});
const field = props.fieldLinked ?? props.field;
const value: WritableComputedRef<string | undefined> = computed({
  get() {
    return props.searchItem;
  },
  set(value) {
    const found = doSearch(value);
    if (found) {
      for (const key in found) {
        result[key] = found[key];
      }
    } else {
      for (const key in result) {
        result[key] = "";
      }
    }
    emit("update:searchItem", value);
  },
});

function doSearch(value: string | undefined) {
  if (value) {
    return props.data?.find((e) => e[field] === value);
  }
  return undefined;
}

onMounted(() => {
  value.value = props.default;
});
</script>
