<template>
  <v-container fluid>
    <!-- <v-card class="mb-10">
      <v-img
        dark
        height="500"
        :src="require('../assets/artwork_home.png')"
      ></v-img>
    </v-card> -->
    <v-card class="mb-4">
      <v-img
        :src="require('../assets/DSC_0302.png')"
        :aspect-ratio="16 / 9"
        class="align-center"
      >
        <div class="intro-div">
          <v-card-text>
            <span
              class="white--text font-weight-thin text-center intro-text-hello"
            >
              Hey there, I'm Jackson
            </span>
            <h1
              class="
                blue-grey--text
                text--lighten-3
                font-weight-light
                text-center
                intro-text-computer
              "
            >
              Computer Scientist
            </h1>
          </v-card-text>
        </div>
      </v-img>
    </v-card>

    <v-card>
      <v-card-title class="justify-center mb-4">
        <h2>What I am good at:</h2>
      </v-card-title>
      <v-row class="ma-2">
        <v-col
          v-for="(icon, index) in icons"
          :key="index"
          cols="3"
          class="d-flex child-flex justify-center"
        >
          <v-img :src="icon.icon" max-width="150"></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    icons: [
      {
        icon: "https://img.icons8.com/color/240/000000/html-5--v1.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/css3.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/javascript.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/nodejs.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/vue-js.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/angularjs.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/amazon-web-services.png",
      },
      {
        icon: "https://img.icons8.com/nolan/240/java-coffee-cup-logo.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/c-plus-plus-logo.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/c-sharp-logo.png",
      },
      {
        icon: "https://img.icons8.com/fluent/240/000000/selenium-test-automation.png",
      },
      {
        icon: "https://img.icons8.com/plasticine/240/000000/bash.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/linux.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/mac-logo.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/xcode.png",
      },
      {
        icon: "https://img.icons8.com/fluent/240/000000/visual-studio-code-2019.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/intellij-idea.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/adobe-photoshop.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/adobe-illustrator.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/adobe-xd.png",
      },
    ],
  }),
};
</script>
