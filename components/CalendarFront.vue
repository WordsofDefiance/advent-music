<template>
    <div
        :class="[
            'p-4 rounded-2xl border shadow-lg transition relative',
            disabled 
                ? 'border-white/40 bg-white/30 backdrop-blur-xl cursor-not-allowed opacity-90 overflow-hidden' 
                : 'border-white/20 bg-white/10 backdrop-blur-md hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer'
        ]"
        @click="flipCard"
    >
        <!-- Frosted glass overlay for disabled cards -->
        <FrostedGlassOverlay v-if="disabled" />
        
        <ChristmasLights />
        <CalendarAnimation :is-flipped="isFlipped">
            <template #front>
                <div v-if="!isFlipped" class="flex justify-center items-center h-full">
                    <div class="relative">
                      <span 
                        :class="[
                            'relative z-10 select-none inline-flex items-center justify-center w-24 h-24 rounded-full shadow-md',
                            disabled 
                                ? 'bg-white/60 ring-2 ring-blue-200/50' 
                                : 'bg-white/85 ring-1 ring-amber-300'
                        ]"
                      >
                        <span 
                            :class="[
                                'text-5xl font-extrabold tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]',
                                disabled 
                                    ? 'text-blue-400/70' 
                                    : 'bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 bg-clip-text text-transparent'
                            ]"
                        >
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
import FrostedGlassOverlay from './FrostedGlassOverlay.vue';
import type { Album } from '../types/AlbumType';

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
