<template>

  <main
      class="relative h-full container mx-auto h-full bg-sf-gray text-sf-white"
  >
    <div class="
      h-full grid
      grid-cols-10 grid-rows-12 gap-0 px-14px py-14px
      lg:grid-cols-7 lg:grid-rows-7
    ">

      <div class="
        col-start-1 row-start-2 col-span-3 text-2xs
        lg:col-start-1 lg:row-start-3 lg:col-span-1 lg:text-xs lg:pr-8
      ">
        Full-service creative firm,
        based in Italy (2010)
      </div>

      <div class="
        col-start-4 row-start-2 col-span-2
        lg:col-start-2 lg:row-start-3 lg:col-span-1
        flex flex-col justify-start items-center
      ">
        <img
            class="px-5 lg:px-0"
            src="../assets/img/logo.svg"
            alt="SF"
        />
      </div>

      <div class="
        col-start-6 row-start-2 col-span-4 row-span-8 text-3xs pl-4
        lg:col-start-3 lg:row-start-1 lg:col-span-1 lg:row-span-6 lg:text-xs lg:pl-0
        leading-none overflow-y-auto
      ">
        <div class="lg:pt-3 lg:pl-4">
          <ul>
            <li v-for="(v, i) in sections" :key="i" class="mb-1">
              <router-link :to="`/s/${v.alias}`">{{ v.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="
        invisible
        lg:visible lg:col-start-4 lg:row-start-3 lg:row-span-3 lg:text-xs
        flex flex-col justify-start items-center
      ">
        <ul>
          <li v-for="(v, i) in filters" :key="i" class="mb-2">
            <router-link :to="`/f/${v.alias}`">{{ v.name }}</router-link>
          </li>
        </ul>
      </div>

      <div class="
        col-start-1 col-span-5 row-start-3 row-span-3 text-2xs
        lg:col-start-5 lg:row-start-3 lg:row-span-3 lg:text-xs
      ">
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


      <div class="
        col-start-6 col-span-5 row-start-10 row-span-1 pl-4 mt-6
        lg:block
        lg:col-start-6 lg:col-span-1 lg:row-start-3 lg:row-span-1 lg:pl-0 lg:mt-0
      ">
        <img src="../assets/img/studio-white.svg" alt="Studio">
      </div>

      <div class="
        col-start-1 row-start-8 col-span-5 text-base underline
        lg:col-start-6 lg:row-start-6 lg:col-span-1 lg:text-sm
      ">
        <about-links/>
      </div>

      <div class="
        flex flex-col justify-center items-start
        col-start-1 row-start-9 col-span-5
        lg:block
        lg:col-start-6 lg:row-start-1 lg:col-span-1
      ">
        <porfolio-btn
            class="ml-0 lg:ml-4"
        />
      </div>

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
