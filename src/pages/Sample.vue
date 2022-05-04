<template>
  <div>
    <button @click="view = 'SearchSettingAll'">샘플</button>
    <button @click="view = '검수입고관리'">검수입고관리</button>
    <button @click="view = '정수물품책정현황'">정수물품책정현황</button>
    <div v-show="view === 'SearchSettingAll'">
      <sl :search-setting="SearchSettingAll" :table-setting="tableSetting" />
    </div>
    <div v-show="view === '검수입고관리'">
      <sl :search-setting="검수입고관리" :table-setting="tableSetting" />
    </div>
    <div v-show="view === '정수물품책정현황'">
      <sl :search-setting="정수물품책정현황" :table-setting="tableSetting" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchSettingAll from "./settings/SearchSettingAll";
import 검수입고관리 from "./settings/검수입고관리";
import 정수물품책정현황 from "./settings/정수물품책정현황";
import { tableSetting } from "./settings/sampleTableSetting";
import sl from "../layouts/SL.vue";
import { ref } from "vue";

const view = ref("SearchSettingAll");
</script>
