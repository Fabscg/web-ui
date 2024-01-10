<template>
  <div>
    <navigation></navigation>
  </div>
  <div
    id="about"
    class="bg-black z-40 color-white font-mono text-xl inline-flex w3-hide-large"
  >
    <p>
      People find me to be an upbeat self-motivated team player with excellent
      communication skills. For the past several years, I have worked in
      customer service and hospitality, and have also spearheaded my own
      business. Having held a lifelong affinity for coding and programming, I
      endeavoured to equip myself with the knowledge and skillset to pursue a
      career as a developer. Over the last two years, I independently dedicated
      myself to deepening my studies and experience in web development and
      acquired proficiency in the breadth of programming languages. I am a
      curious and driven individual, and excited for an opportunity to
      specialize in this dynamic industry.
    </p>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Navigation from './Navigation..vue'
export default defineComponent({
    name: 'About',
    components: {
        Navigation
    },
    setup() {
        
    },
})
</script>

