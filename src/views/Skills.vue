<template>
  <div id="skills" class="skills h-full my-12 z-50 text-center">
    <div class="space-y-6 p-6 bg-slate-800 text-white">
  <!-- Design Tool -->
  <div class="justify-center">
    <h2 class="mb-3 font-semibold">| Design Tool |</h2>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 rounded-md border border-yellow-400 text-yellow-400 animate-fadeInRight delay-[0ms]">ADOBE CREATIVE SUITE</span>
      <span class="px-3 py-1 rounded-md border border-lime-400 text-lime-400 animate-fadeInRight delay-[200ms]">CSS</span>
      <span class="px-3 py-1 rounded-md border border-sky-400 text-sky-400 animate-fadeInRight delay-[400ms]">FIGMA</span>
      <span class="px-3 py-1 rounded-md border border-cyan-400 text-cyan-400 animate-fadeInRight delay-[600ms]">UI/UX</span>
      <span class="px-3 py-1 rounded-md border border-lime-400 text-lime-400 animate-fadeInRight delay-[800ms]">GRAPHIC DESIGN</span>
    </div>
  </div>

  <!-- Web Technologies -->
  <div>
    <h2 class="mb-3 font-semibold">| Web Technologies |</h2>
    <div class="flex flex-wrap gap-2 animate-fadeInRight">
      <span class="px-3 py-1 rounded-md border border-cyan-400 text-cyan-400 animate-fadeInRight delay-[0ms]">HTML</span>
      <span class="px-3 py-1 rounded-md border border-lime-400 text-lime-400 animate-fadeInRight delay-[200ms]">CSS</span>
      <span class="px-3 py-1 rounded-md border border-green-400 text-green-400 animate-fadeInRight delay-[400ms]">JAVASCRIPT</span>
      <span class="px-3 py-1 rounded-md border border-yellow-400 text-yellow-400 animate-fadeInRight delay-[600ms]">JQUERY</span>
      <span class="px-3 py-1 rounded-md border border-yellow-400 text-orange-400 animate-fadeInRight delay-[800ms]">VISUAL STUDIO</span>
      <span class="px-3 py-1 rounded-md border border-pink-400 text-pink-400 animate-fadeInRight delay-[1000ms]">REACT JS</span>
      <span class="px-3 py-1 rounded-md border border-teal-400 text-teal-400 animate-fadeInRight delay-[1200ms]">FLUTTER</span>
      <span class="px-3 py-1 rounded-md border border-purple-400 text-purple-400 animate-fadeInRight delay-[1400ms]">VUE</span>
    </div>
  </div>

  <!-- Responsive Design -->
  <div>
    <h2 class="mb-3 font-semibold">| Responsive Design |</h2>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 rounded-md border border-teal-400 text-teal-400 animate-fadeInRight delay-[0ms]">MEDIA QUERIES</span>
      <span class="px-3 py-1 rounded-md border border-pink-400 text-pink-400 animate-fadeInRight delay-[200ms]">BOOTSTRAP</span>
      <span class="px-3 py-1 rounded-md border border-teal-400 text-yellow-400 animate-fadeInRight delay-[400ms]">TAILWIND CSS</span>
      <span class="px-3 py-1 rounded-md border border-teal-400 text-cyan-400 animate-fadeInRight delay-[600ms]">QUASAR</span>
      <span class="px-3 py-1 rounded-md border border-lime-400 text-lime-400 animate-fadeInRight delay-[800ms]">SASS</span>
    </div>
  </div>

  <!-- Version Control -->
  <div>
    <h2 class="mb-3 font-semibold">| Version Control |</h2>
    <div class="flex flex-wrap gap-2 animate-fadeInRight">
      <span class="px-3 py-1 rounded-md border border-yellow-400 text-yellow-400 animate-fadeInRight delay-[0ms]">GIT</span>
      <span class="px-3 py-1 rounded-md border border-lime-400 text-lime-400 animate-fadeInRight delay-[200ms]">GITHUB</span>
      <span class="px-3 py-1 rounded-md border border-lime-400 text-cyan-400 animate-fadeInRight delay-[400ms]">GITLAB</span>
      <span class="px-3 py-1 rounded-md border border-lime-400 text-purple-400 animate-fadeInRight delay-[600ms]">BITBUCKET</span>
      <span class="px-3 py-1 rounded-md border border-lime-400 text-pink-400 animate-fadeInRight delay-[800ms]">NPM</span>
      <span class="px-3 py-1 rounded-md border border-lime-400 text-lime-400 animate-fadeInRight delay-[1000ms]">NODE</span>
    </div>
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
