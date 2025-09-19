<template>
 <nav class="w3-sidebar w3-collapse w3-white w3-animate-left flex flex-col justify-between h-full" style="z-index:2 ;width:200px;" id="mySidebar"><br>
  <div class="w3-container text-center">
    <a href="#" @click="w3_close()" class="w3-hide-large w3-right w3-padding w3-hover-grey" title="close menu">
      <i class="text-white fa fa-2x fa-circle-arrow-left"></i>
    </a>
    <img src="/src/assets/images/profile-min.jpeg" style="width:45%;" class="w3-round"><br><br>
  </div>
  <div class="w3-bar-block">
    <a href="/home" @click="w3_close()" class="drop-shadow-lg w3-bar-item w3-button w3-padding w3-text-white"><i class="fa fa-th-large fa-fw fa-home w3-margin-right"></i>HOME</a> 
    <a href="/about" @click="w3_close()" class="drop-shadow-lg w3-bar-item w3-button w3-padding w3-text-white"><i class="fa fa-th-large fa-fw fa-user w3-margin-right"></i>ABOUT</a> 
    <a href="/projects" @click="w3_close()" class="drop-shadow-lg w3-bar-item w3-button w3-padding w3-text-white"><i class="fa fa-th-large fa-briefcase w3-margin-right"></i>PROJECTS</a> 
    <a href="/skills" @click="w3_close()" class="drop-shadow-lg w3-bar-item w3-button w3-padding w3-text-white"><i class="fa fa-tools fa-fw w3-margin-right"></i>SKILLS</a>
  </div>
  <div class="w3-panel w3-large text-slate-300 absolute bottom-0 w-full text-center">
    <a href="https://www.instagram.com/fabcgamboa/"><i class="p-2 fa fa-instagram w3-hover-opacity"></i></a>
    <a href="mailto:fabiscg79@gmail.com"><i class="p-2 fa fa-envelope w3-hover-opacity"></i></a>
    <a href="tel:647-823-4713"><i class="p-2 fa fa-phone w3-hover-opacity"></i></a>
    <a href="https://www.linkedin.com/in/fabicastaneda-software-engineer/"><i class="p-2 fa fa-linkedin w3-hover-opacity"></i></a>
    <a href="https://github.com/Fabscg"><i class="p-2 fa fa-github w3-hover-opacity"></i></a>
  </div>
</nav>
<div class="w3-overlay w3-hide-large w3-animate-opacity" @click="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<div class="w3-main" style="margin-left:200px">
<header id="portfolio" class="inline-block w-full justify-center items-center space-x-3 text-sm font-medium text-gray-700 dark:text-gray-300 md:space-x-12 md:text-lg bg-white/50 dark:bg-gray-900/60 rounded-lg p-3">
  <div to="/" class="text-center w3-padding-medium z-40" id="home">
  <h1 class="font-cursive font-display color-white bg-black w3-jumbo relative inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 md:text-lg bg-white/50 dark:bg-gray-900/60 rounded-lg p-8">
    Web UI
  </h1>
  <h2 class="font-mono text-xl">I am Fabi. Welcome to my page!</h2>
</div>
    <a href="#"><img src="/src/assets/images/profile-min.jpeg" style="width:65px;" class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"></a>
    <span class="w3-button w3-hide-large w3-xlarge w3-hover-text-grey absolute top-10 left-4" @click="w3_open()"><i class="fa fa-bars"></i></span>
  </header>
    <div class="w3-container">
    <div class="w3-bottombar justify-end flex">
      <button class="w3-button w3-white w3-hide-small"><i class="fa fa-photo w3-margin-right"></i>Photos</button>
      <a class="w3-button w3-white w3-hide-small"><i class="fa fa-map-pin w3-margin-right"></i>Location</a>
    </div>
    </div>
</div>
</template>
<script>
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import Skills from "../views/Skills.vue";
export default {
  name: "TheNavigation",
  props: {
    showSidebar: false
    },
  components: {
    Home,
    About,
    Projects,
    Skills,
  },
  setup() {
    function w3_open() {
      document.getElementById("mySidebar").style.display="block";
    }
    function w3_close() {
      document.getElementById("mySidebar").style.display="none";
    }
    return { w3_open, w3_close }
  }
}
</script>
<style>
.item-link{
  display:block;
  justify-content: space-evenly!important;
  font-size: 10px;
}
nav {
  list-style-type: none;
  background: rgb(131, 58, 180);
  background: #1fccc0;
  background: linear-gradient(90deg, rgba(31, 204, 192, 1) 0%, rgba(220, 89, 222, 1) 65%, rgba(242, 225, 73, 1) 100%);
}

.w3-button {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease-in-out;
}
@media screen and (max-width: 600px) {
  .w3-button:hover {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000 !important;
    cursor: pointer;
  }
}
</style>
