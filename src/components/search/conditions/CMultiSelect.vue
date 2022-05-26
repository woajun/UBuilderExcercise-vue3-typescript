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

interface SelectSetting {
  label?: string;
  placeholder?: string;
  valueKey: string;
  descriptionKey: string;
  data: Data;
  field: string;
  dependsOn?: string;
}

const props = defineProps<{
  selects: Array<SelectSetting>;
  modelValue: Obj;
}>();

const emit = defineEmits(["update:modelValue"]);

const selected = computed<Obj>(() => props.modelValue);

async function dataFor(data: Data, dependsOn?: string): Promise<Obj[]> {
  try {
    if (typeof data !== "string") return data;
    const key = data;
    if (!dependsOn) throw new Error(`don't have dependsOn`);
    const prntSetting = settingFindBy(dependsOn);
    const prntSelectedObj = await selectedObjFor(
      prntSetting,
      prntSetting.dependsOn
    );
    return prntSelectedObj[key];
  } catch (error) {
    console.log(error);
    return [];
  }

  function settingFindBy(dependsOn: string): SelectSetting {
    const result = props.selects.find((e) => e.field === dependsOn);
    if (!result)
      throw new Error(`doesn't have SelectSetting for : ${dependsOn}`);
    return result;
  }

  async function selectedObjFor(
    setting: SelectSetting,
    dpndOn?: string
  ): Promise<Obj> {
    const data = await dataFor(setting.data, dpndOn);
    const prntSltValue = selected.value[setting.field];
    if (!prntSltValue)
      throw new Error(`has not been chosen yet : ${setting.field}`);
    const result = data.find((e) => e[setting.valueKey] === prntSltValue);
    if (!result)
      throw new Error(`doesn't have selected object for : ${setting}`);
    return result;
  }
}
</script>
