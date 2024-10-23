<template>
  <div
      class="
        fixed gap-1
        flex flex-row
        bottom-10 left-4 right-4 h-20
        lg:absolute
        lg:bottom-4 lg:left-4 lg:right-4 lg:h-16
      "
      v-if="list.length"
  >
    <router-link
        v-for="(d, i) in list"
        :key="i"
        :to="d.url"
    >
      <img
          class="
            w-full max-w-xl rounded-lg
            h-20
            lg:h-16
          "
          :src="d.thumb"
          :alt="d.alt"
      >
    </router-link>
  </div>
</template>

<script setup>
import { galleries } from '@/content'
import {onMounted, ref} from 'vue'

const list = ref([])

onMounted(() => {
  const config = useRuntimeConfig()
  if (galleries.length) {
    galleries.forEach((i) => {
      list.value.push({
        url: `/s/${i.alias}/`,
        alt: i.title,
        thumb: `${config.app.baseURL}${i.thumb}`,
      })
    })
  }
})
</script>

<style scoped lang="scss">

</style>
