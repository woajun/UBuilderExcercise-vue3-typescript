<template>
  <div>
    <span>
      <input
        type="text"
        v-model="period.from"
        :placeholder="period.fromPlaceholder"
        @change="
          $emit('value', {
            field: period.field.concat('From'),
            value: period.to,
          })
        "
      />
    </span>
    <span> ~ </span>
    <span>
      <input
        type="text"
        v-model="period.to"
        :placeholder="period.toPlaceholder"
        @change="
          $emit('value', {
            field: period.field.concat('To'),
            value: period.to,
          })
        "
      />
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { Period } from "../Conditions";

interface Props {
  arg: Period;
}
const props = defineProps<Props>();
const period = ref(props.arg);
</script>

<style></style>
