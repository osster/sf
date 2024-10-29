<template>

  <main
      class="
        relative container bg-sf-gray text-sf-white mx-0 h-full w-full overflow-hidden
        2xl:mx-auto
      ">
    <div class="
      h-full grid
      grid-cols-10 grid-rows-12 gap-0 px-14px py-14px
      2xl:grid-cols-7 2xl:grid-rows-7
    ">

      <div class="
        text-10px leading-snug
        col-start-1 row-start-1 col-span-3
        ipro12:row-start-2 ipro12:text-11px
        2xl:text-11px 2xl:leading-14px
        2xl:col-start-1 2xl:row-start-3 2xl:col-span-1 2xl:pr-8
      ">
        Full-service creative firm,
        based in Italy (2010)
      </div>

      <div class="
        col-start-4 row-start-1 col-span-2
        ipro12:row-start-2
        2xl:col-start-2 2xl:row-start-3 2xl:col-span-1
        flex items-start justify-center
      ">
        <img
            class="
              px-4
              ipro12:px-5
              2xl:px-0
            "
            src="../assets/img/logo.svg"
            alt="SF"
        />
      </div>

      <div class="
        overflow-y-auto
        text-9px leading-tight
        col-start-6 row-start-1 col-span-4 row-span-10 pl-3
        ipro12:row-start-2 ipro12:row-span-8 ipro12:text-10px ipro12:pl-4
        2xl:text-11px 2xl:leading-14px
        2xl:col-start-3 2xl:row-start-1 2xl:col-span-1 2xl:row-span-6 2xl:pl-0
      ">
        <div class="2xl:pt-3 2xl:pl-4">
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
        2xl:visible 2xl:col-start-4 2xl:row-start-3 2xl:row-span-4 2xl:text-11px 2xl:leading-26px
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
        ipro12:text-11px
        2xl:col-start-5 2xl:row-start-3 2xl:row-span-3 2xl:text-11px 2xl:leading-16px
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
        2xl:block
        2xl:col-start-6 2xl:row-start-1 2xl:col-span-1 2xl:pl-10
      ">
        <porfolio-btn
            class="ml-0 2xl:ml-4"
        />
      </div>
      <div class="
        flex items-end
        col-start-6 col-span-5 row-start-10 row-span-1 pl-4 mt-0
        2xl:block
        2xl:col-start-6 2xl:col-span-3 2xl:row-start-3 2xl:row-span-1 2xl:mt-0 2xl:pl-10
      ">
        <img src="../assets/img/studio-white.svg" alt="Studio">
      </div>

      <div class="
        flex flex-col justify-center items-start
        col-start-1 col-span-5 row-start-7 row-span-2
        2xl:col-start-6 2xl:row-start-6 2xl:col-span-1 2xl:text-sm 2xl:pl-10
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
