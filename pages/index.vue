<template>
    <div class="flex justify-around	flex-wrap">
        <CalendarFront
            v-for="(day, index) in adventAlbums"
            :key="index"
            :day="index + 1"
            :album="day"
            class="w-80 md:w-96 h-96 mb-6"
        />
     </div>
</template>
<script setup lang="ts">
import { adventAlbums } from '../albums/albums';
</script>