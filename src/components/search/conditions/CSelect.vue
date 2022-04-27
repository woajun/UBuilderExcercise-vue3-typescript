<template>
  <div style="display: inline">
    <template v-if="select.label"> {{ select.label }} : </template>
    <select v-model="select.selectedValue" @change="changeEvent">
      <template v-for="option in select.options" :key="option.value">
        <option
          v-if="option.parent == parent || option.parent == null"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.description }}
        </option>
      </template>
    </select>
    {{ select.endLabel }}
    <template v-if="select.chain">
      <CSelect
        :arg="select.chain"
        @update:value="receiveSelected"
        :parent="select.selectedValue"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits } from "vue";
import { Select } from "../Conditions";

interface Props {
  arg: Select;
  parent?: string;
}
const props = defineProps<Props>();
const select = ref(props.arg);
const emit = defineEmits(["update:value"]);

function changeEvent() {
  // 부모의 reacitve한 애를 자식으로 보내서
  // 부모가 mutate했을 때
  // 자식이 트리거가 되는....
  emit("update:value", select.value.selectedValue, select.value.field);
}

function receiveSelected(value: any, field: any): void {
  emit("update:value", value, field);
}
</script>
