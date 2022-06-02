<template>
  <template v-for="select in selectSettings" :key="select.field">
    <c-single-select
      :label="select.label"
      :placeholder="select.placeholder"
      :valueKey="select.valueKey"
      :descriptionKey="select.descriptionKey"
      :dependsOnValue="select.dependsOnValue"
      :data="select.data"
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
  field: string;
  label?: string;
  placeholder?: string;
  valueKey?: string;
  descriptionKey?: string;
  dependsOnField?: string;
}

interface IArrayDataSetting extends ISelectSetting {
  data: Obj[] | Promise<Obj[]>;
}

interface IStringDataSetting extends ISelectSetting {
  dataKey: string;
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
const selectSettings = computed(() =>
  props.selects.map((s) => new SelectSetting(s))
);

defineEmits(["update:modelValue"]);

class SelectSetting {
  label?: string;
  placeholder?: string;
  valueKey: string;
  descriptionKey: string;
  field: string;
  dependsOnField?: string;
  selectedObject: Obj = {};
  dataCalculator?: DataCalculator;

  constructor(setting: ISelectSetting) {
    this.label = setting.label;
    this.placeholder = setting.placeholder;
    this.valueKey = setting.valueKey ?? "value";
    this.descriptionKey = setting.descriptionKey ?? "description";
    this.field = setting.field;
    this.dependsOnField = setting.dependsOnField;
    this.dataCalculator = createDataCalculator(setting);

    function createDataCalculator(
      setting:
        | ISelectSetting
        | IArrayDataSetting
        | IStringDataSetting
        | IFunctionDataSetting
    ) {
      if ("dataKey" in setting)
        return new StringCalculator(setting.dataKey, setting.dependsOnField);
      if (!("data" in setting)) return undefined;
      if (typeof setting.data === "function")
        return new FunctionCalculator(setting.data);
      if (typeof setting.data === "object")
        return new ArrayCalculator(setting.data);
    }
  }

  get data() {
    if (!this.dataCalculator) return [];
    return this.dataCalculator.calculateData;
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

interface DataCalculator {
  calculateData: Obj[] | Promise<Obj[]>;
}

class ArrayCalculator implements DataCalculator {
  data: Obj[] | Promise<Obj[]>;

  constructor(aData: Obj[] | Promise<Obj[]>) {
    this.data = aData;
  }

  get calculateData() {
    return this.data;
  }
}

class StringCalculator implements DataCalculator {
  dataKey: string;
  dependsOnField?: string;

  constructor(aDataKey: string, aDependsOnField?: string) {
    this.dataKey = aDataKey;
    this.dependsOnField = aDependsOnField;
  }

  get calculateData() {
    try {
      if (!this.dependsOnField) throw new Error(`don't have dependsOnField`);
      const parent = settingFindBy(this.dependsOnField);
      return parent.selectedObject[this.dataKey] ?? [];
    } catch (error) {
      console.log(error);
      return [];
    }

    function settingFindBy(field: string): SelectSetting {
      const result = selectSettings.value.find((e) => e.field === field);
      if (!result) throw new Error(`doesn't have SelectSetting for : ${field}`);
      return result;
    }
  }
}

class FunctionCalculator implements DataCalculator {
  data: (searchItem: Obj) => Obj[] | Promise<Obj[]>;

  constructor(aData: (searchItem: Obj) => Obj[] | Promise<Obj[]>) {
    this.data = aData;
  }

  get calculateData() {
    return this.data(selected.value);
  }
}
</script>
