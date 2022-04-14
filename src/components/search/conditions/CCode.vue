<template>
    <div>
        <br />
        <label for="">{{ code.label }}</label><span>:</span>
        <input type="text" v-model="code.val" />
        <button @click="clickEvent()">검색</button>
        <span v-for="(res, i) in code.result" :key="i">
            <input type="text" v-model="res.val" />
        </span>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { Code } from '../Conditions';

interface Props {
    arg: Code
}
const props = defineProps<Props>();
const code = ref(props.arg);

function clickEvent() {
    const coval = code.value
    const resval: Array<string> = coval.event(coval.val);
    console.log(resval);
    for (let i = 0; i < resval.length; i++) {
        if (coval.result) {
            if (coval.result[i]) {
                coval.result[i].val = resval[i]
            }
        }
    }
}


</script>

<style>
</style>