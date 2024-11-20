<template>
  <BgVideo src="video/rain.mp4"/>

  <main
      class="
        relative container bg-sf-black text-sf-white mx-0 h-full w-full overflow-hidden
        xl:mx-auto
      "
      :class="isMobile ? 'landscape:h-auto landscape:min-h-[1024px]' : ''"
  >
    <div class="
      h-full grid
      grid-cols-10 grid-rows-12 gap-0 px-14px py-14px
      xl:grid-cols-7 xl:grid-rows-7 xl:px-4 xl:py-4
      landscape:h-auto landscape:min-h-[1024px]
    ">

      <div class="
        col-start-10 row-start-1
        ipv12:row-start-2
        xl:col-start-7 xl:row-start-1 xl:flex justify-end
      ">
        <router-link to="/">
          <img src="../assets/img/logo-sm-white.svg" alt="SF">
        </router-link>
      </div>

      <div class="
        text-15px leading-16px
        overflow-y-auto font-bold
        col-start-1 col-span-7 row-start-1 row-span-8 mr-0
        ipv12:text-19px ipv12:leading-20px ipv12:row-start-2 ipv12:row-span-7 ipv12:mr-0
        xl:col-start-1 xl:col-span-4 xl:row-start-1 xl:row-span-6 xl:text-39px xl:leading-44px xl:mr-20
      ">
        <p class="
          mb-1px
        ">
          Since 2010, we have partnered with the world’s most forward thinking brands and innovators, challenging
          conventions and embrace new technologies, pushing the boundaries of what design can achieve. Our work
          transcends the ordinary, leaving a lasting, positive impact on both ourselves and those we collaborate with.
        </p>
        <p>
          Devoted to fashion and sport, our journey has naturally aligned us with industry leaders who share our vision
          for a more inspired and impactful future. Together, we craft designs that resonate deeply, shaping not just
          products, but the world around us.
        </p>
      </div>

      <div class="
        flex flex-col justify-center items-start
        col-start-1 col-span-5 row-start-8 row-span-2
        xl:col-start-6 xl:row-start-6 xl:col-span-1 xl:text-sm
      ">
        <about-links/>
      </div>
      <div class="
        flex flex-col justify-center items-start
        col-start-1 row-start-10 col-span-5
        xl:block
        xl:col-start-6 xl:row-start-1 xl:col-span-1
      ">
        <porfolio-btn
            class="ml-0 xl:ml-4"
        />
      </div>

      <div class="
        invisible
        xl:visible
        col-start-5 row-start-3 row-end-3 text-xs
      ">
        Full-service creative firm, <br>
        based in Italy (2010)
      </div>
      <div class="
        invisible
        xl:visible
        col-start-6 row-start-3 row-span-3 relative
      ">
        <img
            src="../assets/img/studio-white.svg"
            alt="Studio"
        >
      </div>
    </div>
    <footer-gallery/>
  </main>
</template>

<script setup>
import AboutLinks from '@/components/AboutLinks'
import PorfolioBtn from '@/components/PorfolioBtn'
import FooterGallery from '@/components/FooterGallery'
import BgVideo from '@/components/BgVideo'

const { isMobile } = useDevice()
</script>

<style scoped lang="scss">

</style>
