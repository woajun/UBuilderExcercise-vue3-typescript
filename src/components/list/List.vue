<template>
    <div>

        <br />=============[리스트]====================<br />
        {{ props }}
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { ListSetting } from './listSettings'

interface Props {
    listSetting: ListSetting,
}
const props = defineProps<Props>()

</script>