<template>
  <hr />
  <template v-for="select in selects" :key="select.field">
    <c-single-select
      :label="select.label"
      :placeholder="select.placeholder"
      :valueKey="select.valueKey"
      :descriptionKey="select.descriptionKey"
      :data="dataFor(select)"
      :modelValue="modelValueFor(select)"
      @update:modelValue="(v) => setModelValue(select, v)"
      :dependsOn="dependsOnFor(select)"
    />
  </template>
</template>

<script setup lang="ts">
import CSingleSelect from "./CSingleSelect.vue";
import { defineProps, defineEmits, computed } from "vue";

type Obj = Record<string, any>;
type Data = Obj[] | Promise<Obj[]> | string;

interface ISelectSetting {
  label?: string;
  placeholder?: string;
  valueKey: string;
  descriptionKey: string;
  data: Data;
  field: string;
  dependsOn?: string;
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

defineEmits(["update:modelValue"]);

class SelectSetting {
  label?: string;
  placeholder?: string;
  valueKey: string;
  descriptionKey: string;
  field: string;
  dependsOn?: string;

  constructor(
    aLabel: string | undefined,
    aPlaceholder: string | undefined,
    aValueKey: string,
    aDescriptionKey: string,
    aField: string,
    aDependsOn: string | undefined
  ) {
    this.label = aLabel;
    this.placeholder = aPlaceholder;
    this.valueKey = aValueKey;
    this.descriptionKey = aDescriptionKey;
    this.field = aField;
    this.dependsOn = aDependsOn;
  }
}

class ReceiveSetting extends SelectSetting implements IReceiveSelectSetting {
  innerData: Record<string, any>[] | Promise<Record<string, any>[]>;

  constructor(
    aData: Record<string, any>[] | Promise<Record<string, any>[]>,
    aLabel: string | undefined,
    aPlaceholder: string | undefined,
    aValueKey: string,
    aDescriptionKey: string,
    aField: string,
    aDependsOn: string | undefined
  ) {
    super(aLabel, aPlaceholder, aValueKey, aDescriptionKey, aField, aDependsOn);
    this.innerData = aData;
  }
  get data(): Record<string, any>[] | Promise<Record<string, any>[]> {
    return this.innerData;
  }
}

const selected = computed<Obj>(() => props.modelValue);

async function dataFor(setting: ISelectSetting): Promise<Obj[]> {
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

  function settingFindBy(field: string): ISelectSetting {
    const result = props.selects.find((e) => e.field === field);
    if (!result) throw new Error(`doesn't have ISelectSetting for : ${field}`);
    return result;
  }

  async function selectedObjFor(setting: ISelectSetting): Promise<Obj> {
    const settingData = await dataFor(setting);
    const result = settingData.find(
      (e) => e[setting.valueKey] === selectedFor(setting)
    );
    if (!result)
      throw new Error(`doesn't have selected object for : ${setting.field}`);
    return result;

    function selectedFor(setting: ISelectSetting) {
      const result = selected.value[setting.field];
      if (!result)
        throw new Error(`has not been chosen yet : ${setting.field}`);
      return result;
    }
  }
}

function modelValueFor(setting: ISelectSetting) {
  return selected.value[setting.field];
}

function dependsOnFor(setting: ISelectSetting) {
  return setting.dependsOn ? selected.value[setting.dependsOn] : undefined;
}

function setModelValue(setting: ISelectSetting, v: any) {
  selected.value[setting.field] = v;
}
</script>
