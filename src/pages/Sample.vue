<template>
  <sl
    search-url="api/sample/search"
    :search-setting="searchSetting"
    :table-setting="tableSetting"
  />
</template>

<script setup lang="ts">
import { searchSetting } from "./settings/sample3";
// import { searchSetting } from "./settings/sampleSearchSettingAll";
import { tableSetting } from "./settings/sampleTableSetting";
import sl from "../layouts/SL.vue";
</script>
