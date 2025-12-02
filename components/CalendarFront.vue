<template>
    <div
        class="p-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer relative"
        @click="flipCard"
    >
        <ChristmasLights />
        <CalendarAnimation :isFlipped="isFlipped">
            <template #front>
                <div v-if="!isFlipped" class="flex justify-center items-center h-full">
                    <div class="relative">
                      <span class="relative z-10 select-none inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/85 ring-1 ring-amber-300 shadow-md">
                        <span class="text-5xl font-extrabold tracking-tight bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
                          {{ day }}
                        </span>
                      </span>
                    </div>
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
    disabled: boolean,
}>();

const isFlipped = ref(false);
const flipCard = () => {
    if (! props.disabled) {
        isFlipped.value = true;
    }
};
</script>
