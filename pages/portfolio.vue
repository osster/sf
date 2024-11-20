<template>
  <BgVideo src="video/rain.mp4"/>

  <main
      class="
        relative container bg-sf-black text-sf-white mx-0 h-full w-full
        xl:mx-auto
      "
      :class="isMobile ? 'landscape:h-auto landscape:min-h-[1024px]' : ''"
  >
    <div class="
      h-full grid
      grid-cols-10 grid-rows-12 gap-0 px-14px py-14px
      xl:grid-cols-7 xl:grid-rows-7 xl:px-4 xl:py-4
    ">
      <div class="
        col-start-10 row-start-1
        ipv12:row-start-2 ipv12:row-start-2
        xl:col-start-7 xl:row-start-1 xl:flex justify-end
      ">
        <router-link to="/">
          <img src="../assets/img/logo-sm-white.svg" alt="SF">
        </router-link>
      </div>

      <div class="
        font-bold
        col-start-1 col-span-8 row-start-1 row-span-4 text-18px
        ipv12:row-start-2 ipv12:row-span-3 ipv12:text-21px
        xl:col-start-1 xl:col-span-5 xl:row-start-1 xl:row-span-4 xl:mr-10 xl:text-80px xl:leading-63px
      ">
        <p class="mb-8 xl:mb-0">
          To download our
          portfolio, please
          enter your email
          address in the form.
        </p>
        <p>
          The file will be sent
          directly to your
          inbox.
        </p>
      </div>

      <div class="
        col-start-1 col-span-10 row-start-5
        ipv12:row-start-5
        xl:col-start-1 xl:row-start-5 xl:col-span-3
        xl:flex flex-col justify-center items-start
      ">
        <email-form/>
      </div>

      <div class="
        col-start-1 col-span-4 row-start-8 row-span-3
        xl:invisible
      ">
        <img src="../assets/img/mask-vertical.png" alt="Mask">
      </div>
    </div>
  </main>
</template>

<script setup>
import BgVideo from '@/components/BgVideo'

import EmailForm from '@/components/EmailForm'
const { isMobile } = useDevice()
</script>

<style scoped lang="scss">

</style>
