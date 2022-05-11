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
import SearchSettingAll from "./settings/SearchSettingAll";
import 검수입고관리 from "./settings/검수입고관리";
import 정수물품책정현황 from "./settings/정수물품책정현황";
import 코드 from "./settings/Code";
import 셀렉트 from "./settings/Select";
import 라디오 from "./settings/Radio";
import 팝업 from "./settings/Popup";
import { tableSetting } from "./settings/sampleTableSetting";
import sl from "../layouts/SL.vue";
import { ref } from "vue";

const currentView = ref("SearchSettingAll");

const views = {
  // SearchSettingAll: SearchSettingAll,
  // 검수입고관리: 검수입고관리,
  // 정수물품책정현황: 정수물품책정현황,
  // 코드: 코드,
  // 셀렉트: 셀렉트,
  // 라디오: 라디오,
  팝업: 팝업,
};
</script>
