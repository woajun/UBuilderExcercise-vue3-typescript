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
  <Modal v-bind="modal" :data="data" v-model:showModal="showModal"></Modal>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from "vue";
import Modal from "./CMagnifierModal.vue";
import { MagnifierResult, MagnifierModal } from "./Condition";

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
</script>
