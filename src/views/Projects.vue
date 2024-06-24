<template>
  <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 px-8 bg-transparent sm:px-12 mb-12">
    <div v-for="project in projects" :key="project.id" class="w3-margin-bottom shadow-gray-200 shadow-xl">
      <a :href="project.URL" target="_blank" class="">
        <img :src="project.imageUrl" :alt="project.title" style="width: 100%" class="image hover:animate-pulse rounded-md" />
      </a>
      <div class="w3-container bg-black bg-opacity-50 text-white">
        <div class="wrap flex bg-black p-2 justify-between">
          <div class="text-left">
            <b>{{ project.title }}</b>
          </div>
          <div class="justify-end">
            <a :href="project.github" class="fa fa-github fa-2x" target="_blank"></a>
          </div>
        </div>
        <div class="sm:text-base text-sm text-base-7 backdrop-blur-sm">
          <p class="p-2">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '../data.json';

export default {
  data() {
    return {
      projects: sourceData.projects
    };
  },
  mounted() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        this.projects = data.projects;
      });
  }
};
</script>

<style scoped>
.item {
  margin-bottom: 20px;
}
.w3-container{
  width:100%;
}
img {
  width: 100%;
}
</style>
