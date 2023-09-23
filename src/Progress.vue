<script setup>
defineProps({
  progress: {
    type: Number,
    default: 0,
  },
});
</script>
<template>
  <div
    class="h-2 w-full bg-white rounded-full dark:bg-[#272a2f] overflow-hidden"
  >
    <div
      :style="{ width: `${progress}%` }"
      class="h-2 bg-green-400 w-10 rounded-full transition-all duration-500 ease-in-out"
    ></div>
  </div>
</template>
<style scoped></style>
