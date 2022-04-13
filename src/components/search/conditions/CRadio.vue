<template>
    <div>
        {{ props }}
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Radio } from '../Conditions';

interface Props {
    radio: Radio
}
const props = defineProps<Props>();
</script>

<style>
</style>