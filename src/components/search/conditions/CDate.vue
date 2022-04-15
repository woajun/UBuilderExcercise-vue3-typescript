<template>
    <span>
        <input type="text" :value="props.arg.date" :placeholder="props.arg.placeholder">
    </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { CDate } from '../Conditions';

interface Props {
    arg: CDate
}

const props = defineProps<Props>();
</script>

<style>
</style>