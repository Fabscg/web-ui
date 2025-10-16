<template>
  <main class="text-center h-screen overflow-hidden">
    <!-- Background image -->
    <img
      src="/src/assets/images/computerScreen.jpg"
      alt="laptop"
      class="fixed top-0 left-0 lg:w-full w-fit lg:h-auto h-full object-cover opacity-50"
    />

    <!-- Overlay text -->
    <h1
      class="text-[20px] sm:text-[40px] sm:py-12 font-mono drop-shadow-lg bg-black/30 font-extrabold rounded-lg p-8"
    >
      <span class="typed-text text-white">{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
    </h1>

    <!-- Button -->
    <div class="absolute z-10 flex flex-col items-center justify-center h-fit">
      <button
        @click="showModal = true"
        class="mt-6 bg-slate-400 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition"
      >
        View Photos
      </button>
    </div>

    <!-- Photos Modal -->
    <transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-[999]"
      >
        <div
          class="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto p-6 border border-white/20"
        >
          <!-- Close button -->
          <button
            @click="showModal = false"
            class="absolute top-3 right-3 text-white text-3xl font-bold hover:text-red-400 transition"
          >
            ✕
          </button>

          <!-- Grid of photos -->
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center p-4"
          >
            <div
              v-for="photo in photos"
              :key="photo.id"
              class="bg-white/20 rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 shadow-md cursor-pointer"
              @click="enlargePhoto(photo)"
            >
              <img
                :src="photo.src"
                :alt="photo.alt"
                class="w-full h-48 object-cover"
              />
              <p class="text-white text-sm mt-2 mb-2">{{ photo.alt }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Enlarged photo overlay -->
    <transition name="fade">
      <div
        v-if="enlargedPhoto"
        class="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000]"
        @click="closeEnlargedPhoto"
      >
        <transition name="scale">
          <img
            v-if="enlargedPhoto"
            :src="enlargedPhoto.src"
            :alt="enlargedPhoto.alt"
            class="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl border border-white/20 object-contain"
          />
        </transition>
      </div>
    </transition>
  </main>
</template>

<script>
import Photos from "@/views/Photos.vue";

export default {
  data() {
    return {
      Photos,
      showModal: false,
      enlargedPhoto: null,
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "All great projects start with a great idea!",
        "Developer",
        "Coding Enthusiast",
        "Designer",
        "Freelancer",
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
      photos: [
        { id: 1, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2FToronto.jpeg?alt=media&token=d0ccba1c-1e56-4670-9a9d-97bd38050cf6", alt: "Toronto" },
        { id: 2, src: "/src/assets/images/cardinal.jpeg", alt: "Cardinal" },
        { id: 3, src: "/src/assets/images/wasp.jpeg", alt: "Wasp" },
        { id: 4, src: "/src/assets/images/Woodpecker.jpeg", alt: "Woodpecker" },
        { id: 5, src: "/src/assets/images/sunset.jpeg", alt: "Sunset" },
        { id: 6, src: "/src/assets/images/autum.jpeg", alt: "Autumn" },
        { id: 7, src: "/src/assets/images/shapeOfTrees.jpeg", alt: "Pink Sky" },
        { id: 8, src: "/src/assets/images/fullMoon.jpeg", alt: "Full Moon" },
        { id: 9, src: "/src/assets/images/eagle.jpeg", alt: "Sharp-Shinned Hawk" },
        { id: 10, src: "/src/assets/images/dryLeaves.jpg", alt: "Dry Leaves" },
        { id: 11, src: "/src/assets/images/cnTower.jpeg", alt: "CN Tower" },
        { id: 12, src: "/src/assets/images/Cemetery.jpeg", alt: "Cemetery" },
      ],
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      const currentText = this.displayTextArray[this.displayTextArrayIndex];
      if (this.charIndex < currentText.length) {
        this.typeValue += currentText.charAt(this.charIndex++);
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex--;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.displayTextArrayIndex =
          (this.displayTextArrayIndex + 1) % this.displayTextArray.length;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
    enlargePhoto(photo) {
      this.enlargedPhoto = photo;
    },
    closeEnlargedPhoto() {
      this.enlargedPhoto = null;
    },
  },
};
</script>

<style>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scale transition for zoom */
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.3s ease;
}
.scale-enter-from {
  transform: scale(0.8);
}
.scale-leave-to {
  transform: scale(0.8);
}

/* Typing cursor */
.blinking-cursor {
  font-size: 2rem;
  color: #71ff49;
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
