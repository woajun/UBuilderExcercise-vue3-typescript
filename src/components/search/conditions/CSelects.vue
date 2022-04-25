<template>
  <div>
    <span v-for="(box, i) in selects.selects" :key="i">
      <select
        v-model="box.selectedValue"
        @change="$emit('value', { field: box.field, value: box.selectedValue })"
      >
        <option
          v-for="(option, t) in box.options"
          :key="t"
          v-show="getParent(i) == option.parent || option.parent == undefined"
          :value="option.value"
          :disabled="option.disabled"
        >
          <!-- TODO option.value가 부모값에 따라 부모값 첫번째가 선택되거나 아예 빈 값을 갖도록-->
          {{ option.description }}
        </option>
      </select>
      {{ box.endLabel }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { Selects } from "../Conditions";

interface Props {
  arg: Selects;
}
const props = defineProps<Props>();
const selects = ref(props.arg);

function getParent(i: number): string | undefined {
  let parent = undefined;
  if (selects.value.selects[i - 1]) {
    if (selects.value.selects[i - 1].selectedValue !== undefined) {
      parent = selects.value.selects[i - 1].selectedValue as string;
    }
  }
  return parent;
}
</script>
