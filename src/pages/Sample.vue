<template>
  <sl :search-setting="searchSetting" :list-setting="listSetting" />
</template>

<script setup lang="ts">
import { searchSetting } from './settings/sampleSearchSetting';
import { listSetting } from './settings/sampleListSetting';
import sl from '../layouts/SL.vue';

// searchSetting.getCondition("dept2").setEvent(somethingEvent);

// function somethingEvent() {
//   alert('hi')
// }



</script>