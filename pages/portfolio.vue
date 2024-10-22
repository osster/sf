<template>
  <main class="relative h-full container mx-auto bg-sf-black text-sf-white">
    <div class="h-full grid grid-rows-7 grid-cols-7 gap-4 px-4 py-4">
      <div class="col-start-1 col-span-5 row-start-1 row-span-4 text-7.5xl leading-none font-bold mr-10">
        <p>
          To download our<br>
          portfolio, please<br>
          enter your email<br>
          address in the form.<br>
          The file will be sent<br>
          directly to your<br>
          inbox.
        </p>
      </div>
      <div class="col-start-1 row-start-5 col-span-3 grid grid-cols-1 gap-4 content-center">
        <email-form/>
      </div>
      <div class="col-start-7 row-start-1 flex justify-end">
        <router-link to="/">
          <img src="../assets/img/logo-sm-white.svg" alt="SF">
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import EmailForm from '@/components/EmailForm'
</script>

<style scoped lang="scss">

</style>
