<template>
  <router-link
      :class="`${bgColor} ${txColor}`"
      class="
        text-16px
        text-18px leading-20px
        inline-block rounded-full text-sf-black font-bold py-1 px-5

        ipv14:text-18px ipv14:leading-20px
        ipv14:px-[26px] ipv14:py-[7px]

        xl:uppercase xl:px-8
        xl:text-14px
      "
      to="/portfolio"
  >
    Portfolio
  </router-link>
</template>

<script setup lang="ts">
import {computed} from '@vue/reactivity'

const props = defineProps<{
  theme: string
}>()

const bgColor = computed<string>(() => {
  switch (props.theme) {
    default:
    case 'light':
      return 'bg-sf-black';
    case 'dark':
      return 'bg-sf-white';
  }
}); // 'bg-sf-white'
const txColor = computed<string>(() => {
  switch (props.theme) {
    default:
    case 'light':
      return 'text-sf-white';
    case 'dark':
      return 'text-sf-black';
  }
}); // 'text-sf-black'



</script>

<style scoped lang="scss">
</style>
