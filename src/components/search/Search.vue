<template>
  <form>
    <template v-for="con in conditions" :key="con.field">
      <component
        :is="conKinds[con.kind]"
        v-bind="con"
        :search-item="searchItem[con.field]"
        @update:search-item="(val:string) => emit('update:searchItem',con.field, val)"
        :parent-val="searchItem[con.parentField as string]"
      ></component>
    </template>
  </form>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import Condition from "./conditions/Condition";
import CMagnifier from "./conditions/CMagnifier.vue";
import CSelect from "./conditions/CSelect.vue";
import CRadio from "./conditions/CRadio.vue";
import CText from "./conditions/CText.vue";
import CDate from "./conditions/CDate.vue";

defineProps<{
  conditions: Array<Condition>;
  searchItem: Record<string, string>;
}>();
const emit = defineEmits(["update:searchItem"]);

const conKinds = {
  magnifier: CMagnifier,
  select: CSelect,
  radio: CRadio,
  text: CText,
  date: CDate,
};
</script>
