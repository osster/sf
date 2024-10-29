<template>
  <main class="
    relative container bg-sf-light text-sf-black mx-0 h-full w-full overflow-hidden
    2xl:mx-auto
  ">
    <div class="
      h-full grid gap-0
      grid-cols-10 grid-rows-12 px-14px py-14px
      2xl:grid-cols-7 2xl:grid-rows-12 2xl:px-4 2xl:py-4
    ">
      <div class="
        z-10
        col-start-10 row-start-1
        ipro12:row-start-2
        2xl:col-start-7 2xl:row-start-1 2xl:flex justify-end
      ">
        <router-link to="/">
          <img src="../assets/img/logo-sm-black.svg" alt="SF">
        </router-link>
      </div>

      <div class="
        z-0
        overflow-y-auto leading-none font-bold
        col-start-1 col-span-12 row-start-1 row-span-3 text-19px
        ipro12:text-21px ipro12:row-start-2
        2xl:col-start-1 2xl:col-span-8 2xl:row-start-1 2xl:row-span-6 2xl:text-48px 2xl:pl-8 2xl:pt-4
      ">
        <div class="
          mb-7
          ipro12:mb-8
        ">
          Headquarter: Via Antonio<br>
          Meucci 2 - Verona (Italy)<br>
          <a
            href="https://www.google.com/maps/place/Via+Antonio+Meucci,+2,+37135+Verona+VR/@45.4057529,10.9710904,17z/data=!4m6!3m5!1s0x477f5f8517796861:0xfc3e40d76ea82c04!8m2!3d45.4057475!4d10.9733086!16s%2Fg%2F11b8v6404x?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            class="underline"
          >Go to Google Maps</a>
        </div>

        <ul class="
          mb-7
          ipro12:mb-8
        ">
          <li>sf@studiofantasti.co</li>
          <li class="underline">(+39) 045 6117 535</li>
        </ul>

        <div>
          Secondary Office Via Pastrengo 14<br>
          c/o YoRoom, Milano (Italy)
        </div>
      </div>


      <div class="
        font-bold content-center
        col-start-1 col-span-10 row-start-5 text-19px
        ipro12:text-21px
        2xl:col-start-1 2xl:col-span-3 2xl:row-start-7 2xl:text-28px
      ">
        <ul class="
          grid content-start gap-4
          grid-cols-5
          2xl:grid-cols-2 2xl:mx-8
        ">
          <li class="
            col-start-1 col-span-2
            2xl:col-start-1 2xl:col-span-1
          ">
            <a
                href="https://www.instagram.com/studiofantastico/"
                target="_blank"
            >Instagram</a>
          </li>
          <li class="
            col-start-3 col-span-3
            2xl:col-start-2 2xl:col-span-1
          ">
            <a href="#">Work with us</a>
          </li>
        </ul>
      </div>

      <div class="
        content-center font-bold grid
        col-start-1 col-span-10 row-start-6 row-span-3 grid-cols-5 gap-4 text-19px
        ipro12:text-21px
        2xl:col-start-1 2xl:col-span-5 2xl:row-start-8 2xl:row-span-4 2xl:grid-cols-1 2xl:gap-4 2xl:text-28px
      ">
        <div class="
          col-start-1 col-span-2
          2xl:col-start-1 2xl:col-span-1 2xl:mx-8 2xl:mb-6 2xl:leading-7
        ">
          Unaforesta Projects:
        </div>
        <ul class="
          col-start-3 col-span-3
          2xl:col-start-1 2xl:col-span-1 2xl:mx-8
        ">
          <li class="underline whitespace-nowrap">
            <a
                target="_blank"
                href="https://www.instagram.com/dirilievo?igsh=dDd4ZHByMmduNmpy"
            >
              Dirilievo
            </a>
          </li>
          <li class="underline whitespace-nowrap">
            <a
                target="_blank"
                href="https://www.instagram.com/offthepitch_archive?igsh=ODBwOGhlOGZyeTc1"
            >
              Off the Pitch Archive
            </a>
          </li>
          <li class="underline whitespace-nowrap">
            <a
                target="_blank"
                href="https://www.instagram.com/unaforesta.academy?igsh=aHZyNHh4ZXVwZ3B1"
            >
              Unaforesta Academy
            </a>
          </li>
        </ul>
      </div>

      <div class="
        z-0
        2xl:invisible
        visible
        col-start-3 col-span-8 row-start-10 row-span-4 pl-4 pb-8
        ipro12:row-start-9 ipro12:row-span-3 ipro12:pb-0
        flex justify-end
      ">
        <img
            src="../assets/img/mask-horizontal.png"
            alt="Masc"
        >
      </div>

      <div class="
        col-start-7 col-span-4 row-start-12
        flex items-end
        ipro12:items-center
        2xl:col-start-6 2xl:row-start-5
        2xl:flex 2xl:justify-start 2xl:items-center
      ">
        <img
            src="../assets/img/studio-black.svg"
            alt="Studio"
        >
      </div>


      <div class="
        z-10
        invisible
        2xl:visible
        col-start-6 row-start-1
      ">
        <porfolio-btn class="ml-8"/>
      </div>

      <div class="
        invisible
        flex items-end text-28px font-bold
        2xl:visible
        2xl:col-start-1 2xl:col-span-10 2xl:row-start-12
      ">
        <h1 class="ml-8 mb-8">Contacts</h1>
      </div>

    </div>
  </main>
</template>

<script setup>
import PorfolioBtn from '@/components/PorfolioBtn'
</script>

<style scoped lang="scss">

</style>
