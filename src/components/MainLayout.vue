<template>
    <div>
        <navigation></navigation>
        <slot></slot>
    </div>
    <template>
        <div cclass="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 z-40"> 

        </div>
    </template>
</template>
<script lang="ts">
export default {
  name: 'MainLayout',
  components: {
   
  },
  data() {
    return {
      
    }
  }
}
</script>