<template>
 <div class="container columns-3xs text-white justify-center content-center block">
  <div :key="project.id" v-for="project in projects" class="card" style="width: 18rem;">
  <img :src="`/assets/images/${project.image}`" class="card-img-top" :alt="project.title" />
  <div class="card-body">
    <h5 class="card-title">{{project.title}}</h5>
    <p class="card-text">{{project.description}}</p>
  </div>

  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
  </div>
</template>
<script>
import sourceData from "@/data.json"
export default {
  data() {
    return {
      projects: sourceData.projects
    }
  }

}
</script>
