<template>
    <div>
        <span v-for="(box, i) in select.optionBox" :key="i">
            <select v-model="box.selectedValue"
                @change="$emit('value', { field: box.field, value: box.selectedValue })">
                <option v-for="(option, t) in box.options" :key="t"
                    v-show="getParent(i) == option.parent || option.parent == undefined" :value="option.value"
                    :disabled="option.disabled">
                    {{ option.description }}
                </option>
            </select>
            {{ box.endLabel }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { Select } from '../Conditions';

interface Props {
    arg: Select
}
const props = defineProps<Props>();
const select = ref(props.arg);

function getParent(i: number): string | undefined {
    let parent = undefined;
    if (select.value.optionBox[i - 1]) {
        if (select.value.optionBox[i - 1].selectedValue !== undefined) {
            parent = select.value.optionBox[i - 1].selectedValue as string;
        }
    }
    return parent;
}
</script>