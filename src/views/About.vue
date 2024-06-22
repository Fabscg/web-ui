<template>
  <div class="about sm:pl-[200px] justify-center content-center my-20">
    <the-navigation></the-navigation>
    <div class="inline-block sm:flex object-center lg:max-w-fit text-white bottom-[20px]">
      <div class="profile w-[400px] text-white p-15">
        <img
        src="../assets/images/myself-min.jpeg"
        alt="profile"
        class="myself text-center object-center"
      />
      </div>
     
       <div class="container bg-black bg-opacity-50 w-[400px] h-fit justify-center">
        <h1 class="text-center w3-jumbo font-cursive font-display">I am Fabi</h1>
          <p class="text-center backdrop-blur-sm px-8 sm:pb-20 font-sans w-[400px] content-center drop-shadow-md">
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
  width:400px;
  height:500px;
  object-fit: cover;
  border-radius: 100px 0 0 100px;
}
.about{
  padding:20px auto!important;
}
.container{
  border-radius: 0 100px 100px 0;
  align-items:center;
}
@media screen and (max-width: 700px){
  .container{
  border-radius: 0 0 100px 100px;
  }
  .myself{
  width:400px;
  height:200px;
  border-radius:100px 100px 0 0;
  object-fit: cover;
}
}

</style>
