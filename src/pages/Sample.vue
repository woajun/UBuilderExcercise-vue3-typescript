<template>
  <search :conditions="conditions"></search>
</template>

<script setup lang="ts">
import search from '@/components/search/Search.vue'
import { conditions } from './settings/sampleSearchSetting';

</script>