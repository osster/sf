<template>
  <div
      class="absolute grid grid-cols-11 gap-1"
      style="bottom: 1rem; left: 1rem;"
      v-if="list.length"
  >
    <router-link v-for="(d, i) in list" :key="i" :to="d.url">
      <img :src="d.thumb" alt="K WAY">
    </router-link>
  </div>
</template>

<script setup>
import { galleries } from '@/content'
import {onMounted, ref} from 'vue'

const list = ref([])

onMounted(() => {
  if (galleries.length) {
    galleries.forEach((i) => {
      list.value.push({
        url: `/s/${i.alias}/`,
        thumb: `/${i.thumb}`,
      })
    })
  }
})
</script>

<style scoped lang="scss">

</style>
