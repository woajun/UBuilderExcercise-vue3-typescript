<template>
  <div>
    <div v-for="condition in conditions" :key="condition.field">
      <div :class="[condition.fullWidth ? condition.fullWidth : 'col-12']">
        <br />
        <label for="">{{ condition.label }}</label><span>:</span>
        <cCode v-if="condition.kind == 'code'" :arg="(condition as Code)" />
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
import { defineProps } from 'vue';
import { ICondition, Code, Select, Radio, Text, CDate, Period } from './Conditions';
import cCode from './conditions/CCode.vue'
import cSelect from './conditions/CSelect.vue'
import cRadio from './conditions/CRadio.vue'
import cText from './conditions/CText.vue'
import cDate from './conditions/CDate.vue'
import cPeriod from './conditions/CPeriod.vue'

interface Props {
  conditions: Array<ICondition>
}

const props = defineProps<Props>()


</script>
