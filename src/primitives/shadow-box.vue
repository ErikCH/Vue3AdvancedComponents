<script setup lang="tsx">
import { useStore } from "../composables/useStore";
import RenderInfo from "../components/render-info.vue";

const store = useStore();

store.shadowText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
      maxime corporis est. Quam cum suscipit consequuntur? Illo non expedita
      molestiae ab, dolorem numquam ipsum. Iste.`;
</script>
<template>
  <div class="shadow-2xl rounded-md w-4/12 bg-white text-2xl">
    <!-- {{ store.shadowText }} -->
    <render-info :info="store.shadowText" />
  </div>
</template>
