<template>
  <div>
    <button @click.prevent="logSrch">검색</button>
    <template v-for="con in conditions" :key="con.field">
      <component
        :is="conKinds[con.kind]"
        v-bind="con"
        :search-item="searchItem[con.field]"
        @update:search-item="(val:string) => emit('update:searchItem',con.field, val)"
        :parent-val="searchItem[con.parentField as string]"
      ></component>
    </template>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { ICondition } from "./Conditions";
import CCodePopup from "./conditions/CCodePopup.vue";
import CSelect from "./conditions/CSelect.vue";
import CRadio from "./conditions/CRadio.vue";
import CText from "./conditions/CText.vue";
import CDate from "./conditions/CDate.vue";

const props = defineProps<{
  conditions: Array<ICondition>;
  searchItem: Record<string, string>;
}>();
const emit = defineEmits(["update:searchItem"]);

const conKinds = {
  codePopup: CCodePopup,
  select: CSelect,
  radio: CRadio,
  text: CText,
  date: CDate,
};

const logSrch = () => {
  console.log(props.searchItem);
};
</script>
