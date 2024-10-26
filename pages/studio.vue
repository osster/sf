<template>
  <main class="
    relative container bg-sf-black text-sf-white mx-0 h-full w-full
    2xl:mx-auto
  ">
    <div class="
      h-full grid
      grid-cols-10 grid-rows-12 gap-0 px-14px py-14px
      2xl:grid-cols-7 2xl:grid-rows-7 2xl:px-4 2xl:py-4
    ">

      <div class="
        col-start-10 row-start-1
        ipro12:row-start-2
        2xl:col-start-7 2xl:row-start-1 2xl:flex justify-end
      ">
        <router-link to="/">
          <img src="../assets/img/logo-sm-white.svg" alt="SF">
        </router-link>
      </div>

      <div class="
        overflow-y-auto
        leading-none font-bold
        col-start-1 col-span-7 row-start-1 row-span-8 text-18px
        ipro12:text-19px ipro12:row-start-2 ipro12:row-span-7
        2xl:ol-start-1 2xl:col-span-4 2xl:row-start-1 2xl:row-span-6 2xl:text-4.5xl 2xl:mr-10
      ">
        <p>
          Since 2010, we are partner with the world’s most forward thinking brands and innovators, challenging
          conventions and embrace new technologies, pushing the boundaries of what design can achieve. Our work
          transcends the ordinary, leaving a lasting, positive impact on both ourselves and those we collaborate
          with.
        </p>
        <p>
          Devoted to fashion and sport, our journey has naturally aligned us with industry leaders who share our
          vision for a more inspired and impactful future. Together, we craft designs that resonate deeply, shaping
          not just products, but the world around us.
        </p>
        <br class="invisible 2xl:visible">
        <p class="invisible 2xl:visible">More good, less bad.</p>
      </div>

      <div class="
        col-start-1 row-start-9 col-span-5 text-base underline
        2xl:col-start-6 2xl:row-start-6 2xl:col-span-1 2xl:text-sm
      ">
        <about-links/>
      </div>

      <div class="
        flex flex-col justify-center items-start
        col-start-1 row-start-10 col-span-5
        2xl:block
        2xl:col-start-6 2xl:row-start-1 2xl:col-span-1
      ">
        <porfolio-btn
            class="ml-0 2xl:ml-4"
        />
      </div>

      <div class="
        invisible
        2xl:visible
        col-start-5 row-start-3 row-end-3 text-xs
      ">
        Full-service creative firm, <br>
        based in Italy (2010)
      </div>
      <div class="
        invisible
        2xl:visible
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
</script>

<style scoped lang="scss">

</style>
