<template>
  <main
      class="
        relative container bg-sf-black text-sf-white mx-0 h-full w-full bg-no-repeat bg-center bg-cover
        2xl:mx-auto
        2xl:min-h-[1024px]
      "
  >
    <div class="
      h-full grid
      grid-cols-10 grid-rows-12 gap-0 px-0 py-0
      2xl:grid-cols-7 2xl:grid-rows-7
    ">

      <div
          v-if="gallery && gallery.slides.length"
          class="
            z-0
            col-start-1 col-span-10 row-start-1 row-span-12
          "
      >
        <swiper
            :slides-per-view="1"
            :space-between="0"
            :update-on-window-resize="true"
            :loop="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
          <swiper-slide
              v-for="(d, i) in gallery.slides"
              :key="i"
          >
            <div
                :style="getSlideStyle(d)"
                class="w-full h-full bg-center"
            ></div>
            <!--
            <img
                class="
                w-full h-full
              "
                :src="getSlideUrl(d)"
                :alt="d.key"
            >
            -->
          </swiper-slide>
        </swiper>
      </div>

      <div
          v-if="gallery && (gallery.slides[slideNo].title || gallery.slides[slideNo].sub)"
          class="
            z-10
            text-11px leading-5 font-bold
            col-start-1 col-span-9 row-start-1 row-span-3 pl-14px
            ipro12:text-11px ipro12:row-start-2
            2xl:text-base 2xl:col-start-1 2xl:col-span-4 2xl:row-start-1 2xl:row-span-3 2xl:mr-10 2xl:pl-4
          "
          :class="textColor"
      >
        <span v-html="gallery.slides[slideNo].title"></span><br>
        <span v-html="gallery.slides[slideNo].sub"></span>
      </div>

      <div class="
        z-10
        col-start-10 row-start-1 pr-14px
        ipro12:row-start-2
        2xl:col-start-7 2xl:row-start-1 2xl:pr-4
        2xl:flex justify-end
      ">
        <router-link to="/">
          <img :src="logoUrl" alt="SF">
        </router-link>
      </div>

      <div class="
        z-10
        invisible
        2xl:visible
        col-start-6 row-start-1
      ">
        <porfolio-btn/>
      </div>
    </div>
    <footer-gallery/>
  </main>
</template>

<script setup>
import PorfolioBtn from '@/components/PorfolioBtn'
import FooterGallery from '@/components/FooterGallery'
import { useRoute } from 'vue-router'
import {computed, onBeforeUnmount, onMounted, ref, watch} from 'vue'
import { galleries } from '@/content'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

const { isMobile } = useDevice()
const config = useRuntimeConfig()

const bgStyle = ref('')
const gallery = ref(null)
const route = useRoute()

const alias = computed(() => route?.params?.alias || '')
const logoUrl = computed(() => {
  if (slideTheme.value === 'light') {
    return `${config.app.baseURL}img/logo-sm-white.svg`
  }
  return `${config.app.baseURL}img/logo-sm-black.svg`
})
const textColor = computed(() => {
  if (slideTheme.value === 'light') {
    return 'text-sf-white'
  }
  return 'text-sf-black'
})

const slideTheme = ref('light')
const slideNo = ref(0)
const slidesTot = ref(0)
const timer = ref(null)

const onSwiper = (swiper) => {
  // console.log(swiper);
};
const onSlideChange = (d) => {
  slideNo.value = d?.realIndex || 0;
};

function initGallery() {
  if (alias.value !== '') {
    gallery.value = galleries.find(i => i.alias === alias.value)

    if (gallery.value?.slides?.length) {
      if (timer.value) {
        clearInterval(timer.value)
      }
      if (isMobile) {
        gallery.value.slides = gallery.value.slides.filter((i) => {
          return !i?.noMob
        })
      }
      slidesTot.value = gallery.value.slides.length
    }
  }
}

function getSlideUrl(slide) {
  let url = '';
  if (isMobile) {
    url = `${config.app.baseURL}${slide.fileSm}`;
  } else {
    url = `${config.app.baseURL}${slide.fileLg}`;
  }
  return url
}

function getSlideStyle(slide) {
  let css = '';
  if (isMobile) {
    css = `background-image: url(${config.app.baseURL}${slide.fileSm}); height: 100svh;`;
  } else {
    css = `background-image: url(${config.app.baseURL}${slide.fileLg}); height: 100svh;`;
  }
  return css
}

watch(
    () => route.params.alias,
    () => {
      initGallery()
    }
)

onMounted(() => {
  initGallery()
})
onBeforeUnmount(() => {

})
</script>

<style scoped lang="scss">

</style>
