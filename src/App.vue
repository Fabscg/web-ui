<template>
  <div id="app">
    <TheNavigation/>
    <RouterView />
    <Footer />
  </div>
</template>
<script>
import TheNavigation from '@/components/TheNavigation.vue'
import { RouterView, RouterLink } from 'vue-router'
import router from '@/router'
import Footer from '@/views/Footer.vue'

export default {
  name: 'app',
  components: {
    TheNavigation
  }
}
</script>