<template>
  <main class="relative h-full container mx-auto bg-sf-black text-sf-white">
    <div class="h-full grid grid-rows-7 grid-cols-7 gap-4 px-4 py-4">
      <div class="col-start-1 col-span-5 row-start-1 row-span-6 grid grid-cols-subgrid grid-rows-subgrid">
        <div class="col-start-1 col-span-4 row-start-1 row-span-3 text-4.5xl leading-none font-bold mr-10">
          <p>Since 2010, we are partner with the world’s most forward thinking brands and innovators, challenging
            conventions and embrace new technologies, pushing the boundaries of what design can achieve. Our work
            transcends the ordinary, leaving a lasting, positive impact on both ourselves and those we collaborate
            with.</p>
          <p>Devoted to fashion and sport, our journey has naturally aligned us with industry leaders who share our
            vision for a more inspired and impactful future. Together, we craft designs that resonate deeply, shaping
            not just products, but the world around us.</p>
          <br>
          <p>More good, less bad.</p>
        </div>
      </div>
      <div class="col-start-6 row-start-1">
        <porfolio-btn/>
      </div>
      <div class="col-start-5 row-start-3 row-end-3 text-xs">
        Full-service creative firm, <br>
        based in Italy (2010)
      </div>
      <div class="col-start-6 row-start-3 row-span-3 relative">
        <img
            src="../assets/img/studio-white.svg"
            alt="Studio"
        >
      </div>
      <div class="col-start-6 row-start-6 text-sm">
        <about-links/>
      </div>
      <div class="col-start-7 row-start-1 flex justify-end">
        <router-link to="/">
          <img src="../assets/img/logo-sm-white.svg" alt="SF">
        </router-link>
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
