<template>
  <div>
    <div v-for="condition in conditions" :key="condition.field">
      <div :class="[condition.size ? condition.size : 'col-12']">
        <cCode v-if="condition.kind = 'code'" :Code="(condition as Code)" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { ICondition, Code } from './Conditions';
import cCode from './conditions/CCode.vue'

interface Props {
  conditions: Array<ICondition>
}

const props = defineProps<Props>()


</script>
