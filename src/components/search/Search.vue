<template>
  <div>
    {{ searchItem }}<br />
    <template v-for="condition in searchSetting" :key="condition.id">
      <template v-if="condition.kind == 'codePopup'">
        <cCodePopup
          :arg="(condition as CodePopup)"
          v-model:value="searchItem[(condition as CodePopup).field]"
        />
      </template>
      <template v-else-if="condition.kind == 'select'">
        <cSelect
          :arg="(condition as Select)"
          v-model:value="searchItem[(condition as Select).field]"
        />
      </template>
      <template v-else-if="condition.kind == 'subSelect'">
        <cSubSelect
          :arg="(condition as Select)"
          v-model:value="searchItem[(condition as SubSelect).field]"
          :parent="searchItem[(condition as SubSelect).parentField]"
        />
      </template>
      <template v-else-if="condition.kind == 'radio'">
        <cRadio
          :arg="(condition as Radio)"
          v-model:value="searchItem[(condition as Radio).field]"
        />
      </template>
      <template v-else-if="condition.kind == 'text'">
        <cText
          :arg="(condition as Text)"
          v-model:value="searchItem[(condition as Text).field]"
        />
      </template>
      <template v-else-if="condition.kind == 'date'">
        <cDate
          :arg="(condition as CDate)"
          v-model:value="searchItem[(condition as CDate).field]"
        />
      </template>
      <template v-else-if="condition.kind == 'period'">
        <cPeriod
          :arg="(condition as Period)"
          @value="(obj) => (searchItem[obj.field] = obj.value)"
        />
      </template>
    </template>
  </div>
</template>
<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  ref,
  Ref,
  computed,
  watch,
  reactive,
} from "vue";
import {
  ICondition,
  CodePopup,
  Select,
  Radio,
  Text,
  CDate,
  Period,
  SubSelect,
} from "./Conditions";
import cCodePopup from "./conditions/CCodePopup.vue";
import cSelect from "./conditions/CSelect.vue";
import cSubSelect from "./conditions/CSubSelect.vue";
import cRadio from "./conditions/CRadio.vue";
import cText from "./conditions/CText.vue";
import cDate from "./conditions/CDate.vue";
import cPeriod from "./conditions/CPeriod.vue";

interface Props {
  searchSetting: Array<ICondition>;
}

const searchItem = ref({});
defineProps<Props>();
const emit = defineEmits(["update:searchItem"]);

watch(searchItem.value, (newItem) => {
  emit("update:searchItem", newItem);
});
</script>
