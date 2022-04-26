<template>
  <div>
    <template v-if="code.label"> {{ code.label }} : </template>
    <input
      type="text"
      v-model="code.value"
      @change="$emit('update:value', code.value)"
      :placeholder="code.placeholder"
    />
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
import { defineProps, ref } from "vue";
import { CodePopup } from "../Conditions";

interface Props {
  arg: CodePopup;
}
const props = defineProps<Props>();
const code = ref(props.arg);

function clickEvent() {
  const resval: Array<string> | undefined = code.value.event
    ? code.value.event(code.value.value as string)
    : undefined;
  if (resval) {
    code.value.firstResult = resval[0];
    code.value.secondResult = resval[1];
  }
}
</script>
