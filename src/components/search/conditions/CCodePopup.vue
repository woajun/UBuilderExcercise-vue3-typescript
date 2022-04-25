<template>
  <div>
    <input
      type="text"
      v-model="code.value"
      @change="$emit('update:value', code.value)"
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
  const coval = code.value;
  const resval: Array<string> | undefined = coval.event
    ? coval.event(coval.value)
    : undefined;
  if (resval) {
    code.value.firstResult = resval[0];
    code.value.secondResult = resval[1];
  }
}
</script>
