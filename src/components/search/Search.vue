<template>
  <form>
    <template v-for="con in conditions" :key="con.field">
      <div class="condition" :style="{ width: con.width }">
        <component
          :is="conKinds[con.kind]"
          v-bind="con"
          :search-item="searchItem"
          @update:search-item="(f:string,v:any) => emit('update:searchItem',f, v)"
        ></component>
      </div>
    </template>
  </form>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import Condition from "./conditions/Condition";
import CPopup from "./conditions/CPopup.vue";
import CSelect from "./conditions/CSelect.vue";
import CSingleSelect from "./conditions/CSingleSelect.vue";
import CRadio from "./conditions/CRadio.vue";
import CText from "./conditions/CText.vue";
import CDate from "./conditions/CDate.vue";
import CPeriod from "./conditions/CPeriod.vue";

defineProps<{
  conditions: Array<Condition>;
  searchItem: Record<string, any>;
}>();
const emit = defineEmits(["update:searchItem"]);

const conKinds = {
  popup: CPopup,
  select: CSelect,
  radio: CRadio,
  text: CText,
  date: CDate,
  period: CPeriod,
  singleSelect: CSingleSelect,
};
</script>
<style>
.condition {
  display: inline-flex;
}
</style>
