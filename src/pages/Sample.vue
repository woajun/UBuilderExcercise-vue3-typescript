<template>
  <sl>
    <search :conditions="conditions" />
    <list :list-setting="listSetting" />
  </sl>
</template>

<script setup lang="ts">
import search from '@/components/search/Search.vue'
import { conditions } from './settings/sampleSearchSetting';
import { listSetting } from './settings/sampleListSetting';
import sl from '../layouts/SL.vue';
import list from '@/components/list/List.vue';

</script>