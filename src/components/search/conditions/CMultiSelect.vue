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

type Obj = Record<string, any>;
type Data = Obj[] | Promise<Obj[]> | string;

interface SelectItem {
  label?: string;
  placeholder?: string;
  valueKey: string;
  descriptionKey: string;
  data: Data;
  field: string;
  dependsOn?: string;
}

const props = defineProps<{
  selects: Array<SelectItem>;
  modelValue: Obj;
}>();

const emit = defineEmits(["update:modelValue"]);

const selected = computed<Obj>(() => props.modelValue);

async function dataFor(data: Data, dependsOn?: string): Promise<Obj[]> {
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
    return [];
  }

  function selectItemFor(dependsOn: string): SelectItem {
    const result = props.selects.find((e) => e.field === dependsOn);
    if (!result) throw new Error(`doesn't have SelectItem for : ${dependsOn}`);
    return result;
  }

  async function selectedObjFor(si: SelectItem, dpndOn?: string): Promise<Obj> {
    const data = await dataFor(si.data, dpndOn); //여기서 classes를 리턴함......
    const prntSltValue = selected.value[si.field];
    if (!prntSltValue) throw new Error(`has not been chosen yet`);
    const result = data.find((e) => e[si.valueKey] === prntSltValue);
    if (!result) throw new Error(`doesn't have selected object for : ${si}`);
    return result;
  }
}
</script>
