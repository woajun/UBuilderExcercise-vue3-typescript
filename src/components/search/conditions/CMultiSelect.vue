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
const selectSettings = computed(() =>
  props.selects.map((e) => new SelectSetting(e))
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
  dataCalculator: DataCalculator;

  constructor(setting: ISelectSetting) {
    this.label = setting.label;
    this.placeholder = setting.placeholder;
    this.valueKey = setting.valueKey ?? "value";
    this.descriptionKey = setting.descriptionKey ?? "description";
    this.field = setting.field;
    this.dependsOnField = setting.dependsOnField;
    this.dataCalculator = createDataCalculator(setting);

    function createDataCalculator(setting: ISelectSetting) {
      if (typeof setting.data === "string") {
        return new StringCalculator(setting as IStringDataSetting);
      } else if (typeof setting.data === "function") {
        return new FunctionCalculator(setting as IFunctionDataSetting);
      } else {
        return new arrayCalculator(setting as IArrayDataSetting);
      }
    }
  }

  get data() {
    return this.dataCalculator.dataList;
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
  dataList: Obj[] | Promise<Obj[]>;
}

class arrayCalculator implements DataCalculator {
  data: Obj[] | Promise<Obj[]>;

  constructor(setting: IArrayDataSetting) {
    this.data = setting.data;
  }

  get dataList() {
    return this.data;
  }
}

class StringCalculator implements DataCalculator {
  data: string;
  dependsOnField?: string;

  constructor(setting: IStringDataSetting) {
    this.data = setting.data;
    this.dependsOnField = setting.dependsOnField;
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
      if (!result) throw new Error(`doesn't have SelectSetting for : ${field}`);
      return result;
    }
  }
}

class FunctionCalculator implements DataCalculator {
  data: (searchItem: Obj) => Obj[] | Promise<Obj[]>;

  constructor(setting: IFunctionDataSetting) {
    this.data = setting.data;
  }

  get dataList() {
    return this.data(selected.value);
  }
}
</script>
