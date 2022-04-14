<template>
    <div>
        <!-- {{ props }} -->
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Label } from '../Conditions';

interface Props {
    arg: Label
}
const props = defineProps<Props>();
</script>

<style>
</style>