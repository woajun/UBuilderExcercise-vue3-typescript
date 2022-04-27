<template>
  <div>
    <template v-for="condition in searchSetting" :key="condition.id">
      <template v-if="condition.kind == 'codePopup'">
        <CCodePopup
          :arg="(condition as CodePopup)"
          v-model:modelValue="searchItem[(condition as CodePopup).field]"
        />
      </template>
      <template v-else-if="condition.kind == 'select'">
        <CSelect :arg="(condition as Select)" @update:value="addSearchItem" />
      </template>
      <template v-else-if="condition.kind == 'radio'">
        <CRadio
          :arg="(condition as Radio)"
          v-model:modelValue="searchItem[(condition as Radio).field]"
        />
      </template>
      <template v-else-if="condition.kind == 'text'">
        <CText
          :arg="(condition as Text)"
          v-model:modelValue="searchItem[(condition as Text).field]"
        />
      </template>
      <template v-else-if="condition.kind == 'date'">
        <Date
          :arg="(condition as CDate)"
          v-model:modelValue="searchItem[(condition as CDate).field]"
        />
      </template>
    </template>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";
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

interface Props {
  searchSetting: Array<ICondition>;
}

const searchItem = ref<any>({});
defineProps<Props>();
const emit = defineEmits(["update:searchItem"]);

watch(searchItem.value, (newItem) => {
  emit("update:searchItem", newItem);
});

function addSearchItem(value: string, field: string) {
  searchItem.value[field] = value;
}
</script>
