<template>

  <main class="relative h-full container mx-auto h-full bg-sf-gray text-sf-white">
    <div class="h-full grid grid-rows-7 grid-cols-7 gap-0 px-4 py-4">
      <div class="col-start-1 row-start-3 row-end-3 text-xs">
        Full-service creative firm, <br>
        based in Italy (2010)
      </div>
      <div class="col-start-2 row-start-3 row-span-2 flex flex-col justify-start items-center">
        <img src="../assets/img/logo.svg" alt="SF">
      </div>
      <div class="col-start-3 row-span-6 text-xs">
        <div class="pt-3">
          <ul>
            <li v-for="(v, i) in sections" :key="i" class="mb-1">
              <router-link :to="`/s/${v.alias}`">{{ v.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-start-4 row-start-3 row-span-3 text-xs flex flex-col justify-start items-center">
        <ul>
          <li v-for="(v, i) in filters" :key="i" class="mb-2">
            <router-link :to="`/f/${v.alias}`">{{ v.name }}</router-link>
          </li>
        </ul>
      </div>
      <div class="col-start-5 row-start-3 row-span-3 text-xs">
        Creative Direction<br/>
        Brand Identity & graphic design<br/>
        Brand Initiative<br/>
        Content Creation<br/>
        Website/E-Commerce Development<br/>
        Product Development & Design<br/>
        Growth Marketing<br/>
        Experiential Activations & Events<br/>
        Panel Discussions & Talks<br/>
        Digital Performance Review<br/>
        Brand Development Strategy
      </div>
      <div class="col-start-6 row-start-1">
        <porfolio-btn/>
      </div>
      <div class="col-start-6 row-start-3 row-span-3">
        <img src="../assets/img/studio-white.svg" alt="Studio">
      </div>
      <div class="col-start-6 row-start-6 text-sm">
        <about-links/>
      </div>
      <div class="col-start-7"></div>
    </div>
    <footer-gallery/>
  </main>

</template>

<script setup>
import { sections, filters } from '@/content'
import AboutLinks from '@/components/AboutLinks'
import PorfolioBtn from '@/components/PorfolioBtn'
import FooterGallery from '@/components/FooterGallery'
</script>

<style scoped lang="scss">

</style>
