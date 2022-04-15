<template>
  <div class="sl">
    <search :search-setting="searchSetting" />
    <list :list-setting="listSetting" />
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import search from '@/components/search/Search.vue'
import list from '@/components/list/List.vue';
import { ICondition } from '@/components/search/Conditions'
import { ListSetting } from '@/components/list/listSettings'

const props = defineProps<{
  searchSetting: Array<ICondition>,
  listSetting: ListSetting,
}>()

</script>
<style scoped>
</style>