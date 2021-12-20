<script setup lang="tsx">
import Info from "./components/info.vue";
import { useStore } from "./composables/useStore";
import { onMounted, h } from "vue";
const store = useStore();

onMounted(() => {
  store.shadowText = <div>Hello World</div>;
});
</script>

<template>
  <info> </info>
</template>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
