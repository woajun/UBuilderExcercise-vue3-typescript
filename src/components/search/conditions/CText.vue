<template>
  <div>
    <template v-if="text.label"> {{ text.label }} : </template>
    <input type="text" v-model="value" :placeholder="text.placeholder" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, computed, onMounted } from "vue";
import { Text } from "../Conditions";

const props = defineProps<{
  arg: Text;
  modelValue?: string;
}>();
const text = ref(props.arg);
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

onMounted(() => {
  value.value = text.value.value;
});
</script>
