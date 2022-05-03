<template>
  <div>
    <button @click="view = 1">샘플</button>
    <button @click="view = 2">검수입고관리</button>
    <button @click="view = 3">정수물품책정현황</button>
    <div v-show="view === 1">
      <sl :search-setting="searchSetting1" :table-setting="tableSetting" />
    </div>
    <div v-show="view === 2">
      <sl :search-setting="searchSetting2" :table-setting="tableSetting" />
    </div>
    <div v-show="view === 3">
      <sl :search-setting="searchSetting3" :table-setting="tableSetting" />
    </div>
  </div>
</template>

<script setup lang="ts">
import searchSetting1 from "./settings/sampleSearchSettingAll";
import searchSetting2 from "./settings/PM-MB040";
import searchSetting3 from "./settings/PM-MA050020";
import { tableSetting } from "./settings/sampleTableSetting";
import sl from "../layouts/SL.vue";
import { ref } from "vue";

const view = ref(1);
</script>
