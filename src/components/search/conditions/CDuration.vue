<template>
    <div>
        <!-- {{ props }} -->
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Duration } from '../Conditions';

interface Props {
    arg: Duration
}
const props = defineProps<Props>();
</script>

<style>
</style>