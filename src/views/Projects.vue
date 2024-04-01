<template>
  <div class="md:columns-2 lg:columns-3 text-center bg-white bg-opacity-50">
    <div
      :key="project.id"
      v-for="project in projects"
      class="w3-margin-bottom inline-block lg:p-8 my-4 p-2 py-8"
    >
    <a :href="project.URL"><img
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
          <p>{{ formattedBody }}</p>
          <button @click="showingFullText = !showingFullText">
            Read {{ showingFullText ? "More" : "More" }}
          </button>
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
      showingFullText: false,
      description: ""
    };
  },
    computed: {
    formattedBody() {
      if (this.showingFullText) {
        return this.description;
      }

      return `${this.description.slice(0, 20).trim()}...`;
    }
  }
};
</script>
<style>
.w3-container {
  padding: 20px !important;
  border-radius: 10px;
}
</style>
