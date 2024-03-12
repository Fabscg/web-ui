<template>
  <nav class="w3-sidebar w3-bar-block w3-hide-small w3-center align-center bg-black">
      <img src="../assets/images/profile.jpeg" alt="profile" class="w3-image" style="width:100%;"/>
      <div class="">
        <router-link class="item-link w3-bar-item w3-button w3-padding-large w3-hover-black font-mono" to="/">Home</router-link>
        <router-link class="item-link w3-bar-item w3-button w3-padding-large w3-hover-black font-mono" to="/about">About</router-link>
        <router-link class="item-link w3-bar-item w3-button w3-padding-large w3-hover-black font-mono" to="/projects">Projects</router-link>
        <router-link class="item-link w3-bar-item w3-button w3-padding-large w3-hover-black font-mono" to="/skills">Skills</router-link>
      </div>
   </nav>
     <div class="w3-top w3-hide-large w3-hide-medium sticky top-0">
        <router-link class="w3-bar-item w3-button w3-black font-mono" style="width: 25%;" to="/">Home</router-link>
        <router-link class="w3-bar-item w3-button w3-black font-mono" style="width: 25%;" to="/about">About</router-link>
        <router-link class="w3-bar-item w3-button w3-black font-mono" style="width: 25%;" to="/projects">Projects</router-link>
        <router-link class="w3-bar-item w3-button w3-black font-mono" style="width: 25%;" to="/skills">Skills</router-link>
      </div>
      
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
