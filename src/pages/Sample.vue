<template>
  <sl
    search-url="api/sample/search"
    :search-setting="searchSetting"
    :table-setting="tableSetting"
  />
</template>

<script setup lang="ts">
import { searchSetting } from "./settings/sampleSearchSettingDate";
import { tableSetting } from "./settings/sampleListSetting";
import sl from "../layouts/SL.vue";
</script>
