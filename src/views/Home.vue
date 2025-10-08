<template>
  <main class="relative text-center md:h-auto oveflow-hidden">
  
    <TheNavigation class="relative"></TheNavigation>
    <video autoplay muted loop playsinline class="fixed bg-black opacity-25 h-[100%] w-auto top-0 left-0 w-fit object-cover z-2">
      <source src="/src/assets/images/shapes-in-movement.mp4" type="video/mp4"/>
    <div class="z-50 text-white flex flex-col items-center justify-center h-[80vh]">
      <h1 class="text-[40px] sm:py-12 font-mono drop-shadow-lg bg-black/30 font-extrabold rounded-lg p-8">
        <span class="typed-text">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h1>
      <RouterView />
    </div>
  </video>
  <RouterView></RouterView>
  </main>
</template>
<script>
export default {
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "All great projects start with a great idea!",
        "Developer",
        "Coding Enthusiast",
        "Designer",
        "Freelancer"
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = true;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  }
};
</script>
<style>
.blinking-cursor {
  font-size: 3rem;
  line-height: 10px;
  color: #d8dee4;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #71ff49;
  }
}
</style>
