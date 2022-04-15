<template>
    <span>
        <input type="text" :value="props.arg.value" :placeholder="props.arg.placeholder">
    </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Text } from '../Conditions';

interface Props {
    arg: Text
}
const props = defineProps<Props>();
</script>

<style>
</style>