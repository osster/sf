<template>
  <main class="
    relative container bg-sf-black text-sf-white mx-0 h-full w-full
    2xl:mx-auto
    2xl:min-h-[1024px]
  ">
    <div class="
      h-full grid
      grid-cols-10 grid-rows-12 gap-0 px-14px py-14px
      2xl:grid-cols-7 2xl:grid-rows-7 2xl:px-4 2xl:py-4
    ">
      <div class="
        col-start-10 row-start-1
        ipro12:row-start-2 ipro12:row-start-2
        2xl:col-start-7 2xl:row-start-1 2xl:flex justify-end
      ">
        <router-link to="/">
          <img src="../assets/img/logo-sm-white.svg" alt="SF">
        </router-link>
      </div>

      <div class="
        leading-none font-bold
        col-start-1 col-span-8 row-start-1 row-span-4 text-18px
        ipro12:row-start-2 ipro12:text-21px
        2xl:col-start-1 2xl:col-span-5 2xl:row-start-1 2xl:row-span-4 2xl:mr-10 2xl:text-80px
      ">
        <p class="mb-8 2xl:mb-0">
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
        col-start-1 col-span-10 row-start-4
        ipro12:row-start-5
        2xl:col-start-1 2xl:row-start-6 2xl:col-span-3
        2xl:flex flex-col justify-center items-start
      ">
        <email-form/>
      </div>

      <div class="
        col-start-1 col-span-4 row-start-8 row-span-3
        2xl:invisible
      ">
        <img src="../assets/img/mask-vertical.png" alt="Mask">
      </div>
    </div>
  </main>
</template>

<script setup>
import EmailForm from '@/components/EmailForm'
</script>

<style scoped lang="scss">

</style>
