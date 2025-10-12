<template>
    <div>
      <!-- Grid of images -->
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center p-4"
      >
        <div
          v-for="(item, index) in photos"
          :key="item.id"
          class="bg-white/20 rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 shadow-md backdrop-blur-sm border border-white/10 cursor-pointer"
          @click="openImage(index)"
        >
          <img
            :src="item.src"
            :alt="item.alt"
            class="w-full h-[180px] object-cover transition-opacity duration-700 hover:opacity-80"
          />
          <div class="text-center p-2 text-white font-semibold capitalize">
            {{ item.alt }}
          </div>
        </div>
      </div>
  
      <!-- Enlarged Image Lightbox -->
      <transition name="fade">
        <div
          v-if="activeIndex !== null"
          class="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[1000]"
          @click.self="closeImage"
        >
          <button
            class="absolute top-5 right-8 text-white text-4xl font-bold hover:text-red-400 transition"
            @click="closeImage"
          >
            ✕
          </button>
  
          <button
            class="absolute left-8 text-white text-4xl hover:text-gray-400 transition"
            @click.stop="prevImage"
          >
            ‹
          </button>
          <img
            :src="photos[activeIndex].src"
            :alt="photos[activeIndex].alt"
            class="max-w-[90%] max-h-[80vh] rounded-xl shadow-2xl transition-transform duration-500 object-contain"
          />
          <button
            class="absolute right-8 text-white text-4xl hover:text-gray-400 transition"
            @click.stop="nextImage"
          >
            ›
          </button>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: "Photos",
    props: {
      photos: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        activeIndex: null,
      };
    },
    methods: {
      openImage(index) {
        this.activeIndex = index;
      },
      closeImage() {
        this.activeIndex = null;
      },
      prevImage() {
        this.activeIndex =
          (this.activeIndex - 1 + this.photos.length) % this.photos.length;
      },
      nextImage() {
        this.activeIndex = (this.activeIndex + 1) % this.photos.length;
      },
    },
  };
  </script>
  
  <style scoped>
  img {
    transition: opacity 1s ease-in-out;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  