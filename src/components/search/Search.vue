<template>
  <form>
    <template v-for="con in conditions" :key="con.field">
      <component
        class="condition"
        :style="{ width: con.width }"
        :is="conKinds[con.kind]"
        v-bind="con"
        :search-item="searchItem[con.field]"
        @update:search-item="(val:string|string[]) => emit('update:searchItem',con.field, val)"
      ></component>
    </template>
  </form>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import Condition from "./conditions/Condition";
import CPopup from "./conditions/CPopup.vue";
import CSelect from "./conditions/CSelect.vue";
import CRadio from "./conditions/CRadio.vue";
import CText from "./conditions/CText.vue";
import CDate from "./conditions/CDate.vue";
import CPeriod from "./conditions/CPeriod.vue";

defineProps<{
  conditions: Array<Condition>;
  searchItem: Record<string, string | string[]>;
}>();
const emit = defineEmits(["update:searchItem"]);

const conKinds = {
  popup: CPopup,
  select: CSelect,
  radio: CRadio,
  text: CText,
  date: CDate,
  period: CPeriod,
};
</script>
<style>
.condition {
  display: inline-flex;
}
</style>
