<template>
  <!-- Frosted glass overlay -->
  <div 
    class="absolute inset-0 pointer-events-none z-[1] bg-gradient-radial from-white/30 via-transparent to-transparent"
    style="background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(200, 230, 255, 0.15) 0%, transparent 50%);"
  />
  
  <!-- Ice crystals -->
  <div class="absolute inset-0 pointer-events-none z-[2] overflow-hidden">
    <div class="absolute top-[10%] left-[15%] text-[1.5rem] text-blue-200/60 drop-shadow-[0_0_3px_rgba(200,230,255,0.8)] animate-sparkle">❄</div>
    <div class="absolute top-[20%] right-[20%] text-[1.2rem] text-blue-200/60 drop-shadow-[0_0_3px_rgba(200,230,255,0.8)] animate-sparkle" style="animation-delay: 0.8s;">❄</div>
    <div class="absolute bottom-[25%] left-[25%] text-[1.3rem] text-blue-200/60 drop-shadow-[0_0_3px_rgba(200,230,255,0.8)] animate-sparkle" style="animation-delay: 1.6s;">❄</div>
    <div class="absolute bottom-[15%] right-[15%] text-[1.1rem] text-blue-200/60 drop-shadow-[0_0_3px_rgba(200,230,255,0.8)] animate-sparkle" style="animation-delay: 2.4s;">❄</div>
  </div>
</template>

<script setup lang="ts">
// Frosted glass overlay component for disabled calendar cards
</script>

