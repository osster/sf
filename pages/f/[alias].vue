<template>
  <main
      class="
        relative container bg-sf-black text-sf-white mx-0 h-full w-full bg-no-repeat bg-center bg-cover
        2xl:mx-auto
        2xl:min-h-[1024px]
      "
      :style="bgStyle"
  >
    <div class="
      h-full grid
      grid-cols-10 grid-rows-12 gap-4 px-14px py-14px
      2xl:grid-cols-7 2xl:grid-rows-7 2xl:px-4 2xl:py-4
    ">
      <div class="
        col-start-10 row-start-1
        ipro12:row-start-2
        2xl:col-start-7 2xl:row-start-1 2xl:flex justify-end
      ">
        <router-link to="/">
          <img :src="logoUrl" alt="SF">
        </router-link>
      </div>

      <div
          v-if="gallery"
          class="
            text-11px leading-5 font-bold
            col-start-1 col-span-9 row-start-1 row-span-3
            ipro12:text-11px ipro12:row-start-2
            2xl:text-base 2xl:col-start-1 2xl:col-span-4 2xl:row-start-1 2xl:row-span-3 2xl:mr-10
          "
          :class="textColor"
      >
        <span v-html="gallery.title"></span><br>
        <span v-html="gallery.sub"></span>
      </div>

      <div class="
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
const { isMobile } = useDevice()

const config = useRuntimeConfig()

const bgStyle = ref('')
const gallery = ref(null)
const route = useRoute()

const alias = computed(() => route?.params?.alias || '')
const logoUrl = computed(() => {
  if (slideTheme.value === 'light') {
    return `/img/logo-sm-white.svg`
  }
  return `/img/logo-sm-black.svg`
})
const textColor = computed(() => {
  if (slideTheme.value === 'light') {
    return 'text-sf-white'
  }
  return 'text-sf-black'
})

const slideTheme = ref('light')
const slideNo = ref(null)
const slidesTot = ref(null)
const timer = ref(null)

function initGallery() {
  if (alias.value !== '') {
    gallery.value = galleries.find(i => i.year === alias.value)

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
      showSlide(0)
      timer.value = setInterval(() => {
        showSlide(slideNo.value + 1)
      }, 3000)
    }
  }
}

function showSlide(idx) {
  if (idx > slidesTot.value-1) {
    idx = 0;
  }
  const slide = gallery.value.slides[idx];
  slideNo.value = idx;
  slideTheme.value = slide.theme;

  let url = '';
  if (isMobile) {
    url = `${config.app.baseURL}${gallery.value.slides[slideNo.value].fileSm}`;
  } else {
    url = `${config.app.baseURL}${gallery.value.slides[slideNo.value].fileLg}`;
  }

  bgStyle.value = `
    background-image: url(${url});
  `;
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
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }
})
</script>

<style scoped lang="scss">

</style>
