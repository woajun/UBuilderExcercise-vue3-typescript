<template>
  <table>
    <thead>
      <tr>
        <th v-for="col in props.headers" :key="col.field">
          {{ col.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in data"
        :key="row.id"
        @click="$emit('update:selected', row)"
        @dblclick="$emit('update:dblClkRow', row)"
      >
        <td v-for="col in headers" :key="col.field">
          <template v-for="(value, key) of row">
            <template v-if="String(key) === col.field">
              {{ value }}
            </template>
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { Header } from "./tableSetting";

const props = defineProps<{
  headers: Array<Header>;
  data?: Array<Record<string, string>>;
  selected?: Record<string, any>;
}>();
</script>
<style>
table,
td {
  border: 1px solid #333;
}

thead,
tfoot {
  background-color: #333;
  color: #fff;
}
</style>
