<template>
  <div
      class="
        fixed gap-1
        bottom-1 left-0 right-0 h-20
        ipv12:bottom-10
        2xl:absolute
        2xl:bottom-4 2xl:left-4 2xl:right-4 2xl:h-16
      "
      :class="isMobile ? 'landscape:invisible' : ''"
      v-if="list.length"
  >
    <swiper
        :modules="[Virtual]"
        :slides-per-view="slidesPerPage"
        :space-between="4"
        virtual
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide
          v-for="(d, i) in list"
          :key="i"
          :style="`${i===0 ? 'margin-left:4px' : ''}`"
      >
        <router-link
            :to="d.url"
        >
          <img
              class="
                w-full max-w-xl rounded-lg h-auto
              "
              :src="d.thumb"
              :alt="d.alt"
          >
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { galleries } from '@/content'
import {computed, onMounted, ref} from 'vue'
// import { useScreenOrientation } from '@vueuse/core'

import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

// TODO: show/hide on tap for mobiles
const { isMobile } = useDevice()

// const {
//   isSupported,
//   orientation,
//   angle,
//   lockOrientation,
//   unlockOrientation,
// } = useScreenOrientation()

const list = ref([])

const onSwiper = (swiper) => {
  // console.log(swiper);
};
const onSlideChange = () => {
  // console.log('slide change');
};

const slidesPerPage = computed(() => {
  let ct = 3.5;
  if (!isMobile) {
    ct = 15;
  }
  return ct
})

onMounted(() => {
  const config = useRuntimeConfig()
  if (galleries.length) {
    galleries.forEach((i) => {
      list.value.push({
        url: `/s/${i.alias}/`,
        alt: i.title,
        thumb: `${config.app.baseURL}${i.thumb}`,
      })
    })
  }
})
</script>

<style scoped lang="scss">

</style>
