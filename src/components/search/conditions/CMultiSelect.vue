<template>
  <hr />
  <template v-for="select in selectSettings" :key="select.field">
    <c-single-select
      :label="select.label"
      :placeholder="select.placeholder"
      :valueKey="select.valueKey"
      :descriptionKey="select.descriptionKey"
      :data="dataFor(select)"
      v-model="select.modelValue"
      :dependsOn="select.dependsOn"
    />
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
}

interface IReceiveSelectSetting extends ISelectSetting {
  data: Obj[] | Promise<Obj[]>;
}

interface IReferenceSelectSetting extends ISelectSetting {
  dataKey: string;
  dependsOn: string;
}

const props = defineProps<{
  selects: Array<IReceiveSelectSetting | IReferenceSelectSetting>;
  modelValue: Obj;
}>();

const selectSettings = computed(() => createSelectSetting(props.selects));

function createSelectSetting(
  selects: Array<ISelectSetting>
): Array<ReceiveSetting | ReferenceSetting> {
  return selects.map(whichSetting);

  function whichSetting(
    select: ISelectSetting
  ): ReceiveSetting | ReferenceSetting {
    if (isReceiveSetting(select as IReceiveSelectSetting)) {
      return new ReceiveSetting(select as IReceiveSelectSetting);
    } else if (isReferenceSetting(select as IReferenceSelectSetting)) {
      return new ReferenceSetting(select as IReferenceSelectSetting);
    }
    throw new Error("일치하는게 없어");

    function isReceiveSetting(select: IReceiveSelectSetting) {
      if (select.data !== undefined) {
        return true;
      }
      return false;
    }
    function isReferenceSetting(select: IReferenceSelectSetting) {
      if (select.dataKey !== undefined && select.dependsOn !== undefined) {
        return true;
      }
      return false;
    }
  }
}

defineEmits(["update:modelValue"]);

class SelectSetting {
  label?: string;
  placeholder?: string;
  valueKey: string;
  descriptionKey: string;
  field: string;
  innerDependsOn?: string;

  constructor(setting: ISelectSetting) {
    this.label = setting.label;
    this.placeholder = setting.placeholder;
    this.valueKey = setting.valueKey;
    this.descriptionKey = setting.descriptionKey;
    this.field = setting.field;
    this.innerDependsOn = setting.dependsOn;
  }

  get modelValue() {
    return selected.value[this.field];
  }

  set modelValue(v: any) {
    selected.value[this.field] = v;
  }

  get dependsOn() {
    return this.innerDependsOn
      ? selected.value[this.innerDependsOn]
      : undefined;
  }
}

class ReceiveSetting extends SelectSetting implements IReceiveSelectSetting {
  innerData: Record<string, any>[] | Promise<Record<string, any>[]>;

  constructor(setting: IReceiveSelectSetting) {
    super(setting);
    this.innerData = setting.data;
  }
  get data(): Record<string, any>[] | Promise<Record<string, any>[]> {
    return this.innerData;
  }
}

class ReferenceSetting
  extends SelectSetting
  implements IReferenceSelectSetting
{
  dataKey: string;

  constructor(setting: IReferenceSelectSetting) {
    super(setting);
    this.dataKey = setting.dataKey;
  }

  get data(): Record<string, any>[] | Promise<Record<string, any>[]> {
    return [];
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
</script>
