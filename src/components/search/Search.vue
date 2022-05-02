<template>
  <div>
    <template v-for="condition in searchSetting" :key="condition.field">
      <component
        :is="conditions[condition.kind]"
        v-bind="condition"
        @update:value="(newValue:string) => (condition.value as Ref<string|undefined>).value = newValue"
        :parent="getParentValue(condition.parentField)"
      ></component>
    </template>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref, Ref } from "vue";
import { ICondition } from "./Conditions";
import CCodePopup from "./conditions/CCodePopup.vue";
import CSelect from "./conditions/CSelect.vue";
import CRadio from "./conditions/CRadio.vue";
import CText from "./conditions/CText.vue";
import CDate from "./conditions/CDate.vue";
import { registerRuntimeHelpers } from "@vue/compiler-core";

const props = defineProps<{
  searchSetting: Array<ICondition>;
}>();

const conditions = {
  codePopup: CCodePopup,
  select: CSelect,
  radio: CRadio,
  text: CText,
  date: CDate,
};

function getParentValue(field: string | undefined) {
  if (typeof field == "undefined") return undefined;
  const found = props.searchSetting.find((c) => c.field == field);
  return found?.value;
}

function valueToRef() {
  props.searchSetting.forEach((c) => {
    c.value = ref(c.value);
  });
}
valueToRef();
</script>
