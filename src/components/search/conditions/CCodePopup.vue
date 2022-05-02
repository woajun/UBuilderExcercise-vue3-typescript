<template>
  <div>
    <template v-if="label"> {{ label }} : </template>
    <input
      type="text"
      :placeholder="placeholder"
      :value="result"
      @input="emit('update:searchItem', ($event.target as HTMLInputElement).value)"
    />
    <button @click.prevent="clickEvent">🔍</button>
    <template v-if="firstResultVisible">
      <input type="text" :value="firstResult" disabled />
    </template>
    <template v-if="secondResultVisible">
      <input type="text" :value="secondResult" disabled />
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from "vue";

const props = defineProps<{
  kind: "codePopup";
  value?: string;
  valueWidth?: string;
  valueClickEvent?: boolean;
  placeholder?: string;
  disabled?: boolean;
  firstResultVisible?: boolean;
  firstResultDefault?: string;
  firstResultWidth?: string;
  firstResultPlaceholder?: string;
  secondResultVisible?: boolean;
  secondResultDefault?: string;
  secondResultWidth?: string;
  secondResultPlaceholder?: string;
  event?(value: string): Array<string>;
  label?: string;
  labelWidth?: string;
  fullWidth?: string;
  field: string;
  parentField?: string;
  searchItem?: string;
}>();
const emit = defineEmits(["update:searchItem"]);

const firstResult = ref("");
const secondResult = ref("");

const result = computed({
  get() {
    return props.searchItem;
  },
  set(value) {
    emit("update:searchItem", value);
  },
});

firstResult.value = props.firstResultDefault ?? "";
secondResult.value = props.secondResultDefault ?? "";

function clickEvent() {
  const resval: Array<string> | undefined = props.event
    ? props.event(result.value as string)
    : undefined;
  if (resval) {
    emit("update:searchItem", resval[0]);
    firstResult.value = resval[1];
    secondResult.value = resval[2];
  }
}
</script>
