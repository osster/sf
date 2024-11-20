<template>
  <BgVideo src="video/rain.mp4"/>

  <main
      class="
        relative container text-sf-white mx-0 h-full w-full overflow-hidden
        xl:mx-auto
      "
      :class="isMobile ? 'landscape:h-auto landscape:min-h-[1024px]' : ''"
  >
    <div class="
      h-full grid
      grid-cols-10 grid-rows-12 gap-0 px-14px py-14px
      xl:grid-cols-7 xl:grid-rows-10
    ">

      <div class="
        text-10px leading-snug
        col-start-1 row-start-1 col-span-3

        ipv14:row-start-2
        ipv14:text-11px ipv14:leading-14px
        ipv14:mt-[-11px] ipv14:ml-[3px]

        xl:text-11px xl:leading-14px
        xl:col-start-1 xl:row-start-5 xl:col-span-1
        xl:pr-10 xl:mt-3 xl:ml-[6px]
      ">
        Full-service creative firm,
        based in Italy (2010)
      </div>

      <div class="
        col-start-4 row-start-1 col-span-2

        ipv14:row-start-2
        ipv14:mt-[-6px] ipv14:ml-[6px]

        xl:col-start-2 xl:row-start-5 xl:col-span-1
        flex items-start justify-center
      ">
        <img
            class="
              px-4

              ipv14:px-[17px]

              xl:px-0 xl:ml-6 xl:mt-4
            "
            src="../assets/img/logo.svg"
            alt="SF"
        />
      </div>

      <div class="
        text-9px leading-tight
        col-start-6 row-start-1 col-span-4 row-span-10 pl-3

        ipv14:row-start-2 ipv14:row-span-8
        ipv14:text-10px ipv14:leading-12px

        xl:text-11px xl:leading-14px
        xl:col-start-3 xl:row-start-1 xl:col-span-1 xl:row-span-9 xl:pt-6 xl:pl-0
      ">
        <div class="
          overflow-y-auto

          ipv14:mt-[-10px] ipv14:ml-[9px]

          xl:pt-2 xl:pl-7
        ">
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
        xl:visible xl:col-start-4 xl:row-start-5 xl:row-span-4 xl:text-11px xl:leading-26px
      ">
        <ul class="pr-5 pt-1">
          <li v-for="(v, i) in filters" :key="i">
            <router-link :to="`/f/${v.alias}`">{{ v.name }}</router-link>
          </li>
        </ul>
      </div>

      <div class="
        text-10px leading-normal
        col-start-1 col-span-5 row-start-3 row-span-3

        ipv14:text-11px ipv14:leading-16px

        xl:col-start-5 xl:row-start-5 xl:row-span-3 xl:text-11px xl:leading-16px
      ">
        <ul class="
          ipv14:mt-[8px] ipv14:ml-[3px]

          xl:pt-3 xl:ml-[-30px]
        ">
          <li>
            Creative Direction
          </li>
          <li>
            Brand Marketing Strategy
          </li>
          <li>
            E-Commerce Consulting
          </li>
          <li>
            Content Creation
          </li>
          <li>
            Brand & Visual System Design
          </li>
          <li>
            Website/E-Commerce Development
          </li>
          <li>
            Product Design
          </li>
          <li>
            Performance Marketing
          </li>
          <li>
            Activations & Events
          </li>
        </ul>
      </div>


      <div class="
        flex flex-col justify-center items-start
        col-start-1 row-start-9 col-span-5

        ipv14:row-start-9

        xl:block
        xl:col-start-6 xl:row-start-1 xl:col-span-1 xl:mt-1
      ">
        <porfolio-btn
            class="
              ml-0
              ipv14:mt-[87px] ipv14:ml-[3px]
              xl:ml-4
            "
        />
      </div>

      <div class="
        flex items-end
        col-start-6 col-span-5 row-start-10 row-span-1
        pl-4 mt-0

        ipv14:block
        ipv14:row-start-11
        ipv14:pl-0 ipv14:ml-[20px] ipv14:mt-[-20px]

        xl:block
        xl:col-start-6 xl:col-span-3 xl:row-start-5 xl:row-span-1
        xl:mt-4 xl:ml-0
      ">
        <img src="../assets/img/studio-white.svg" alt="Studio">
      </div>

      <div class="
        flex flex-col justify-center items-start
        col-start-1 col-span-5 row-start-7 row-span-2

        ipv14:block
        ipv14:row-start-8
        ipv14:pl-0 ipv14:ml-[2px] ipv14:mt-[45px]

        xl:col-start-6 xl:row-start-8 xl:col-span-1
        xl:ml-[14px] xl:mt-[14px]
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
import BgVideo from '@/components/BgVideo'
// import { useScreenOrientation } from '@vueuse/core'

const { isMobile } = useDevice()

const config = useRuntimeConfig()

// const {
//   isSupported,
//   orientation,
//   angle,
//   lockOrientation,
//   unlockOrientation,
// } = useScreenOrientation()
// lockOrientation('portrait-primary')
</script>

<style scoped lang="scss">

</style>
