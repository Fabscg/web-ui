<template>
  <div id="app" class="">
    <TheNavigation/>
    <div class="py-12 lg:pl-[200px] p-10 text-center">
    <RouterView />
    </div>
    <div class="sticky bottom-0 left-0">
      <Footer />
    </div>
  </div>
</template>
<script>
import TheNavigation from '@/components/TheNavigation.vue'
import { RouterView, RouterLink } from 'vue-router'
import router from '@/router'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    TheNavigation,
    Footer
  }
}
</script>