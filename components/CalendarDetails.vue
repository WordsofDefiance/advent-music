<template>
    <div class="p-4 bg-white rounded-lg shadow-md flex flex-col space-around">
      <div>
        <h2 class="text-2xl font-semibold">{{ album.name }}</h2>
        <p class="text-lg font-semibold text-gray-700">{{ album.year }}</p>
        <p class="text-lg text-gray-700">{{ album.artist }}</p>
      </div>
      <div v-html="album.embedHtml" />
    </div>
  </template>
  
  <script setup lang="ts">
  import {type Album} from '../types/AlbumType';

    const props = defineProps<{
      album: Album
    }>();
  </script>
  