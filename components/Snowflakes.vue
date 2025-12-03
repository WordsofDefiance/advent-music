<template>
  <div class="fixed top-0 left-0 w-full h-full pointer-events-none z-[1] overflow-hidden">
    <div
      v-for="(snowflake, index) in snowflakes"
      :key="index"
      class="absolute -top-5 text-white select-none drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
      :class="index % 2 === 0 ? 'animate-fall-drift-right' : 'animate-fall-drift-left'"
      :style="snowflake.style"
    >
      ❄
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Snowflake {
  style: {
    left: string
    animationDuration: string
    animationDelay: string
    fontSize: string
    opacity: string
  }
}

const snowflakes = ref<Snowflake[]>([])

const generateSnowflakes = () => {
  const count = 50 // Number of snowflakes
  const flakes: Snowflake[] = []

  for (let i = 0; i < count; i++) {
    flakes.push({
      style: {
        left: `${Math.random() * 100}%`,
        animationDuration: `${10 + Math.random() * 20}s`, // 10-30 seconds
        animationDelay: `${Math.random() * 5}s`, // 0-5 seconds delay
        fontSize: `${8 + Math.random() * 12}px`, // 8-20px
        opacity: `${0.3 + Math.random() * 0.5}`, // 0.3-0.8 opacity
      },
    })
  }

  snowflakes.value = flakes
}

onMounted(() => {
  generateSnowflakes()
})
</script>

