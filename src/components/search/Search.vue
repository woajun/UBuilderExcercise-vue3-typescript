<template>
  <div>
    <div v-for="condition in searchSetting" :key="condition.field">
      <div :class="condition.fullWidth ?? 'col-12'">
        <br />
        <label>{{ condition.label }}</label
        ><span>:</span>
        <cInnerSearch
          v-if="condition.kind == 'innerSearch'"
          :arg="(condition as InnerSearch)"
          v-model:value="searchItem[condition.field]"
        />
        <cSelect
          v-if="condition.kind == 'select'"
          :arg="(condition as Select)"
          @value="(obj) => (searchItem[obj.field] = obj.value)"
        />
        <cRadio
          v-if="condition.kind == 'radio'"
          :arg="(condition as Radio)"
          v-model:value="searchItem[condition.field]"
        />
        <cText
          v-if="condition.kind == 'text'"
          :arg="(condition as Text)"
          v-model:value="searchItem[condition.field]"
        />
        <cDate
          v-if="condition.kind == 'date'"
          :arg="(condition as CDate)"
          v-model:value="searchItem[condition.field]"
        />
        <cPeriod
          v-if="condition.kind == 'period'"
          :arg="(condition as Period)"
          @value="(obj) => (searchItem[obj.field] = obj.value)"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineExpose, ref, Ref } from "vue";
import {
  ICondition,
  InnerSearch,
  Select,
  Radio,
  Text,
  CDate,
  Period,
} from "./Conditions";
import cInnerSearch from "./conditions/CInnerSearch.vue";
import cSelect from "./conditions/CSelect.vue";
import cRadio from "./conditions/CRadio.vue";
import cText from "./conditions/CText.vue";
import cDate from "./conditions/CDate.vue";
import cPeriod from "./conditions/CPeriod.vue";

interface Props {
  searchSetting: Array<ICondition>;
}

const props = defineProps<Props>();

type SearchItem = {
  [key: string]: string;
};
const searchItem: Ref<SearchItem> = ref({});

const getSearchItem = () => {
  return searchItem;
};

defineExpose({
  getSearchItem,
});
</script>
