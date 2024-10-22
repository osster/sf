<template>
  <main
      class="relative h-full container mx-auto bg-sf-black text-sf-white"
      :style="bgStyle"
  >
    <div class="h-full grid grid-rows-7 grid-cols-7 gap-4 px-4 py-4">
      <div class="col-start-1 col-span-5 row-start-1 row-span-6 grid grid-cols-subgrid grid-rows-subgrid">
        <div
            v-if="gallery"
            class="col-start-1 col-span-4 row-start-1 row-span-3 text-base leading-5 font-bold mr-10"
            :class="textColor"
        >
          <span v-html="gallery.title"></span><br>
          <span v-html="gallery.sub"></span>
        </div>
      </div>
      <div class="col-start-6 row-start-1">
        <porfolio-btn/>
      </div>
      <div class="col-start-7 row-start-1 flex justify-end">
        <router-link to="/">
          <img :src="logoUrl" alt="SF">
        </router-link>
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

const bgStyle = ref('')
const gallery = ref(null)
const route = useRoute()

const alias = computed(() => route?.params?.alias || '')
const logoUrl = computed(() => {
  if (slideTheme.value === 'light') {
    return '/img/logo-sm-white.svg'
  }
  return '/img/logo-sm-black.svg'
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
    gallery.value = galleries.find(i => i.alias === alias.value)

    if (gallery.value?.slides?.length) {
      if (timer.value) {
        clearInterval(timer.value)
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
    idx = 0
  }
  const slide = gallery.value.slides[idx]
  slideNo.value = idx
  slideTheme.value = slide.theme
  bgStyle.value = `background-image: url(/${gallery.value.slides[slideNo.value].file});`;
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
