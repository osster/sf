<template>
  <main
      class="
        relative container bg-sf-light text-sf-black mx-0 h-full w-full overflow-hidden
        xl:mx-auto
      "
      :class="isMobile ? 'landscape:h-auto landscape:min-h-[1024px]' : ''"
  >
    <div class="
      h-full grid gap-0
      grid-cols-10 grid-rows-12 px-14px py-14px
      xl:grid-cols-7 xl:grid-rows-12 xl:px-4 xl:py-4
    ">
      <div class="
        z-10
        col-start-10 row-start-1
        ipv12:row-start-2
        xl:col-start-7 xl:row-start-1 xl:flex justify-end
      ">
        <router-link to="/">
          <img src="../assets/img/logo-sm-black.svg" alt="SF">
        </router-link>
      </div>

      <div class="
        z-0
         leading-none font-bold
        col-start-1 col-span-12 row-start-1 row-span-3 text-19px
        ipv12:text-21px ipv12:row-start-2 ipv12:row-span-3
        xl:col-start-1 xl:col-span-8 xl:row-start-1 xl:row-span-6 xl:text-48px xl:pl-8 xl:pt-4
      ">
        <div class="
          mb-7
          ipv12:mb-8
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
          ipv12:mb-8
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
        ipv12:text-21px
        xl:col-start-1 xl:col-span-3 xl:row-start-7 xl:text-28px
      ">
        <ul class="
          grid content-start gap-4
          grid-cols-5
          xl:grid-cols-2 xl:mx-8
        ">
          <li class="
            col-start-1 col-span-2
            xl:col-start-1 xl:col-span-1
          ">
            <a
                href="https://www.instagram.com/studiofantastico/"
                target="_blank"
            >Instagram</a>
          </li>
          <li class="
            col-start-3 col-span-3
            xl:col-start-2 xl:col-span-1
          ">
            <a href="#">Work with us</a>
          </li>
        </ul>
      </div>

      <div class="
        content-center font-bold grid
        col-start-1 col-span-10 row-start-6 row-span-3 grid-cols-5 gap-4 text-19px
        ipv12:text-21px
        xl:col-start-1 xl:col-span-5 xl:row-start-8 xl:row-span-4 xl:grid-cols-1 xl:gap-4 xl:text-28px
      ">
        <div class="
          col-start-1 col-span-2
          xl:col-start-1 xl:col-span-1 xl:mx-8 xl:mb-6 xl:leading-7
        ">
          Unaforesta Projects:
        </div>
        <ul class="
          col-start-3 col-span-3
          xl:col-start-1 xl:col-span-1 xl:mx-8
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
        xl:invisible
        visible
        col-start-3 col-span-8 row-start-9 row-span-4 pl-4 pb-8
        ipv12:row-start-9 ipv12:row-span-3 ipv12:pb-0
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
        ipv12:items-center
        xl:col-start-6 xl:row-start-5
        xl:flex xl:justify-start xl:items-center
      ">
        <img
            src="../assets/img/studio-black.svg"
            alt="Studio"
        >
      </div>


      <div class="
        z-10
        invisible
        xl:visible
        col-start-6 row-start-1
      ">
        <porfolio-btn class="ml-8"/>
      </div>

      <div class="
        invisible
        flex items-end text-28px font-bold
        xl:visible
        xl:col-start-1 xl:col-span-10 xl:row-start-12
      ">
        <h1 class="ml-8 mb-8">Contacts</h1>
      </div>

    </div>
  </main>
</template>

<script setup>
import PorfolioBtn from '@/components/PorfolioBtn'

const {isMobile} = useDevice()
</script>

<style scoped lang="scss">

</style>
