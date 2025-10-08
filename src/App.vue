<template>
  <div id="app" class="min-h-screen bg-gray-700">
    <TheNavigation/>
    <div class="py-12 sm:px-[200px] px-8 text-center">
    <RouterView />
    </div>
    <div class="sticky bottom-0 left-0">
      <Footer />
    </div>
  </div>
</template>
<script>
import TheNavigation from '@/components/TheNavigation.vue'
import { RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    TheNavigation,
    Footer
  }
}
</script>