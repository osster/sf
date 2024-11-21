<template>

  <swiper
      v-if="gallery && gallery.slides.length"
      class="page-bg-swiper"
      :slides-per-view="1"
      :space-between="0"
      :update-on-window-resize="true"
      :loop="true"
      :direction="isMobile ? 'vertical' : 'horizontal'"
      :initial-slide="slideNo"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <swiper-slide
        v-for="(d, i) in gallery.slides"
        :key="i"
    >
      <div
          :style="getSlideStyle(d)"
          class="w-full h-full bg-no-repeat"
      ></div>
    </swiper-slide>
  </swiper>

  <main
      class="
        relative bg-sf-black text-sf-white mx-0 h-full w-full overflow-hidden
        xl:container xl:mx-auto
      "
      :class="isMobile ? 'landscape:h-auto landscape:min-h-[1024px]' : ''"
  >
    <div class="
      h-full grid
      grid-cols-10 grid-rows-12 gap-0 px-0 py-0
      xl:grid-cols-7 xl:grid-rows-7
    ">

      <div
          v-if="gallery && (gallery.slides[slideNo].title || gallery.slides[slideNo].sub)"
          class="
            z-10
            text-10px leading-5 font-bold
            col-start-1 col-span-8 row-start-1 row-span-3 pl-14px pt-14px
            ipv12:text-11px ipv12:row-start-2 ipv12:pt-0
            xl:text-base xl:col-start-1 xl:col-span-3 xl:row-start-1 xl:row-span-3 xl:pr-24 xl:pl-4
          "
          :class="textColor"
      >
        <div
            v-if="gallery.slides[slideNo].title"
            v-html="gallery.slides[slideNo].title"
        />
        <div
            v-if="gallery.slides[slideNo].sub"
            v-html="gallery.slides[slideNo].sub"
        />
      </div>

      <div class="
        z-10
        col-start-9 col-span-2 row-start-1 flex justify-end items-start
        ipv12:row-start-2
        xl:col-start-7 xl:row-start-1 xl:pr-4
        xl:flex justify-end
      ">
        <router-link
            class="
              mr-14px mt-14px
              ipv12:mt-0
            "
            to="/"
        >
          <img :src="logoUrl" alt="SF">
        </router-link>
      </div>

      <div class="
        z-10 mt-4
        invisible
        xl:visible
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
import { useRoute, useRouter } from 'vue-router'
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
const router = useRouter()

const alias = computed(() => route?.params?.alias || '')
const slideKey = computed(() => route?.hash.replace(/[#\/]/, '') || 0)
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
const slideNo = ref(parseInt(slideKey.value, 10))
const slidesTot = ref(0)
const timer = ref(null)

const onSwiper = (swiper) => {
  // console.log(swiper);
};
const onSlideChange = async (d) => {
  slideNo.value = d?.realIndex || 0;
  const slide = gallery.value.slides[slideNo.value];
  if (alias.value !== '') {
    window.location.hash = `${slideNo.value}`;
  }
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
  let images;
  if (isMobile) {
    images = slide.fileSm;
  } else {
    images = slide.fileLg;
  }

  if (!images) return '';

  let color = 'black';
  const urls = images.map((path) => {
    const ms = path.match(/^fill:([\w]+)/)
    if (ms) {
      color = ms[1];
      return `url()`
    }
    return `url(${config.app.baseURL}${path})`
  })

  const positions = [];
  const sizes = [];
  for (let i = 0; i <= images.length-1; i++) {
    if (i === 0) {
      sizes[i] = 'cover'
      const p = isMobile ? slide?.pos?.sm : slide?.pos?.lg;
      if (p) {
        positions[i] = `${p?.x || 'center'} ${p?.y || 'center'}`
      } else {
        positions[i] = 'center';
      }
    } else {
      sizes[i] = 'auto'
      positions[i] = 'center'
    }
  }

  let img = urls.reverse().join(', ');
  const size = sizes.reverse().join(', ')
  const pos = positions.reverse().join(', ')

  css = `background-image: ${img}; background-size: ${size}; background-position: ${pos}; background-color: ${color}; height: 100svh;`;

  console.log('css', css);
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
.page-bg-swiper {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  //z-index: -1;
  //object-fit: cover;
}
</style>
