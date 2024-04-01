<template>
  <nav class="w3-sidebar w3-bar-block w3-hide-medium w3-hide-small w3-right align-center bg-black" style="z-index:2" id="mySidebar">
      <img src="../assets/images/profile.jpeg" alt="profile" class="w3-image" style="width:100%;"/>
      <div class="grid grid-rows-2">
        <router-link class="item-link w3-bar-item w3-button w3-padding-large w3-hover-black font-mono" to="/">Home
        <font-awesome-icon class="float-right" color="white" :icon="['fas', 'house']" /></router-link>
        <router-link class="item-link w3-bar-item w3-button w3-padding-large w3-hover-black font-mono" to="/about">About
        <font-awesome-icon class="float-right" color="white"  :icon="['fas', 'user']" /></router-link>
        <router-link class="item-link w3-bar-item w3-button w3-padding-large w3-hover-black font-mono" to="/projects">Projects
        <font-awesome-icon class="float-right" color="white"  :icon="['fas', 'briefcase']" /></router-link>
        <router-link class="item-link w3-bar-item w3-button w3-padding-large w3-hover-black font-mono" to="/skills">Skills
        <font-awesome-icon class="float-right" color="white" :icon="['fas', 'screwdriver-wrench']" /></router-link>
      </div>
   </nav>
     <div class="w3-top w3-hide-large fixed top-0 bg-black bg-opacity-85">
        <router-link class="w3-bar-item w3-button font-mono" style="width:25%;" to="/">Home</router-link>
        <router-link class="w3-bar-item w3-button font-mono" style="width:25%;" to="/about">About</router-link>
        <router-link class="w3-bar-item w3-button font-mono" style="width:25%;" to="/projects">Projects</router-link>
        <router-link class="w3-bar-item w3-button font-mono" style="width:25%;" to="/skills">Skills</router-link>
      </div>
       <header class="bg-black text-white">
      <div to="/" class="text-center w3-padding-large z-40" id="home">
        <h1
          class="font-cursive font-display color-white bg-black w3-jumbo pt-10"
        >
          Web UI
        </h1>
        <h2 class="font-mono text-xl">I am Fabi. Welcome to my page!</h2>
      </div>
    </header>
      
</template>
<script>
import routes from "../router";
import { useRoute } from "vue-router";
import { ref } from "vue";
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
}
</script>
<style>
.item-link{
  display:block;
  justify-content: space-evenly!important;
}
nav {
  list-style-type: none;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 118, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
}

.w3-button {
  background-color: transparent;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease-in-out;
}
</style>
