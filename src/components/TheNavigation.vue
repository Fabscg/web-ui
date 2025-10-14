<template>
  <!-- MOBILE SIDEBAR -->
  <nav
    class="sm:w3-collapse w3-sidebar w3-bar w3-card w3-animate-left bg-cyan-600 fixed top-0 left-0 h-full z-[1000] hover:w-[100%]"
    style="width: 250px; z-index: 1000;"
    id="mySidebar"
  >
    <div class="w3-container text-center py-6">
      <a
        href="#"
        class="w3-bar-item w3-button w3-large w3-right w3-hover-grey"
        @click="w3_close"
      >
        <i class="text-white fa fa-remove"></i>
      </a>
      <img
        src="/src/assets/images/profile-min.jpeg"
        class="rounded-full mx-auto my-4"
        style="width:45%;"
      >
    </div>

    <div class="w3-bar-block">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        @click="w3_close"
        class="w3-bar-item drop-shadow-lg w3-bar-item w3-button w3-padding w3-text-white"
      >
        <i :class="link.icon + ' w3-margin-right'"></i>{{ link.label }}
      </a>
    </div>

    <!-- Social icons -->
    <div class="w3-panel w3-large text-slate-300 absolute bottom-0 w-full text-center pb-4">
      <a v-for="social in socials" :key="social.href" :href="social.href" target="_blank">
        <i :class="social.icon + ' p-2 w3-hover-opacity'"></i>
      </a>
    </div>
  </nav>

  <!-- MOBILE OVERLAY -->
  <div class="w3-overlay w3-hide-large" @click="w3_close" id="myOverlay" style="cursor:pointer"></div>

  <!-- DESKTOP HEADER -->
  <header class="static w3-top w3-hide-small w3-hide-medium bg-cyan-600 text-white flex items-center justify-between px-6 py-2 shadow-md fixed z-[500]">
    <!-- Logo / Title -->
    <h1 class="font-bold text-lg">Web UI</h1>

    <!-- Navigation -->
    <div class="nav nav-tabs flex space-x-6 text-sm md:text-base ">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="nav-item drop-shadow-lg w3-bar-item w3-button w3-padding w3-text-white items-center text-white"
      >
        {{ link.label }}
      </a>
    </div>

    <!-- Social icons -->
    <div class="flex space-x-3">
      <a v-for="social in socials" :key="social.href" :href="social.href" target="_blank">
        <i :class="social.icon"></i>
      </a>
    </div>
  </header>

  <!-- MAIN CONTENT -->
  <main class="pt-24 px-4">
    <div class="text-center">
       <h1 class="font-cursive fixed font-display color-white bg-black w3-jumbo relative inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 md:text-lg bg-white/50 dark:bg-gray-900/60 rounded-lg p-8">
    Web UI
  </h1>
  <h2 class="font-mono text-xl text-white">I am Fabi. Welcome to my page!</h2>
    </div>

    <!-- Hamburger icon (mobile only) -->
    <span class="absolute top-6 left-6 w3-hide-large cursor-pointer z-50" @click="w3_open">
      <i class="fa fa-bars fa-2x text-white"></i>
    </span>
  </main>
</template>

<script setup>
const navLinks = [
  { href: "/home", label: "HOME", icon: "fa fa-home" },
  { href: "/about", label: "ABOUT", icon: "fa fa-user" },
  { href: "/projects", label: "PROJECTS", icon: "fa fa-grip-horizontal" },
  { href: "/skills", label: "SKILLS", icon: "fa fa-tools" },
  { href: "/contact", label: "CONTACT", icon: "fa fa-envelope" }
]

const socials = [
  { href: "https://www.instagram.com/fabcgamboa/", icon: "fa fa-instagram" },
  { href: "mailto:fabiscg79@gmail.com", icon: "fa fa-envelope" },
  { href: "tel:647-823-4713", icon: "fa fa-phone" },
  { href: "https://www.linkedin.com/in/fabicastaneda-software-engineer/", icon: "fa fa-linkedin" },
  { href: "https://github.com/Fabscg", icon: "fa fa-github" }
]
const showPhotos = () => {
  window.location.href = "/home"
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block"
  document.getElementById("myOverlay").style.display = "block"
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none"
  document.getElementById("myOverlay").style.display = "none"
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
background: #283b5e;
background: radial-gradient(circle, rgba(40, 59, 94, 1) 0%, rgba(9, 68, 180, 1) 20%, rgba(37, 37, 82, 1) 52%, rgba(5, 188, 232, 1) 100%, rgba(0, 212, 255, 1) 100%);
}

.w3-button {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease-in-out;
}
@media screen and (max-width: 600px) {
  .w3-button:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  nav {
  list-style-type: none;
background: #283b5e;
background: radial-gradient(circle, rgba(40, 59, 94, 1) 0%, rgba(9, 68, 180, 1) 20%, rgba(37, 37, 82, 1) 52%, rgba(5, 188, 232, 1) 100%, rgba(0, 212, 255, 1) 100%);
}
}
</style>
