<template>
  <main>
    <TheNavigation></TheNavigation>
    <div
      class="text-white block relative align-center font-mono py-40 px-auto w3-jumbo"
    >
      "All the great projects start with a great idea!"
    </div>
    <RouterView></RouterView>
  </main>
</template>
<script>
import TheNavigation from "../components/TheNavigation.vue";
import { RouterView } from "vue-router";
export default {};
</script>
