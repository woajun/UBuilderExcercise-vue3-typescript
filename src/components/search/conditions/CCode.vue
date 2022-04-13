<template>
    <div>
        {{ props }}
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Code } from '../Conditions';

interface Props {
    Code: Code
}
const props = defineProps<Props>();
</script>

<style>
</style>