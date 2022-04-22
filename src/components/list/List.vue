<template>
  <div>
    <br />====[리스트]====<br />
    <table>
      <thead>
        <tr>
          <th v-for="col in props.listSetting.headers" :key="col.field">
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.id">
          <td v-for="col in props.listSetting.headers" :key="col.field">
            <template v-for="(value, key) of row">
              <template v-if="String(key) === col.field">
                {{ value }}
              </template>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { ListSetting } from "./listSettings";

const props = defineProps<{
  listSetting: ListSetting;
  data: any;
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
