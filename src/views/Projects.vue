<template>
  <div
    id="carouselExampleFade"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
    data-bs-interval="4000"
  >
    <div class="carousel-inner pt-4 sm:p-[50px] xl:p-[200px] p-18">

      <!-- Loop through projects -->
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        :class="['carousel-item', { active: index === 0 }]"
      >
        <a :href="project.URL" target="_blank">
          <img
            :src="project.imageUrl"
            :alt="project.title"
            class="md:min-w-[900px] md:w-fit object-cover rounded shadow-lg"
          />
        </a>

        <div class="carousel-caption bg-black bg-opacity-75 backdrop-blur-md p-4">
          <h5 class="font-mono text-xl text-white pb-2">{{ project.title }}</h5>
          <a :href="project.github" target="_blank" class="btn btn-light btn-sm rounded-full">
            <i class="fa fa-github fa-lg"></i>
          </a>
          <p class="w3-hide-small w3-hide-medium font-mono text-white mt-3 text-sm leading-6 sm:text-base ">{{ project.description }}</p>
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

<script>
import sourceData from '../data.json'

export default {
  data() {
    return {
      projects: sourceData.projects,
    }
  },
  mounted() {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => {
        this.projects = data.projects
      })
  },
}
</script>

<style scoped>
/* Smooth fade override */
.carousel-fade .carousel-item {
  opacity: 0;
  transition: opacity 1s ease-in-out; /* adjust duration as needed */
}

.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  opacity: 1;
  z-index: 1;
}

/* prevent jump between slides */
.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  opacity: 0;
  z-index: 0;
}
@media screen and (max-width: 6078px) {
  .carousel-inner {
    min-width: 100% !important;
    font-size: 0.8rem;
    padding: 0;
  }
  
}
</style>
