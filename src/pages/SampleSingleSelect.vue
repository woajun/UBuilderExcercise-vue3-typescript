<template>
  <div>
    {{ selectValue }}
    <c-single-select v-model="selectValue" v-bind="singleSelectSetting" />
  </div>
</template>

<script setup lang="ts">
import CSingleSelect from "@/components/search/conditions/CSingleSelect.vue";
import Condition from "@/components/search/conditions/Condition";
import { ref } from "vue";

const selectValue = ref(1);

const singleSelectSetting: Condition = {
  kind: "singleSelect",
  descriptionKey: "name",
  field: "slt",
  valueKey: "grade",
  data: [
    {
      name: "1학년",
      grade: 1,
    },
    {
      name: "2학년",
      grade: 2,
    },
    {
      name: "3학년",
      grade: 3,
    },
  ],
};
</script>
