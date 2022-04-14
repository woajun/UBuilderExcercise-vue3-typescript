<template>
  <div>
    <div v-for="condition in conditions" :key="condition.field">
      <div :class="[condition.size ? condition.size : 'col-12']">
        <cCode v-if="condition.kind == 'code'" :arg="(condition as Code)" />
        <cSelect v-if="condition.kind == 'select'" :arg="(condition as Select)" />
        <cRadio v-if="condition.kind == 'radio'" :arg="(condition as Radio)" />
        <cLabel v-if="condition.kind == 'label'" :arg="(condition as Label)" />
        <cSingleDate v-if="condition.kind == 'singleDate'" :arg="(condition as SingleDate)" />
        <cDuration v-if="condition.kind == 'duration'" :arg="(condition as Duration)" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { ICondition, Code, Select, Radio, Label, SingleDate, Duration } from './Conditions';
import cCode from './conditions/CCode.vue'
import cSelect from './conditions/CSelect.vue'
import cRadio from './conditions/CRadio.vue'
import cLabel from './conditions/CLabel.vue'
import cSingleDate from './conditions/CSingleDate.vue'
import cDuration from './conditions/CDuration.vue'

interface Props {
  conditions: Array<ICondition>
}

const props = defineProps<Props>()


</script>
