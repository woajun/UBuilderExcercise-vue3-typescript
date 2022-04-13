<template>
  <div>
    <div v-for="condition in conditions" :key="condition.field">
      <div :class="[condition.size ? condition.size : 'col-12']">
        <cCode v-if="condition.kind == 'code'" :code="(condition as Code)" />
        <cSelect v-if="condition.kind == 'select'" :select="(condition as Select)" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { ICondition, Code, Select } from './Conditions';
import cCode from './conditions/CCode.vue'
import cSelect from './conditions/CSelect.vue'

interface Props {
  conditions: Array<ICondition>
}

const props = defineProps<Props>()


</script>
