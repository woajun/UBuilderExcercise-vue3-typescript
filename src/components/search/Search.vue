<template>
  <div>
    {{ searchItem }}
    <template v-for="condition in searchSetting" :key="condition.id">
      <div :class="condition.fullWidth ?? 'col-12'">
        <br />
        <label>{{ condition.label }}</label
        ><span>:</span>
        <template v-if="condition.kind == 'innerSearch'">
          <cInnerSearch
            :arg="(condition as InnerSearch)"
            v-model:value="searchItem[(condition as InnerSearch).field]"
          />
        </template>
        <template v-else-if="condition.kind == 'selects'">
          <cSelects
            :arg="(condition as Selects)"
            @value="(obj) => (searchItem[obj.field] = obj.value)"
          />
        </template>
        <template v-else-if="condition.kind == 'radio'">
          <cRadio
            :arg="(condition as Radio)"
            v-model:value="searchItem[(condition as Radio).field]"
          />
        </template>
        <template v-else-if="condition.kind == 'text'">
          <cText
            :arg="(condition as Text)"
            v-model:value="searchItem[(condition as Text).field]"
          />
        </template>
        <template v-else-if="condition.kind == 'date'">
          <cDate
            :arg="(condition as CDate)"
            v-model:value="searchItem[(condition as CDate).field]"
          />
        </template>
        <template v-else-if="condition.kind == 'period'">
          <cPeriod
            :arg="(condition as Period)"
            @value="(obj) => (searchItem[obj.field] = obj.value)"
          />
        </template>
      </div>
    </template>
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

defineExpose({
  searchItem,
});
</script>
