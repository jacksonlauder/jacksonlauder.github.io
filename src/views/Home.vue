<template>
  <v-container fluid>
    <v-card class="mb-4" flat>
      <v-img :src="require('../assets/DSC_0302.png')" :aspect-ratio="16 / 9">
        <div class="d-flex glass-div justify-center mx-auto mt-1">
          <v-card-text>
            <span
              class="white--text font-weight-thin text-center intro-text-hello"
            >
              Hey there, I'm Jackson
            </span>

            <span
              class="
                blue-grey--text
                text--lighten-3
                font-weight-light
                text-center
                intro-text-computer
              "
            >
              Computer Scientist
            </span>
          </v-card-text>
        </div>
      </v-img>
    </v-card>

    <v-card flat>
      <v-img
        dark
        :src="require('../assets/artwork_home.png')"
        max-height="646"
        :aspect-ratio="16 / 9"
      >
        <div class="d-flex glass-2-div justify-center ma-1">
          <!-- <v-row>
            <v-card-text>
              <span
                class="
                  white--text
                  font-weight-thin
                  text-center
                  intro-text-hello
                "
              >
                What I'm good at:
              </span>
            </v-card-text>
          </v-row> -->

          <v-row class="ma-2">
            <v-col
              v-for="(icon, index) in icons"
              :key="index"
              cols="3"
              class="d-flex child-flex justify-center"
            >
              <v-img :src="icon.icon" max-width="100"></v-img>
            </v-col>
          </v-row>
        </div>
      </v-img>
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
