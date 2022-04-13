<template>
    <div>
        {{ props }}
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Select } from '../Conditions';

interface Props {
    select: Select
}
const props = defineProps<Props>();
</script>

<style>
</style>