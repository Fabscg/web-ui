<template>
  <div class="skills backdrop-blur-md my-12">
      <h1
      class="text-white text-center font-cursive font-display text-[30px] sm:text-[40px] items-center h-[100%] flex justify-center mb-12">
      Programming Languages
    </h1>
    <div class="skills-grid mb-12">
      <div
        v-for="icon in icons"
        :key="icon.label"
        class="group relative mt-2"
      >
        <font-awesome-icon
          :label="icon.label"
          :class="['icon-language fa-3x', { 'with-label': showLabel }]"
          :color="icon.color"
          :icon="icon.icon"
        />
        <span class="tooltip text-white font-mono m-0">
          {{ icon.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  props: {
    showLabel: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      icons: [
        { label: 'html', color: 'white', icon: ['fab', 'html5'] },
        { label: 'css', color: 'white', icon: ['fab', 'css3-alt'] },
        { label: 'javascript', color: 'white', icon: ['fab', 'js'] },
        { label: 'react', color: 'white', icon: ['fab', 'react'] },
        { label: 'node', color: 'white', icon: ['fab', 'node'] },
        { label: 'sass', color: 'white', icon: ['fab', 'sass'] },
        { label: 'bootstrap', color: 'white', icon: ['fab', 'bootstrap'] },
        { label: 'database', color: 'white', icon: ['fas', 'database'] },
        { label: 'git', color: 'white', icon: ['fab', 'git'] },
        { label: 'github', color: 'white', icon: ['fab', 'github'] },
        { label: 'gitlab', color: 'white', icon: ['fab', 'gitlab'] },
        { label: 'npm', color: 'white', icon: ['fab', 'npm'] },
        { label: 'vue', color: 'white', icon: ['fab', 'vuejs'] },
      ],
    };
  },
};
</script>

<style>
.skills-title {
  padding:20px;
}
@media (min-width: 640px) {
  .skills-title {
    font-size: 40px;
  }
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  justify-items: center;
  padding: 12px;
  margin-bottom: 12px;
}
@media (min-width: 640px) {
  .skills-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
.icon-language {
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 118, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  border: 1px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  margin: 10px;
  padding: 10px;
  border-radius: 50%;
}
.icon-language:hover {
  transform: scale(1.1);
}
.with-label:hover {
  color: white;
}
.tooltip {
  @apply absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 invisible bg-black text-white text-xs font-semibold px-2 py-1 rounded transition-opacity duration-300;
}
.group:hover .tooltip {
  @apply opacity-100 visible shadow-cyan-500/50;
}
</style>
