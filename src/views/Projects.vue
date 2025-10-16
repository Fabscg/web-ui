<template>
  <div
    id="carouselExampleFade"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
    data-bs-interval="4000"
  >
    <div class="carousel-inner px-2 sm:px-[50px] xl:px-[200px]">

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
            class="w-full h-auto max-h-[70vh] object-contain rounded-xl shadow-lg mx-auto"
          />
        </a>

        <div class="carousel-caption bg-black/70 backdrop-blur-md p-3 rounded-lg">
          <h5 class="font-mono text-lg sm:text-xl text-white pb-2">
            {{ project.title }}
          </h5>

          <a
            :href="project.github"
            target="_blank"
            class="btn btn-light btn-sm rounded-full"
          >
            <i class="fa fa-github fa-lg"></i>
          </a>

          <p
            class="hidden sm:visible sm:block font-mono text-white mt-3 text-sm sm:text-base leading-6"
          >
            {{ project.description }}
          </p>
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
/* Smooth fade transition */
.carousel-fade .carousel-item {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  opacity: 1;
  z-index: 1;
}

.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  opacity: 0;
  z-index: 0;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .carousel-inner {
    padding: 0 !important;
  }

  .carousel-caption {
    bottom: 5%;
    padding: 0.75rem;
  }

  .carousel-caption h5 {
    font-size: 1rem;
  }

  .carousel-caption p {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }

  img {
    max-height: 60vh;
    object-fit: contain;
  }
}
</style>
