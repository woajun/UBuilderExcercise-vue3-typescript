<template>
  <div>
    <template v-for="condition in searchSetting" :key="condition.id">
      <component
        :is="conditions[condition.kind]"
        :arg="condition"
        v-model="searchItem[condition.field]"
        :parentValue="(searchItem[(condition as Select).dependField as string])"
      ></component>
    </template>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, computed, WritableComputedRef } from "vue";
import { ICondition, Select } from "./Conditions";
import CCodePopup from "./conditions/CCodePopup.vue";
import CSelect from "./conditions/CSelect.vue";
import CRadio from "./conditions/CRadio.vue";
import CText from "./conditions/CText.vue";
import CDate from "./conditions/CDate.vue";

const conditions = {
  codePopup: CCodePopup,
  select: CSelect,
  radio: CRadio,
  text: CText,
  date: CDate,
};

const props = defineProps<{
  searchSetting: Array<ICondition>;
  modelValue: Record<string, string>;
}>();
const emit = defineEmits(["update:modelValue"]);
const searchItem: WritableComputedRef<Record<string, string>> = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
