<template>
  <div>
    <template v-if="text.label"> {{ text.label }} : </template>
    <input
      type="text"
      v-model="text.value"
      :placeholder="text.placeholder"
      @change="updateEvent"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted } from "vue";
import { Text } from "../Conditions";

interface Props {
  arg: Text;
}
const props = defineProps<Props>();
const text = ref(props.arg);
const emit = defineEmits(["update:value"]);
function updateEvent() {
  emit("update:value", text.value.value);
}
onMounted(() => {
  updateEvent();
});
</script>
