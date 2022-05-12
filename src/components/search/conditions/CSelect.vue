<template>
  <div>
    <template v-if="label"> {{ label }} : </template>
    <button @click.prevent="calcDepth(options)">깊이재기</button>
    <CSelectSelect
      :placeholder="placeholder"
      :initial-value="initialValue"
      :options="options"
      :search-item="items"
      @update:search-item="(v, i) => (items[i] = v)"
      :index="0"
    ></CSelectSelect>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive, watch } from "vue";
import { Option } from "./Condition";
import CSelectSelect from "./CSelectSelect.vue";

defineProps<{
  kind: "select";
  width?: string;
  field: string;
  searchItem?: string[];
  label?: string;
  initialValue?: string | string[];
  options: Option[];
  placeholder?: string | string[];
}>();

const items: string[] = reactive([]);

const emit = defineEmits(["update:searchItem"]);
watch(items, (newItems) => {
  emit("update:searchItem", newItems);
});

function calcDepth(options: Option[]): number {
  const depthest = Math.max(...arrDepth(options), 0);
  console.log(depthest);
  return depthest;

  function arrDepth(options: Option[]): number[] {
    const result: number[] = [];
    aDepth(0, options, result);
    return result;
  }
  function aDepth(d: number, array: Option[], result: number[]) {
    d++;
    result.push(d);
    for (let i = 0; i < array.length; i++) {
      const e = array[i];
      if (e.children) {
        aDepth(d, e.children, result);
      }
    }
  }
}
</script>
