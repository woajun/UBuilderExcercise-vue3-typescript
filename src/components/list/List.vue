<template>
  <div>
    <br />=============[리스트]====================<br />
    {{ props.listSetting.title }}
    <table>
      <thead>
        <tr>
          <th v-for="col in props.listSetting.headers" :key="col.field">
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
          <td>with two columns</td>
          <td>with two columns</td>
          <td>with two columns</td>
        </tr>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
          <td>with two columns</td>
          <td>with two columns</td>
          <td>with two columns</td>
        </tr>
        <tr>
          <td>The table body</td>
          <td>with two columns</td>
          <td>with two columns</td>
          <td>with two columns</td>
          <td>with two columns</td>
        </tr>
      </tbody>
    </table>

    {{ props }}
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { ListSetting } from "./listSettings";

interface Props {
  listSetting: ListSetting;
}
const props = defineProps<Props>();
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
