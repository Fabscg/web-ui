<template>
  <div class="about py-20 xl:px-[200px] justify-center flex content-center">
    <the-navigation></the-navigation>
    <div class="inline-block md:flex object-center lg:max-w-fit text-white">
      
      <!-- Image -->
      <div class="profile w-[400px] h-[200px] text-white p-15">
        <img
          ref="imageRef"
          src="../assets/images/phographer.jpeg"
          alt="profile"
          class="myself text-center object-center transition-all duration-1000 ease-in-out transform
                 sm:opacity-0 sm:scale-95 sm:translate-y-4
                 md:opacity-100 md:scale-100 md:translate-y-0"
        />
      </div>

      <!-- Paragraph Section -->
      <div
        ref="contentRef"
        class="container bg-black bg-opacity-50 w-[400px] h-[500px] justify-center p-0
               transition-all duration-1000 ease-in-out transform
               sm:opacity-0 sm:translate-y-6
               md:opacity-100 md:translate-y-0"
      >
        <h1 class="text-center w3-jumbo font-cursive font-display">I am Fabi</h1>
        <p class="text-center bg-color-black backdrop-blur-sm px-4 pb-20 font-sans w-[400px] content-center drop-shadow-md">
          People find me to be an upbeat self-motivated team player with excellent
          communication skills. For the past several years, I have worked in
          customer service and hospitality, and have also spearheaded my own
          business. Having held a lifelong affinity for coding and programming, I
          endeavoured to equip myself with the knowledge and skillset to pursue a
          career as a developer. Over the last two years, I independently
          dedicated myself to deepening my studies and experience in web
          development and acquired proficiency in the breadth of programming
          languages. I am a curious and driven individual, and excited for an
          opportunity to specialize in this dynamic industry.
        </p>
      </div> 
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  setup() {
    const contentRef = ref(null)
    const imageRef = ref(null)

    const animateIn = (el, classListToRemove, classListToAdd) => {
      if (el) {
        classListToRemove.forEach(cls => el.classList.remove(cls))
        classListToAdd.forEach(cls => el.classList.add(cls))
      }
    }

    onMounted(() => {
      const isMobile = window.innerWidth < 700
      if (!isMobile) return // Don't animate on desktop

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateIn(imageRef.value, ['opacity-0', 'scale-95', 'translate-y-4'], ['opacity-100', 'scale-100', 'translate-y-0'])
            animateIn(contentRef.value, ['opacity-0', 'translate-y-6'], ['opacity-100', 'translate-y-0'])
            observer.disconnect()
          }
        })
      }, { threshold: 0.1 })

      if (contentRef.value) observer.observe(contentRef.value)
    })

    return {
      contentRef,
      imageRef
    }
  }
}
</script>
<style>
.myself {
  width: 400px;
  height: 500px;
  object-fit: cover;
  border-radius: 100px 0 0 100px;
}
.about {
  padding: 20px auto !important;
}
.container {
  border-radius: 0 100px 100px 0;
  align-items: center;
}
@media screen and (max-width: 700px) {
  .container {
    border-radius: 0 0 100px 100px;
  }
  .myself {
    position: fixed;
    padding: 10px auto;
    width: 400px;
    height: 300px;
    border-radius: 100px 100px 0 0;
    object-fit: cover;
    z-index: -2;
  }
}
</style>