<template>
  <hr />
  <template v-for="select in selectSettings" :key="select.field">
    <c-single-select
      :label="select.label"
      :placeholder="select.placeholder"
      :valueKey="select.valueKey"
      :descriptionKey="select.descriptionKey"
      v-model="select.modelValue"
      :dependsOn="select.dependsOnValue"
      :data="dataFor(select)"
      @update:selectedObject="(v) => (select.selectedObject = v)"
    />
    {{ select.selectedObject }}
  </template>
</template>

<script setup lang="ts">
import CSingleSelect from "./CSingleSelect.vue";
import { defineProps, defineEmits, computed } from "vue";

type Obj = Record<string, any>;

interface ISelectSetting {
  label?: string;
  placeholder?: string;
  valueKey: string;
  descriptionKey: string;
  field: string;
  dependsOn?: string;
  data: Obj[] | Promise<Obj[]> | string;
}

interface IReceiveSelectSetting extends ISelectSetting {
  data: Obj[] | Promise<Obj[]>;
}

interface IReferenceSelectSetting extends ISelectSetting {
  data: string;
  dependsOn: string;
}

const props = defineProps<{
  selects: Array<IReceiveSelectSetting | IReferenceSelectSetting>;
  modelValue: Obj;
}>();

const selectSettings = computed(() =>
  props.selects.map((setting) => new SelectSetting(setting))
);
const selected = computed<Obj>(() => props.modelValue);

defineEmits(["update:modelValue"]);

class SelectSetting {
  label?: string;
  placeholder?: string;
  valueKey: string;
  descriptionKey: string;
  field: string;
  dependsOn?: string;
  data: Obj[] | Promise<Obj[]> | string;
  selectedObject: Record<string, any>;

  constructor(setting: ISelectSetting) {
    this.label = setting.label;
    this.placeholder = setting.placeholder;
    this.valueKey = setting.valueKey;
    this.descriptionKey = setting.descriptionKey;
    this.field = setting.field;
    this.dependsOn = setting.dependsOn;
    this.data = setting.data;
    this.selectedObject = {};
  }

  get modelValue() {
    return selected.value[this.field];
  }

  set modelValue(v: any) {
    selected.value[this.field] = v;
  }

  get dependsOnValue() {
    return this.dependsOn ? selected.value[this.dependsOn] : undefined;
  }
}

async function dataFor(setting: SelectSetting): Promise<Obj[]> {
  if (typeof setting.data !== "string") return setting.data;
  try {
    if (!setting.dependsOn) throw new Error(`don't have dependsOn`);
    const parent = settingFindBy(setting.dependsOn);
    const parentSelected = await selectedObjFor(parent);
    return parentSelected[setting.data];
  } catch (error) {
    console.log(error);
    return [];
  }

  function settingFindBy(field: string): SelectSetting {
    const result = selectSettings.value.find((e) => e.field === field);
    if (!result) throw new Error(`doesn't have SelectSetting for : ${field}`);
    return result;
  }

  async function selectedObjFor(setting: SelectSetting): Promise<Obj> {
    const settingData = await dataFor(setting);
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
