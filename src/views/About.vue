<template>
  <div class="about py-20 flex flex-col items-center text-center">
    <the-navigation></the-navigation>

    <button
      @click="showModal = true"
      class="mt-6 bg-slate-400 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition"
    >
      View Photos
    </button>

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
            class="placeholder grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center p-4"
          >
            <div
              v-for="photo in photos"
              :key="photo.id"
              class="placeholder-glow bg-white/20 rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 shadow-md cursor-pointer"
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

    <!-- Main profile section -->
    <div
      class="flex flex-col md:flex-row justify-center items-center gap-0 mt-16 rounded-[100px] overflow-hidden shadow-2xl bg-black/60 backdrop-blur-lg"
    >
      <!-- Image -->
      <div class="w-[400px] h-[500px]">
        <img
          src="../assets/images/phographer.jpeg"
          alt="profile"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Text -->
      <div
        class="flex flex-col justify-center items-center text-white w-[400px] h-[500px] px-8 py-6 bg-black/60"
      >
        <h1 class="text-center w3-jumbo font-display font-cursive mb-4">I am Fabi</h1>
        <p class="text-gray-200 leading-relaxed text-center">
          I’m a motivated and adaptable professional with a background in
          customer service, hospitality, and business management. Over the past
          5 years, I’ve focused on advancing my skills in web development and
          programming. A passionate photographer since age 17, I enjoy combining
          my technical and creative talents by incorporating professional
          imagery into websites to enhance their visual impact and user
          experience.
          </p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import Photos from "@/views/Photos.vue";
export default {
  name: "About",
  data() {
    return {
      Photos,
      showModal: false,
      enlargedPhoto: null,
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
        { id: 13, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2Fchickadee.jpeg?alt=media&token=6828ef3b-2caf-4b6b-bf4f-6f0dcae2c97f", alt: "Chickadee"},
        { id: 14, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2Fkitesurfers.jpeg?alt=media&token=27921390-03c7-4689-a84e-a56d489f7e2c", alt: "kiteboarding"},
        { id: 15, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2Fbike%26city.jpg?alt=media&token=1ae93372-3931-44c0-9cdc-39fc8bd8602f", alt: "City Cycling"},
        { id: 16, src: "https://firebasestorage.googleapis.com/v0/b/web-portfolio-1bf32.appspot.com/o/images%2FBluejay.jpeg?alt=media&token=5f42a910-aff0-472d-9b76-36d58a143c75", alt: "Bluejay"}
      ],
    }
  },
  methods: {
    enlargePhoto(photo) {
      this.enlargedPhoto = photo;
    },
    closeEnlargedPhoto() {
      this.enlargedPhoto = null;
    },
  }
};
</script>
<style>
.myself {
  width: 400px;
  height: 500px;
  object-fit: cover;
  border-radius: 100px 0 0 100px;
}
.about {
  padding: 20px auto !important;
}
.container {
  border-radius: 0 100px 100px 0;
  align-items: center;
  height: 500px;
  padding-top: 20px;
  line-height: 1.6;
}
@media screen and (max-width: 700px) {
  .container {
    border-radius: 0 0 100px 100px;
  }
  .myself {
    padding: 10px auto;
    width: 400px;
    height: 500;
    border-radius: 100px 100px 0 0;
    object-fit: cover;
    z-index: -2;
  }
}
</style>
