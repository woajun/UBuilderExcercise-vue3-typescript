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
      <template #header><h3>custom header</h3></template>
    </modal>
  </Teleport>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from "vue";
import Modal from "./CMagnifierModal.vue";
const props = defineProps<{
  kind: "magnifier";
  default?: string;
  valueWidth?: string;
  valueClickEvent?: boolean;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  labelWidth?: string;
  fullWidth?: string;
  field: string;
  searchItem?: string;
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
