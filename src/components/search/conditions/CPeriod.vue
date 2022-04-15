<template>
    <span>
        <input type="text" :value="props.arg.from" :placeholder="props.arg.fromPlaceholder">
    </span>
    <span>
        ~
    </span>
    <span>
        <input type="text" :value="props.arg.to" :placeholder="props.arg.toPlaceholder">
    </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Period } from '../Conditions';

interface Props {
    arg: Period
}
const props = defineProps<Props>();
</script>

<style>
</style>