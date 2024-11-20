<template>
  <video
      class="page-bg-video"
      ref="video"
      autoplay
      muted
      loop
      playsinline
  >
    <source :src="`${config.app.baseURL}${src}`" type="video/mp4">
  </video>
</template>

<script setup lang="ts">
import {defineProps} from '@vue/runtime-core'

const config = useRuntimeConfig()

defineProps<{
  src: string
}>();
</script>

<style scoped lang="scss">
.page-bg-video {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  min-width: 100vw;
  min-height: 100vh;
  z-index: -1;
  object-fit: cover;
}
</style>
