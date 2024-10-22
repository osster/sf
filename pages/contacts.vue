<template>
  <main class="h-full container mx-auto bg-sf-light text-sf-black">
    <div class="h-full grid grid-rows-7 grid-cols-7 gap-4 px-4 py-4">
      <div class="col-start-1 col-span-5 row-start-1 row-span-6 grid grid-cols-subgrid grid-rows-subgrid">
        <div class="col-start-1 col-span-4 row-start-1 row-span-3 mx-6 my-6 text-5xl leading-none font-bold">
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

        <div class="col-start-1 col-span-3 row-start-4 grid grid-cols-1 gap-4 content-center">
          <ul class="mx-8 text-2.5xl font-bold grid grid-cols-2 gap-4 content-start">
            <li>Instagram</li>
            <li>Work with us</li>
          </ul>
        </div>

        <div class="col-start-1 col-span-5 row-start-5 row-span-2 grid grid-cols-1 gap-4 content-center">
          <div class="mx-8 mb-6 text-2.5xl leading-7 font-bold">
            Unaforesta Projects:
          </div>
          <ul class="mx-8 text-2.5xl font-bold">
            <li class="underline">Dirilievo</li>
            <li class="underline">Off the Pitch Archive</li>
            <li class="underline">Unaforesta Academy</li>
          </ul>
        </div>
      </div>
      <div class="col-start-1 row-start-7 flex items-center">
        <h1 class="text-2.5xl font-bold ml-8 mb-8">Contacts</h1>
      </div>
      <div class="col-start-6 row-start-1">
        <porfolio-btn/>
      </div>
      <div class="col-start-6 row-start-3 row-span-3 relative">
        <img
            src="../assets/img/studio-black.svg"
            alt="Studio"
            class="absolute"
            style="left: -2rem; top: 3.1rem;"
        >
      </div>
      <div class="col-start-7 row-start-1 flex justify-end">
        <router-link to="/">
          <img src="../assets/img/logo-sm-black.svg" alt="SF">
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import PorfolioBtn from '@/components/PorfolioBtn'
</script>

<style scoped lang="scss">

</style>
