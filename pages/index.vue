<template>

  <main
      class="
        relative container bg-sf-gray text-sf-white mx-0 h-full w-full overflow-hidden
        xl:mx-auto
        landscape:h-auto landscape:min-h-[1024px]
      ">
    <div class="
      h-full grid
      grid-cols-10 grid-rows-12 gap-0 px-14px py-14px
      xl:grid-cols-7 xl:grid-rows-7
    ">

      <div class="
        text-10px leading-snug
        col-start-1 row-start-1 col-span-3
        ipv12:row-start-2 ipv12:text-11px
        xl:text-11px xl:leading-14px
        xl:col-start-1 xl:row-start-3 xl:col-span-1 xl:pr-8
      ">
        Full-service creative firm,
        based in Italy (2010)
      </div>

      <div class="
        col-start-4 row-start-1 col-span-2
        ipv12:row-start-2
        xl:col-start-2 xl:row-start-3 xl:col-span-1
        flex items-start justify-center
      ">
        <img
            class="
              px-4
              ipv12:px-5
              xl:px-0
            "
            src="../assets/img/logo.svg"
            alt="SF"
        />
      </div>

      <div class="
        overflow-y-auto
        text-9px leading-tight
        col-start-6 row-start-1 col-span-4 row-span-10 pl-3
        ipv12:row-start-2 ipv12:row-span-8 ipv12:text-10px ipv12:pl-4
        xl:text-11px xl:leading-14px
        xl:col-start-3 xl:row-start-1 xl:col-span-1 xl:row-span-6 xl:pt-6 xl:pl-0
      ">
        <div class="xl:pt-3 xl:pl-4">
          <ul>
            <li v-for="(v, i) in sections" :key="i">
              <router-link :to="`/s/${v.alias}`">{{ v.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="
        invisible
        flex flex-col justify-start items-center
        xl:visible xl:col-start-4 xl:row-start-3 xl:row-span-4 xl:text-11px xl:leading-26px
      ">
        <ul>
          <li v-for="(v, i) in filters" :key="i">
            <router-link :to="`/f/${v.alias}`">{{ v.name }}</router-link>
          </li>
        </ul>
      </div>

      <div class="
        text-10px leading-normal
        col-start-1 col-span-5 row-start-3 row-span-3
        ipv12:text-11px
        xl:col-start-5 xl:row-start-3 xl:row-span-3 xl:text-11px xl:leading-16px
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
        flex flex-col justify-center items-start
        col-start-1 row-start-9 col-span-5
        xl:block
        xl:col-start-6 xl:row-start-1 xl:col-span-1 xl:pl-10
      ">
        <porfolio-btn
            class="ml-0 xl:ml-4"
        />
      </div>
      <div class="
        flex items-end
        col-start-6 col-span-5 row-start-10 row-span-1 pl-4 mt-0
        xl:block
        xl:col-start-6 xl:col-span-3 xl:row-start-3 xl:row-span-1 xl:mt-0 xl:pl-10
      ">
        <img src="../assets/img/studio-white.svg" alt="Studio">
      </div>

      <div class="
        flex flex-col justify-center items-start
        col-start-1 col-span-5 row-start-7 row-span-2
        xl:col-start-6 xl:row-start-6 xl:col-span-1 xl:text-sm xl:pl-10
      ">
        <about-links/>
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
