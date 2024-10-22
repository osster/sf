<template>
  <div>
    YEAR <strong>{{ route?.params?.alias }}</strong><br>
    <router-link to="/">HOME</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped lang="scss">

</style>
