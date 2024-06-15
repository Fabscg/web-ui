<template>
  <div id="your-container-id">
    <div v-for="project in projects" :key="project.id" class="item">
      <a :href="project.URL">
        <img :src="project.imageUrl" :alt="project.title" style="width: 100%" class="image hover:animate-pulse" />
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
        <div class="text-base text-sm text-base-2 backdrop-blur-md blur-sm backdrop-blur-sm bg-gray-500 bg-opacity-50 text-black p-2">
          <p class="p-2">{{ project.description }}</p>
          <button icon="arrow_down" class="rounded bg-white"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json';

export default {
  data() {
    return {
      projects: sourceData.projects
    };
  },
  mounted() {
    fetch('path/to/data.json')
      .then(response => response.json())
      .then(data => {
        this.projects = data.projects;
      })
      .catch(error => console.error('Error fetching data:', error));
  }
};
</script>

<style scoped>
/* Add your styles here */
.item {
  margin-bottom: 20px;
}
img {
  width: 100%;
  max-width: 300px;
}
</style>
