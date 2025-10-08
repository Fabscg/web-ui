<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner md:p-[100px] xl:p-[200px]">

      <!-- Loop through projects -->
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        :class="['carousel-item', { active: index === 0 }]"
        class=""
      >
      <div> 
        
      </div>
        <a :href="project.URL" target="_blank">
          <img
            :src="project.imageUrl"
            :alt="project.title"
            class="d-block w-100 rounded bottom-[100px]"
          />
        </a>
  <div class="sm:d-flex card justify-content-between align-items-center bg-dark bg-opacity-50 p-2 rounded">
    <div class="carousel-caption rounded d-none d-sm-block bg-black bg-opacity-75 backdrop-blur-md max-w-[100%] px-16">

            <h5 class="mt-0 text-white">{{ project.title }}</h5>
            <a :href="project.github" target="_blank" class="btn btn-outline-light btn-sm">
              <i class="fa fa-github fa-lg"></i>
            </a>
          </div>
        </div>
        <div>
          <p class="bg-dark text-white sm:text-lg text-xs - my-[0px] p-8">{{ project.description }}</p>
        </div>
      </div>
    </div>
    <!-- Controls -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const carousel = ref(null)

const scroll = (dir) => {
  if (!carousel.value) return
  const width = carousel.value.clientWidth
  carousel.value.scrollBy({
    left: dir === 'left' ? -width : width,
    behavior: 'smooth'
  })
}
</script>


<script>
import sourceData from '../data.json';

export default {
  data() {
    return {
      projects: sourceData.projects
    }
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
