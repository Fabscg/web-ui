<template>
   <div>
      <navigation></navigation>
  </div>
</template>
<script>
import Navigation from './components/Navigation..vue'
import About from './components/About.vue'



export default {
  name: 'app',
  components: {
    Navigation,
    About,
  },
  data() {
    return {
      
    }
  }
}
</script>