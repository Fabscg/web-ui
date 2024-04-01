<template>
  <main class="text-center md:h-auto">
    <TheNavigation></TheNavigation>
    <div
      class="text-white flex items-center text-center font-mono text-xl sm:text-[40px] type-text"
    ><h1 class="sm:py-12">
      <span class="drop-shadow-lg bg-black/30 font-extrabold typed-text font-mono ">{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </h1>
    <RouterView></RouterView>
    </div>
  </main>
</template>
<script>
import { RouterView } from "vue-router";
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
        this.typeStatus = false;
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
