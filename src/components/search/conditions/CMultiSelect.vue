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
      :data="select.dataList"
      @update:selectedObject="(v) => (select.selectedObject = v)"
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
  data: Obj[] | Promise<Obj[]> | string;
}

interface IArrayDataSelectSetting extends ISelectSetting {
  data: Obj[] | Promise<Obj[]>;
}

interface IStringDataSelectSetting extends ISelectSetting {
  data: string;
  dependsOn: string;
}

const props = defineProps<{
  selects: Array<IArrayDataSelectSetting | IStringDataSelectSetting>;
  modelValue: Obj;
}>();

const selected = computed<Obj>(() => props.modelValue);
const selectSettings = computed(() => props.selects.map(createSelectSetting));

function createSelectSetting(setting: ISelectSetting) {
  if (typeof setting.data === "string") {
    return new StringDataSetting(setting as IStringDataSelectSetting);
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

  get dataList() {
    console.log(`실행:${this.field} `);
    if (typeof this.data !== "string") return this.data;
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

class StringDataSetting extends SelectSetting {
  data: string;

  constructor(setting: IStringDataSelectSetting) {
    super(setting);
    this.data = setting.data;
  }
}

class ArrayDataSetting extends SelectSetting {
  data: Obj[] | Promise<Obj[]>;

  constructor(setting: IArrayDataSelectSetting) {
    super(setting);
    this.data = setting.data;
  }
}
</script>
