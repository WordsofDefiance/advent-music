<template>
    <div class="flex justify-around	flex-wrap">
        <CalendarFront
            v-for="(day, index) in adventAlbums"
            :key="index"
            :day="index + 1"
            :album="day"
            class="w-80 md:w-96 h-96 mb-6"
            :disabled=isDisabled(index)
        />
     </div>
</template>
<script setup lang="ts">
import { adventAlbums } from '../albums/albums';

// Get the current day of the month
const currentDate = new Date();
const currentDayOfMonth = currentDate.getDate();

// Calculate if an album should be disabled based on its index
const isDisabled = (index: number) => {
  return index >= currentDayOfMonth;
};
</script>
