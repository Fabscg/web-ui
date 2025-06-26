<template>
  <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 px-8 bg-transparent sm:px-12 mb-12">
    <div
      v-for="(project, index) in projects"
      :key="project.id"
      ref="projectRefs"
      class="project-card w3-margin-bottom shadow-gray-200 shadow-xl backdrop-blur-sm bg-black bg-opacity-50
            transition-all duration-700 ease-in-out transform opacity-0 translate-y-4 rounded-md"
    >
      <a :href="project.URL" target="_blank" class="">
        <img :src="project.imageUrl" :alt="project.title" style="width: 100%" class="image hover:animate-pulse rounded-md" />
      </a>
      <div class="w3-container text-white">
        <div class="wrap flex bg-black p-2 justify-between items-center">
          <div class="text-left">
            <b>{{ project.title }}</b>
          </div>
          <div class="justify-end p-2 rounded-full hover:bg-gray-500">
            <a :href="project.github" target="_blank"><i class="fa fa-github fa-2x"></i></a>
          </div>
        </div>
        <div class="sm:text-base text-sm text-base-7">
          <p class="p-2">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '../data.json';
import { onMounted, ref, nextTick } from 'vue';

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
        // Animate after data loaded
        nextTick(() => this.observeCards());
      });
  },
  methods: {
    observeCards() {
      const cards = this.$refs.projectRefs;
      if (!cards || !Array.isArray(cards)) return;

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.remove('opacity-0', 'translate-y-4');
            el.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(el); // Animate once
          }
        });
      }, { threshold: 0.1 });

      cards.forEach(card => {
        if (card) observer.observe(card);
      });
    }
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
