<template>
  <div>
    <br />====[리스트]====<br />
    <span> 검색결과 : </span>
    <span> {{ data.length }} </span>
    <span> 건 </span>
    <table>
      <thead>
        <tr>
          <th v-for="col in props.tableSetting.headers" :key="col.field">
            {{ col.label }}
            <!-- TODO 정렬기능
            <button>정렬</button> -->
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.id">
          <td v-for="col in props.tableSetting.headers" :key="col.field">
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
import { TableSetting } from "./tableSetting";

const props = defineProps<{
  tableSetting: TableSetting;
  data: Array<Record<string, string>>;
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
