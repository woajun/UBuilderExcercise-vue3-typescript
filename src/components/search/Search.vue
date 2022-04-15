<template>
  <div>
    <div v-for="condition in searchSetting" :key="condition.field">
      <div :class="[condition.fullWidth ? condition.fullWidth : 'col-12']">
        <br />
        <label for="">{{ condition.label }}</label><span>:</span>
        <cInnerSearch v-if="condition.kind == 'innerSearch'" :arg="(condition as InnerSearch)" />
        <cSelect v-if="condition.kind == 'select'" :arg="(condition as Select)" />
        <cRadio v-if="condition.kind == 'radio'" :arg="(condition as Radio)" />
        <cText v-if="condition.kind == 'text'" :arg="(condition as Text)" />
        <cDate v-if="condition.kind == 'date'" :arg="(condition as CDate)" />
        <cPeriod v-if="condition.kind == 'period'" :arg="(condition as Period)" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, reactive } from 'vue';
import { ICondition, InnerSearch, Select, Radio, Text, CDate, Period } from './Conditions';
import cInnerSearch from './conditions/CInnerSearch.vue'
import cSelect from './conditions/CSelect.vue'
import cRadio from './conditions/CRadio.vue'
import cText from './conditions/CText.vue'
import cDate from './conditions/CDate.vue'
import cPeriod from './conditions/CPeriod.vue'

interface Props {
  searchSetting: Array<ICondition>
}

const props = defineProps<Props>()


interface Param {
  key: string,
  value: string,
}

interface Params {
  params: Array<Param>
}

interface MasterParams {
  masterParams: Array<Param>
}

// const searchResultMap: SearchResultMap = reactive({results: new Map<string,string>()})
const masterParams: MasterParams = reactive({ masterParams: [] })

function addParam(param: Param) {
  masterParams.masterParams.push(param)
}

function addParams(params: Params) {
  masterParams.masterParams = [...masterParams.masterParams, ...params.params]
}

</script>
