<template>
  <div>
    {{ search }}
    <div v-for="condition in searchSetting" :key="condition.field">
      <div :class="[condition.fullWidth ? condition.fullWidth : 'col-12']">
        <br />
        <label for="">{{ condition.label }}</label
        ><span>:</span>
        <cInnerSearch
          v-if="condition.kind == 'innerSearch'"
          :arg="(condition as InnerSearch)"
          v-model:value="search[condition.field]"
        />
        <cSelect
          v-if="condition.kind == 'select'"
          :arg="(condition as Select)"
          @value="(obj) => (search[obj.field] = obj.value)"
        />
        <cRadio
          v-if="condition.kind == 'radio'"
          :arg="(condition as Radio)"
          v-model:value="search[condition.field]"
        />
        <cText
          v-if="condition.kind == 'text'"
          :arg="(condition as Text)"
          v-model:value="search[condition.field]"
        />
        <cDate
          v-if="condition.kind == 'date'"
          :arg="(condition as CDate)"
          v-model:value="search[condition.field]"
        />
        <cPeriod
          v-if="condition.kind == 'period'"
          :arg="(condition as Period)"
          @value="(obj) => (search[obj.field] = obj.value)"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, reactive } from "vue";
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

type Search = {
  [key: string]: string;
};
const search: Search = reactive({});
</script>
