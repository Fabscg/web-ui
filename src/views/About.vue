<template>
  <div class="about content-center text-white flex justify-center grid">
    <the-navigation></the-navigation>
    <div class="lg:flex block object-center grid">
      <div class=" w-full text-white p-15">
        <img
        src="../assets/images/myself.jpeg"
        alt="profile"
        class="myself text-center sm:h-full"
      />
      </div>
     
       <div class="container bg-black bg-opacity-50 w-[500px] h-[500px] justify-center hover:animate-bounce">
        <h1 class="text-center w3-jumbo font-cursive font-display">I am Fabi</h1>
          <p class="text-center px-5 font-sans w-[500px] content-center h-fit">
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
export default {
  setup() {
    
  },
}
</script>
<style>
.myself{
  width:500px;
  height:500px;
  object-fit: cover;
  border-radius: 100px 0 0 100px;
}
.container{
  border-radius: 0 100px 100px 0;
  align-items:center;
  /* background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 118, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  ); */
}
</style>
