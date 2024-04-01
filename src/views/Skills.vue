<template>
  <div class="skills backdrop-blur-md">
    <h1
      class="text-white text-center font-cursive font-display text-[30px] sm:text-[40px] items-center h-[100%] flex justify-center"
    >
      Programming Languages
    </h1>
    <div class="place-items-center h-auto mx-w-auto grid sm:grid-cols-4 grid-cols-3 text-center justify-between py-12 mb-12">
        <font-awesome-icon label="html" class="icon-language rounded-full fa-3x" color="white" :icon="['fab', 'html5']" />
        <font-awesome-icon label="css" class="icon-language rounded-full fa-3x" color="white" :icon="['fab', 'css3-alt']" />
        <font-awesome-icon label="javascript" class="icon-language rounded-full fa-3x" color="white" :icon="['fab', 'js']" />
        <font-awesome-icon label="react" class="icon-language rounded-full fa-3x" color="white" :icon="['fab', 'react']" />
        <font-awesome-icon label="node" class="icon-language rounded-full fa-3x" color="white" :icon="['fab', 'node']" />
        <font-awesome-icon label="sass" class="icon-language rounded-full fa-3x" color="white" :icon="['fab', 'sass']" />
        <font-awesome-icon label="bootstrap" class="icon-language rounded-full fa-3x" color="white" :icon="['fab', 'bootstrap']" />
        <font-awesome-icon label="database" class="icon-language rounded-full fa-3x" color="white" :icon="['fas', 'database']" />
        <font-awesome-icon label="git" class="icon-language rounded-full fa-3x" color="white" :icon="['fab', 'git']" />
        <font-awesome-icon label="github" class="icon-language rounded-full fa-3x" color="white" :icon="['fab', 'github']" />
        <font-awesome-icon label="gitlab" class="icon-language rounded-full fa-3x" color="white" :icon="['fab', 'gitlab']" />
        <font-awesome-icon label="npm" class="icon-language rounded-full fa-3x" color="white" :icon="['fab', 'npm']" />
        <font-awesome-icon label="vue" class="icon-language rounded-full fa-3x" color="white" :icon="['fab', 'vuejs']" />

    </div>
  </div>
</template>
<script>
export default {
  name: "Skills",
  props:{
    showLabel: false
  },
}
</script>
<style>
.icon-language {
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 118, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    border: 1px solid white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
    margin: 10px;
    padding: 10px;
    border-radius: 50%;
  }
  .icon-language:hover {
    transform: scale(1.1);
}
.icons:hover{
    color:white;
}
</style>