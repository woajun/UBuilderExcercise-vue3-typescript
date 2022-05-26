<template>
  <hr />
  <template v-for="select in selects" :key="select.field">
    <c-single-select
      :label="select.label"
      :placeholder="select.placeholder"
      :valueKey="select.valueKey"
      :descriptionKey="select.descriptionKey"
      :data="dataFor(select.data, select.dependsOn)"
      v-model="selected[select.field]"
      :dependsOn="select.dependsOn ? selected[select.dependsOn] : undefined"
    />
  </template>
</template>

<script setup lang="ts">
import CSingleSelect from "./CSingleSelect.vue";
import { defineProps, defineEmits, computed } from "vue";
import { Data } from "./Condition";

interface SelectItem {
  label?: string;
  placeholder?: string;
  valueKey: string;
  descriptionKey: string;
  data: Data | Promise<Data> | string;
  field: string;
  dependsOn?: string;
}

const props = defineProps<{
  selects: Array<SelectItem>;
  modelValue: Record<string, any>;
}>();

const emit = defineEmits(["update:modelValue"]);

const selected = computed<Record<string, any>>(() => props.modelValue);

async function dataFor(
  data: string | Data | Promise<Data>,
  dependsOn?: string
) {
  try {
    if (typeof data !== "string") return data;
    if (!dependsOn) throw new Error(`don't have dependsOn`);
    const prntSelectItem = selectItemFor(dependsOn);
    const prntSelected = await selectedObjFor(
      prntSelectItem,
      prntSelectItem.dependsOn
    );
    return prntSelected[data];
  } catch (error) {
    console.log(error);
  }

  function selectItemFor(dependsOn: string): SelectItem {
    const result = props.selects.find((e) => e.field === dependsOn);
    if (!result) throw new Error(`doesn't have SelectItem for : ${dependsOn}`);
    return result;
  }

  async function selectedObjFor(
    si: SelectItem,
    dependsOn?: string
  ): Promise<Record<string, any>> {
    const data = await dataFor(si.data, dependsOn); //여기서 classes를 리턴함......
    const prntSltValue = selected.value[si.field];
    if (!prntSltValue) throw new Error(`has not been chosen yet`);
    const result = data.find((e: any) => e[si.valueKey] === prntSltValue);
    if (!result) throw new Error(`doesn't have selected object for : ${si}`);
    return result;
  }
}
</script>
