<script setup lang="ts">
defineProps<{
  videoId: string
}>()
</script>

<template>
  <div class="rounded-md overflow-hidden" style="position:relative;padding-top:56.25%;">
    <iframe :src="`https://iframe.mediadelivery.net/embed/86266/${videoId}?autoplay=true&loop=false&muted=false&preload=false&responsive=true`" loading="lazy" style="border:0;position:absolute;top:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true"></iframe></div>
</template>
