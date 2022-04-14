<template>
    <div>
        <!-- {{ props }} -->
    </div>
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