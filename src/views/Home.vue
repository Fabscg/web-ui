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
        { id: 2, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2Fcardinal.jpeg?alt=media&token=ebe89806-4da0-4113-9ff7-c4faf3828949", alt: "Cardinal" },
        { id: 3, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2Fwasp.jpeg?alt=media&token=8a6a83ff-d26a-42f3-abfb-f9db9f0c9f14", alt: "Wasp" },
        { id: 4, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2FWoodpecker.jpeg?alt=media&token=eb421d78-d8af-4557-9c82-9c67c65b57e7", alt: "Woodpecker" },
        { id: 5, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2Fsunset.jpeg?alt=media&token=0d408d2f-13e1-434c-aec2-4523c28d34ca", alt: "Sunset" },
        { id: 6, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2Fautum.jpeg?alt=media&token=15df45cf-7de3-4c8b-b969-af27a8f18c5a", alt: "Autumn" },
        { id: 7, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2FshapeOfTrees.jpeg?alt=media&token=b31203bf-0865-4d63-95ce-2d18620e0add", alt: "Pink Sky" },
        { id: 8, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2FfullMoon.jpeg?alt=media&token=421281a2-6b34-4b69-93d3-a5abe7c45ba8", alt: "Full Moon" },
        { id: 9, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2Feagle.jpeg?alt=media&token=c0eff008-bcb9-4890-b189-37cc50c777ea", alt: "Sharp-Shinned Hawk" },
        { id: 10, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2FdryLeaves.jpg?alt=media&token=30e62692-1185-4eac-b53e-6d9079df4dff", alt: "Dry Leaves" },
        { id: 11, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2Fcntower.jpeg?alt=media&token=8f6a326c-2369-4e98-9ee5-f36655a4faea", alt: "CN Tower" },
        { id: 12, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2FCemetery.jpeg?alt=media&token=def8f9b5-1977-4afa-8da7-c53231a7ee5b", alt: "Cemetery" },
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
