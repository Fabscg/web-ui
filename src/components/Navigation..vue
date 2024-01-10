<template>
  <div class="bg-black text-white">
    <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-hide-medium  w3-center pt-10">
 <nav
      v-for="item in navbarItems"
      :key="item.name"
      class="block align-center font-mono text-2xl p-5 w3-button w4-padding-large"
    >
      <a href="item.link" class="justify-around">
        {{ item.name }}
      </a>
      <font-awesome-icon class="text-right" :icon="item.icon" />
    </nav>
</nav>
<div v-for="item in navbarItems" :key="item.name" class="w3-top relative font-mono text-xl inline-flex w3-hide-large" style="width:25%;" id="myNavbar">
  <div class="w3-center w3-bar w3-black w3-hover-opacity-off">
    <a href="item.link" class="">{{item.name}}</a>
  </div>
</div>

    <header class="text-center w3-padding-large z-50 pt-20" id="home">
       <h1 class="font-cursive font-display color-white bg-black w3-jumbo">Web UI</h1>
      <h2 class="font-mono text-xl">Welcome to Fabi's portfolio.</h2>
      <img
        src="../assets/images/Programing .webp"
        alt="coding"
        class="object-cover object-center bg-black"
        width="1108"
        height="full-height"
      />
    </header>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import image from "../assets/images/Programing .webp";
export default defineComponent({
  name: "Navigation",
  methods: {
    scrollIntoView(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  setup() {
    return {
      showMenu: ref(false),
      icon: ref([""]),
      image: image,
      navbarItems: [
        { name: "Home", link: "#home", icon: ["fas", "house"] },
        { name: "About", link: "#about", icon: ["fas", "user"] },
        { name: "Skills", link: "#skills", icon: ["fas", "tools"] },
        { name: "Portfolio", link: "#portfolio", icon: ["fas", "briefcase"] },
      ],
    };
  },
});
</script>
<style scoped>
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
li {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
}
</style>
