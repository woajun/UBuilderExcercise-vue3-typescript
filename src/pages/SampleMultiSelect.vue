<template>
  <div>
    <c-multi-select :selects="selects" />
  </div>
</template>
<script setup lang="ts">
import CMultiSelect from "@/components/search/conditions/CMultiSelect.vue";
import { selects } from "./SampleMultiSelectSetting";
</script>
