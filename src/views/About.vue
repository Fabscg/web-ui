<template>
  <div class="about py-20 xl:px-[200px] justify-center flex content-center">
    <the-navigation></the-navigation>
    <div class="inline-block md:flex object-center lg:max-w-fit text-white">
      <div class="top-0 sticky profile w-[400px] h-[400px] text-white px-15">
        <img
          src="../assets/images/phographer.jpeg"
          alt="profile"
          class="myself text-center object-center top-80"
        />
      </div>

      <div
        class="container bg-black bg-opacity-50 relative w-[400px] px-8 sm:pb-4 h-fit justify-center bottom-0 bg-black bg-opacity-50 backdrop-blur-lg"
      >
        <h1 class="sm:top-0 text-center w3-jumbo font-cursive font-display">
          I am Fabi
        </h1>
        <p
          class="text-gray-950 dark:text-white dark:text-shadow-2s font-sans w-full item-center drop-shadow-md round-full"
        >
          I’m a motivated and adaptable professional with a background in
          customer service, hospitality, and business management. Over the past
          two years, I’ve focused on advancing my skills in web development and
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
export default {
  name: "About",
  setup() {},
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
