<template>
    <div>
        <!-- {{ props }} -->
    </div>
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