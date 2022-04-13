<template>
    <div>
        {{ props }}
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { SingleDate } from '../Conditions';

interface Props {
    singleDate: SingleDate
}
const props = defineProps<Props>();
</script>

<style>
</style>