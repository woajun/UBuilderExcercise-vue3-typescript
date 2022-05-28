<template>
  <hr />
  <template v-for="select in selectSettings" :key="select.field">
    <c-single-select
      :label="select.label"
      :placeholder="select.placeholder"
      :valueKey="select.valueKey"
      :descriptionKey="select.descriptionKey"
      :dependsOn="select.dependsOnValue"
      :data="select.dataList"
      v-model="select.modelValue"
      v-model:selectedObject="select.selectedObject"
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
  data:
    | Obj[]
    | Promise<Obj[]>
    | string
    | ((searchItem: Obj) => Obj[] | Promise<Obj[]>);
}

interface IArrayDataSelectSetting extends ISelectSetting {
  data: Obj[] | Promise<Obj[]>;
}

interface IStringDataSelectSetting extends ISelectSetting {
  data: string;
  dependsOn: string;
}

interface IFunctionDataSelectSetting extends ISelectSetting {
  data: (searchItem: Obj) => Obj[] | Promise<Obj[]>;
}

const props = defineProps<{
  selects: Array<ISelectSetting>;
  modelValue: Obj;
}>();

const selected = computed<Obj>(() => props.modelValue);
const selectSettings = computed(() => props.selects.map(createSelectSetting));

function createSelectSetting(setting: ISelectSetting) {
  if (typeof setting.data === "string") {
    return new StringDataSetting(setting as IStringDataSelectSetting);
  } else if (typeof setting.data === "function") {
    return new FunctionDataSetting(setting as IFunctionDataSelectSetting);
  } else {
    return new ArrayDataSetting(setting as IArrayDataSelectSetting);
  }
}

defineEmits(["update:modelValue"]);

class SelectSetting {
  label?: string;
  placeholder?: string;
  valueKey: string;
  descriptionKey: string;
  field: string;
  dependsOn?: string;
  selectedObject: Obj;

  constructor(setting: ISelectSetting) {
    this.label = setting.label;
    this.placeholder = setting.placeholder;
    this.valueKey = setting.valueKey;
    this.descriptionKey = setting.descriptionKey;
    this.field = setting.field;
    this.dependsOn = setting.dependsOn;
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

class StringDataSetting extends SelectSetting {
  data: string;

  constructor(setting: IStringDataSelectSetting) {
    super(setting);
    this.data = setting.data;
  }

  get dataList() {
    try {
      if (!this.dependsOn) throw new Error(`don't have dependsOn`);
      const parent = settingFindBy(this.dependsOn);
      return parent.selectedObject[this.data] ?? [];
    } catch (error) {
      console.log(error);
      return [];
    }

    function settingFindBy(field: string): SelectSetting {
      const result = selectSettings.value.find((e) => e.field === field);
      if (!result) throw new Error(`doens't have SelectSetting for : ${field}`);
      return result;
    }
  }
}

class ArrayDataSetting extends SelectSetting {
  data: Obj[] | Promise<Obj[]>;

  constructor(setting: IArrayDataSelectSetting) {
    super(setting);
    this.data = setting.data;
  }

  get dataList() {
    return this.data;
  }
}

class FunctionDataSetting extends SelectSetting {
  data: (searchItem: Obj) => Obj[] | Promise<Obj[]>;

  constructor(setting: IFunctionDataSelectSetting) {
    super(setting);
    this.data = setting.data;
  }

  get dataList() {
    return this.data(selected.value);
  }
}
</script>
