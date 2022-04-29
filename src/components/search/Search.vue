<template>
  <div>
    <input type="text" v-model="parent" />
    <template v-for="condition in searchSetting" :key="condition.field">
      <component
        :is="conditions[condition.kind]"
        v-bind="condition"
        @update:value="(newValue:string) => condition.value = newValue"
        :parent="parent"
      ></component>
    </template>
  </div>
</template>
<script setup lang="ts">
import { defineProps, reactive, ref } from "vue";
import { ICondition } from "./Conditions";
import CCodePopup from "./conditions/CCodePopup.vue";
import CSelect from "./conditions/CSelect.vue";
import CRadio from "./conditions/CRadio.vue";
import CText from "./conditions/CText.vue";
import CDate from "./conditions/CDate.vue";

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

const parent = ref("A");
</script>
