<template>
  <sl
    search-url="api/sample/search"
    :search-setting="searchSetting"
    :list-setting="listSetting"
  />
</template>

<script setup lang="ts">
import { searchSetting } from "./settings/sampleSearchSettingDate";
import { listSetting } from "./settings/sampleListSetting";
import sl from "../layouts/SL.vue";
</script>
