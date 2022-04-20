<template>
  <div>
    <div v-for="condition in searchSetting" :key="condition.id">
      <div :class="condition.fullWidth ?? 'col-12'">
        <br />
        <label>{{ condition.label }}</label
        ><span>:</span>
        <div></div>
        <cInnerSearch
          v-if="condition.kind == 'innerSearch'"
          :arg="(condition as InnerSearch)"
          v-model:value="searchItem[(condition as InnerSearch).field]"
        />
        <cSelects
          v-if="condition.kind == 'selects'"
          :arg="(condition as Selects)"
          @value="(obj) => (searchItem[obj.field] = obj.value)"
        />
        <cRadio
          v-if="condition.kind == 'radio'"
          :arg="(condition as Radio)"
          v-model:value="searchItem[(condition as Radio).field]"
        />
        <cText
          v-if="condition.kind == 'text'"
          :arg="(condition as Text)"
          v-model:value="searchItem[(condition as Text).field]"
        />
        <cDate
          v-if="condition.kind == 'date'"
          :arg="(condition as CDate)"
          v-model:value="searchItem[(condition as CDate).field]"
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
  Selects,
  Radio,
  Text,
  CDate,
  Period,
} from "./Conditions";
import cInnerSearch from "./conditions/CInnerSearch.vue";
import cSelects from "./conditions/CSelects.vue";
import cRadio from "./conditions/CRadio.vue";
import cText from "./conditions/CText.vue";
import cDate from "./conditions/CDate.vue";
import cPeriod from "./conditions/CPeriod.vue";

interface Props {
  searchSetting: Array<ICondition>;
}

defineProps<Props>();

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
