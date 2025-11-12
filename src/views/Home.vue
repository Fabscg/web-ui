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
   
  </main>
</template>

<script>
export default {
  data() {
    return {
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
      charIndex: 0
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
