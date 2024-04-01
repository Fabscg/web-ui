<template>
  <div class="inline-block snap-x snap-normal snap-center w-[500px]">
    <div
      :key="project.id"
      v-for="project in projects"
      class="w3-margin-bottom"
    >
    <a :href="project.URL"> <img
        :src="`src/assets/images/${project.image}`"
        alt="project.title"
        style="width: 100%"
        class="image hover:animate-pulse"
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
        <div class="sm:text-base text-sm text-base-7 backdrop-blur-md">
          <p class="p-2">{{ project.description }}</p>
          <button icon="arrow_down" class="rounded bg-white"></button>
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
};
</script>
<style>
.w3-container {
  padding: 20px !important;
  border-radius: 10px;
}
.image{
  box-shadow: 0px 0px 10px 10px rgba(241, 237, 237, 0.75);
}
</style>
