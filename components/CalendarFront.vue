<template>
    <div class="bg-red-500 p-4 rounded-lg shadow-lg cursor-pointer relative" @click="flipCard">
        <ChristmasLights />
        <CalendarAnimation :isFlipped="isFlipped">
            <template #front>
                <div v-if="!isFlipped" class="flex justify-center items-center h-full">
                    <span class="text-4xl font-bold text-white block">{{ day }}</span>
                </div>
            </template>
            <template #back>
                <div v-if="isFlipped">
                    <CalendarDetails :album="album" />
                </div>
            </template>
        </CalendarAnimation>
    </div>
</template>
  
<script setup lang="ts">
import CalendarAnimation from './CalendarAnimation.vue';
import CalendarDetails from './CalendarDetails.vue';
import { type Album } from '../types/AlbumType';

const props = defineProps<{
    day: number,
    album: Album,
}>();

const isFlipped = ref(false);
const flipCard = () => {
    isFlipped.value = true;
};
</script>