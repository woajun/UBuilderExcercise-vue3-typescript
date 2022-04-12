<template>
    <div>
        {{props}}
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import {ICondition} from './Conditions';

interface Props {
    conditions: Array<ICondition>
}

const props = defineProps<Props>()

</script>
