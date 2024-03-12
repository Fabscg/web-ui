
<template>
   <main>
     <TheNavigation></TheNavigation>
        <header class="bg-black text-white">

    <div to="/" class="text-center w3-padding-large z-50" id="home">
       <h1 class="font-cursive font-display color-white bg-black w3-jumbo pt-10">Web UI</h1>
      <h2 class="font-mono text-xl">I am Fabi. Welcome to my page!</h2>
    </div>
  </header>
     <div class="text-white block relative align-center font-mono py-40 px-auto w3-jumbo">
        "All the great projects start with a great idea!"
     </div>
    <RouterView></RouterView>
    </main>
</template>
<script>
import TheNavigation from "../components/TheNavigation.vue";
import { RouterView } from "vue-router";
export default {
  
}
</script>
