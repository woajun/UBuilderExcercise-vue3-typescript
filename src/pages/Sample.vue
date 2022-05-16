<template>
  <div>
    <template v-for="(view, key) of views" :key="key">
      <button @click="currentView = key">{{ key }}</button>
    </template>
    <template v-for="(view, key) of views" :key="key">
      <div v-show="currentView === key">
        <sl :search-setting="view" :table-setting="tableSetting" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import All from "./settings/All";
import 검수입고관리 from "./settings/검수입고관리";
import 정수물품책정현황 from "./settings/정수물품책정현황";
import 셀렉트 from "./settings/Select";
import 라디오 from "./settings/Radio";
import 팝업 from "./settings/Popup";
import 날짜 from "./settings/Date";
import { tableSetting } from "./settings/sampleTableSetting";
import sl from "../layouts/SL.vue";
import { ref } from "vue";

const currentView = ref("All");

const views = {
  // All: All,
  // 검수입고관리: 검수입고관리,
  // 정수물품책정현황: 정수물품책정현황,
  // 날짜: 날짜,
  라디오: 라디오,
  셀렉트: 셀렉트,
  // 팝업: 팝업,
};
</script>
