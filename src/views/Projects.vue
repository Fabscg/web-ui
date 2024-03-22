<template>
  <div class="md:columns-2 lg:columns-3">
    <div
      :key="project.id"
      v-for="project in projects"
      class="w3-margin-bottom p-14"
    >
    <a :href="project.URL"> <img
        :src="`src/assets/images/${project.image}`"
        alt="project.title"
        style="width: 100%"
        class="shadow-lg shadow-cyan-500/50 hover:animate-pulse"
      /></a>
      <div class="w3-container bg-black bg-opacity-50 text-white">
        <div class="wrap flex bg-black p-2 justify-between">
          <p class="text-left">
            <b>{{ project.title }}</b>
          </p>
          <div class="justify-end">
            <a :href="project.github"><i class="fa fa-github fa-2x hover:bg-gray-400 rounded p-1"></i></a>
          </div>
        </div>
        <div class="sm:text-base text-sm text-base-7">
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      projects: sourceData.projects,
    };
  },
  computed: {},
  methods: {
    truncateDescription() {
      const string= this.projects.description
      const maxLength = 20
      const truncatedStr = string.length>maxLength ? str.substring(0, maxLength) + "Read more..." : string
      console.log(truncatedStr);   

    },
  },
};
</script>
<style>
.w3-container {
  padding: 20px !important;
  border-radius: 10px;
}
</style>
