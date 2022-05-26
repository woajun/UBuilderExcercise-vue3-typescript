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

interface ReceiveSelectSetting extends SelectSetting {
  data: Obj[] | Promise<Obj[]>;
}

interface ReferenceSelectSetting extends SelectSetting {
  data: string;
  dependsOn: string;
}

const props = defineProps<{
  selects: Array<ReceiveSelectSetting | ReferenceSelectSetting>;
  modelValue: Obj;
}>();

const emit = defineEmits(["update:modelValue"]);

const selected = computed<Obj>(() => props.modelValue);

async function dataFor(data: Data, dependsOn?: string): Promise<Obj[]> {
  if (typeof data !== "string") return data;
  try {
    if (!dependsOn) throw new Error(`don't have dependsOn`);
    const prntSetting = settingFindBy(dependsOn);
    const prntSelectedObj = await selectedObjFor(prntSetting);
    console.log(data, dependsOn, prntSelectedObj[data]);
    return prntSelectedObj[data];
  } catch (error) {
    console.log(error);
    return [];
  }

  function settingFindBy(field: string): SelectSetting {
    const result = props.selects.find((e) => e.field === field);
    if (!result) throw new Error(`doesn't have SelectSetting for : ${field}`);
    return result;
  }

  async function selectedObjFor(setting: SelectSetting): Promise<Obj> {
    const settingData = await dataFor(setting.data, setting.dependsOn);
    const result = settingData.find(
      (e) => e[setting.valueKey] === selectedFor(setting)
    );
    if (!result)
      throw new Error(`doesn't have selected object for : ${setting.field}`);
    return result;

    function selectedFor(setting: SelectSetting) {
      const result = selected.value[setting.field];
      if (!result)
        throw new Error(`has not been chosen yet : ${setting.field}`);
      return result;
    }
  }
}
</script>
