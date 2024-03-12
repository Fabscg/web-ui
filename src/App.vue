<template>
  <div id="app">
    <TheNavigation/>
    <RouterView />
  </div>
</template>
<script>
import TheNavigation from '@/components/TheNavigation.vue'
import { RouterView, RouterLink } from 'vue-router'
import router from '@/router'

export default {
  name: 'app',
  components: {
    TheNavigation
  }
}
</script>