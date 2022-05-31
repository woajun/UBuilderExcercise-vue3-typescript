<template>
  <template v-for="select in selectSettings" :key="select.field">
    <c-single-select
      :label="select.label"
      :placeholder="select.placeholder"
      :valueKey="select.valueKey"
      :descriptionKey="select.descriptionKey"
      :dependsOnValue="select.dependsOnValue"
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
  valueKey?: string;
  descriptionKey?: string;
  field: string;
  dependsOnField?: string;
  data:
    | Obj[]
    | Promise<Obj[]>
    | string
    | ((searchItem: Obj) => Obj[] | Promise<Obj[]>);
}

interface IArrayDataSetting extends ISelectSetting {
  data: Obj[] | Promise<Obj[]>;
}

interface IStringDataSetting extends ISelectSetting {
  data: string;
  dependsOnField: string;
}

interface IFunctionDataSetting extends ISelectSetting {
  data: (searchItem: Obj) => Obj[] | Promise<Obj[]>;
}

const props = defineProps<{
  selects: Array<IArrayDataSetting | IStringDataSetting | IFunctionDataSetting>;
  modelValue: Obj;
}>();

const selected = computed(() => props.modelValue);
const selectSettings = computed(() => props.selects.map(createSelectSetting));

function createSelectSetting(setting: ISelectSetting) {
  if (typeof setting.data === "string") {
    return new StringDataSetting(setting as IStringDataSetting);
  } else if (typeof setting.data === "function") {
    return new FunctionDataSetting(setting as IFunctionDataSetting);
  } else {
    return new ArrayDataSetting(setting as IArrayDataSetting);
  }
}

defineEmits(["update:modelValue"]);

class SelectSetting {
  label?: string;
  placeholder?: string;
  valueKey: string;
  descriptionKey: string;
  field: string;
  dependsOnField?: string;
  selectedObject: Obj = {};

  constructor(setting: ISelectSetting) {
    this.label = setting.label;
    this.placeholder = setting.placeholder;
    this.valueKey = setting.valueKey??"value";
    this.descriptionKey = setting.descriptionKey??"description";
    this.field = setting.field;
    this.dependsOnField = setting.dependsOnField;
  }

  get modelValue() {
    return selected.value[this.field];
  }

  set modelValue(v: any) {
    selected.value[this.field] = v;
  }

  get dependsOnValue() {
    return this.dependsOnField
      ? selected.value[this.dependsOnField]
      : undefined;
  }
}

class StringDataSetting extends SelectSetting {
  data: string;

  constructor(setting: IStringDataSetting) {
    super(setting);
    this.data = setting.data;
  }

  get dataList() {
    try {
      if (!this.dependsOnField) throw new Error(`don't have dependsOnField`);
      const parent = settingFindBy(this.dependsOnField);
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

  constructor(setting: IArrayDataSetting) {
    super(setting);
    this.data = setting.data;
  }

  get dataList() {
    return this.data;
  }
}

class FunctionDataSetting extends SelectSetting {
  data: (searchItem: Obj) => Obj[] | Promise<Obj[]>;

  constructor(setting: IFunctionDataSetting) {
    super(setting);
    this.data = setting.data;
  }

  get dataList() {
    return this.data(selected.value);
  }
}
</script>
