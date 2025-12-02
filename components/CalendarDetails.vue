<template>
    <div class="p-4 bg-white/80 backdrop-blur rounded-xl shadow-md ring-1 ring-black/5 flex flex-col gap-2">
      <div class="space-y-1">
        <h2 class="text-xl font-semibold tracking-tight bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 bg-clip-text text-transparent">
          {{ album.name }}
        </h2>
        <p class="text-sm font-medium text-slate-600">
          {{ album.artist }} · {{ album.year }}
        </p>
      </div>
      <div class="overflow-hidden rounded-lg ring-1 ring-black/5 shadow-sm" v-html="album.embedHtml" />
    </div>
  </template>
  
  <script setup lang="ts">
  import {type Album} from '../types/AlbumType';

    const props = defineProps<{
      album: Album
    }>();
  </script>
  