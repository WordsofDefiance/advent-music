<template>
  <div class="bg-green-500">
    <Snowflakes />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
useHead({
  title: 'Jingle Jams',
  meta: [
    { name: 'description', content: 'A musical advent calendar' }
  ],
})
</script>