<template>
  <div>
    <template v-if="code.label"> {{ code.label }} : </template>
    <input type="text" v-model="value" :placeholder="code.placeholder" />
    <button @click="clickEvent()">🔍</button>
    <template v-if="code.firstResultVisible">
      <input type="text" v-model="code.firstResult" disabled />
    </template>
    <template v-if="code.secondResultVisible">
      <input type="text" v-model="code.secondResult" disabled />
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits, computed, onMounted } from "vue";
import { CodePopup } from "../Conditions";

interface Props {
  arg: CodePopup;
  modelValue: any;
}
const props = defineProps<Props>();
const code = ref(props.arg);
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

onMounted(() => {
  init();
});

function init() {
  value.value = code.value.value;
}

function clickEvent() {
  const resval: Array<string> | undefined = code.value.event
    ? code.value.event(code.value.value as string)
    : undefined;
  if (resval) {
    value.value = resval[0];
    code.value.firstResult = resval[1];
    code.value.secondResult = resval[2];
  }
}
</script>
