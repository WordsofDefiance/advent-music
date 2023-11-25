<template>
    <div class="relative w-full h-full top-6">
      <div class="flip-card-inner h-full" :class="{ 'rotate-180': isFlipped }">
        <div class="flip-card-front absolute w-full h-full backface-hidden">
          <slot name="front"></slot>
        </div>
        <div class="flip-card-back absolute w-full h-full backface-hidden rotate-180">
          <slot name="back"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
   const props = defineProps({
      isFlipped: Boolean
   });
  </script>
  
  <style scoped>
  .flip-card-inner {
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  </style>
  