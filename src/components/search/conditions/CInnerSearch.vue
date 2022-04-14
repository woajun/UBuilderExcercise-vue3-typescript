<template>
    <span>
        <input type="text" v-model="code.value" />
        <button @click="clickEvent()">🔍</button>
        <input type="text" v-model="code.firstResult" disabled />
        <input type="text" v-model="code.secondResult" disabled />
    </span>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { InnerSearch } from '../Conditions';

interface Props {
    arg: InnerSearch
}
const props = defineProps<Props>();
const code = ref(props.arg);

function clickEvent() {
    const coval = code.value
    const resval: Array<string> = coval.event(coval.value);
    code.value.firstResult = resval[0];
    code.value.secondResult = resval[1];
}

</script>