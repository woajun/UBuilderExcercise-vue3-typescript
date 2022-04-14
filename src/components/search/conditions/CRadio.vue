<template>
    <span v-for="option in radio.options" :key="option.value">
        <input :value="option.value" :id="radio.field + option.value" type="radio" :name="radio.field"
            :checked="option.checked" :disabled="option.disabled" />
        <label :for="radio.field + option.value">{{ option.description }}</label>
    </span>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { Radio } from '../Conditions';

interface Props {
    arg: Radio
}
const props = defineProps<Props>();
const radio = ref(props.arg);

</script>

<style>
</style>