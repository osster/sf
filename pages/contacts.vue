<template>
  <main class="
    h-full container mx-auto bg-sf-light text-sf-black
    lg:min-h-[1024px]
  ">
    <div class="
      h-full grid gap-0
      grid-cols-10 grid-rows-12 px-14px py-14px
      lg:grid-cols-7 lg:grid-rows-12 lg:px-4 lg:py-4
    ">
      <div class="
        col-start-10 row-start-2
        lg:col-start-7 lg:row-start-1 lg:flex justify-end
      ">
        <router-link to="/">
          <img src="../assets/img/logo-sm-black.svg" alt="SF">
        </router-link>
      </div>

      <div class="
        col-start-8 col-span-3 row-start-12
        lg:col-start-6 lg:row-start-5
        lg:flex lg:justify-start lg:items-center
      ">
        <img
            src="../assets/img/studio-black.svg"
            alt="Studio"
        >
      </div>

      <div class="
        leading-none font-bold
        col-start-1 col-span-7 row-start-2 row-span-3 text-21px
        lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-5 lg:text-48px lg:pl-8 lg:pt-4
      ">
      <ul class="mb-8">
        <li>sf@studiofantasti.co</li>
        <li class="underline">(+39) 045 6117 535</li>
      </ul>

      <div class="mb-8">
        Headquarter: Via Antonio<br>
        Meucci 2 - Verona (Italy)
      </div>

      <div>
        Milan: Via Pastrengo 14<br>
        c/o YoRoom, Milano (Italy)
      </div>
    </div>

      <div class="
        font-bold content-center
        col-start-1 col-span-10 row-start-5 text-21px
        lg:col-start-1 lg:col-span-3 lg:row-start-6 lg:text-28px
      ">
        <ul class="
          grid content-start gap-4
          grid-cols-5
          lg:grid-cols-2 lg:mx-8
        ">
          <li class="
            col-start-1 col-span-2
            lg:col-start-1 lg:col-span-1
          ">
            Instagram
          </li>
          <li class="
            col-start-3 col-span-3
            lg:col-start-2 lg:col-span-1
          ">
            Work with us
          </li>
        </ul>
      </div>

      <div class="
        content-center font-bold grid
        col-start-1 col-span-10 row-start-6 row-span-4 grid-cols-5 gap-4 text-21px
        lg:col-start-1 lg:col-span-5 lg:row-start-7 lg:row-span-4 lg:grid-cols-1 lg:gap-4 lg:text-28px
      ">
        <div class="
          col-start-1 col-span-2
          lg:col-start-1 lg:col-span-1 lg:mx-8 lg:mb-6 lg:leading-7
        ">
          Unaforesta Projects:
        </div>
        <ul class="
          col-start-3 col-span-3
          lg:col-start-1 lg:col-span-1 lg:mx-8
        ">
          <li class="underline">Dirilievo</li>
          <li class="underline">Off the Pitch Archive</li>
          <li class="underline">Unaforesta Academy</li>
        </ul>
      </div>

      <div class="
        invisible
        flex items-end text-28px font-bold
        lg:visible
        lg:col-start-1 lg:col-span-10 lg:row-start-11
      ">
        <h1 class="ml-8 mb-8">Contacts</h1>
      </div>

      <div class="
        invisible
        lg:visible
        col-start-6 row-start-1
      ">
        <porfolio-btn class="ml-8"/>
      </div>

      <div class="
        lg:invisible
        visible
        col-start-6 col-span-5 row-start-10 row-span-1
      ">
        <img
            src="../assets/img/mask-horizontal.png"
            alt="Masc"
        >
      </div>

    </div>
  </main>
</template>

<script setup>
import PorfolioBtn from '@/components/PorfolioBtn'
</script>

<style scoped lang="scss">

</style>
