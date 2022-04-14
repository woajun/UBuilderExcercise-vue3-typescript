<template>
    <div>
        <!-- {{ props }} -->
    </div>
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