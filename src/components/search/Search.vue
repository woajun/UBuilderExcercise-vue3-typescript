<template>
  <div>
    <template v-for="condition in searchSetting" :key="condition.id">
      <template v-if="condition.kind == 'codePopup'">
        <CCodePopup
          :arg="(condition as CodePopup)"
          v-model="searchItem[(condition as CodePopup).field]"
        />
      </template>
      <template v-else-if="condition.kind == 'select'">
        <CSelect
          :arg="(condition as Select)"
          v-model="searchItem[(condition as Select).field]"
          :parentValue="(searchItem[(condition as Select).dependField as string])"
        />
      </template>
      <template v-else-if="condition.kind == 'radio'">
        <CRadio
          :arg="(condition as Radio)"
          v-model="searchItem[(condition as Radio).field]"
        />
      </template>
      <template v-else-if="condition.kind == 'text'">
        <CText
          :arg="(condition as Text)"
          v-model="searchItem[(condition as Text).field]"
        />
      </template>
      <template v-else-if="condition.kind == 'date'">
        <Date
          :arg="(condition as CDate)"
          v-model="searchItem[(condition as CDate).field]"
        />
      </template>
    </template>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, computed, WritableComputedRef } from "vue";
import {
  ICondition,
  CodePopup,
  Select,
  Radio,
  Text,
  CDate,
} from "./Conditions";
import CCodePopup from "./conditions/CCodePopup.vue";
import CSelect from "./conditions/CSelect.vue";
import CRadio from "./conditions/CRadio.vue";
import CText from "./conditions/CText.vue";
import Date from "./conditions/CDate.vue";

const props = defineProps<{
  searchSetting: Array<ICondition>;
  modelValue: Record<string, unknown>;
}>();
const emit = defineEmits(["update:modelValue"]);
const searchItem: WritableComputedRef<Record<string, unknown>> = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
