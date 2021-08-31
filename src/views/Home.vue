<template>
  <v-container fluid>
    <v-sheet color="blue-grey lighten-4" height="90vh" class="d-flex">
      <div class="glass-div ma-auto">
        <p
          class="
            blue-grey--text
            text--darken-1 text-h3
            font-weight-regular
            text-center
            mt-4
          "
        >
          Hey there, I'm
        </p>

        <p
          class="
            blue-grey--text
            text--darken-2 text-h2
            font-weight-medium
            text-center
          "
        >
          Jackson Lauder
        </p>

        <p class="blue-grey--text text--darken-3 text-body-1 text-center px-5">
          Inquisitive, energetic, and hardworking Computer Science specialist
          skilled in organization, leadership, communication, and programming
          logic. Actively pursuing further knowledge and experience of software
          development. Seeking to put proven skills in designing, developing,
          and releasing software.
        </p>
      </div>
    </v-sheet>

    <!-- <v-card class="mb-4" flat>
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
    </v-card> -->
    <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.5,
      }"
      min-height="200"
      transition="fade-transition"
    >
      <v-sheet color="blue-grey lighten-4" height="90vh">
        <div class="glass-div mb-4">
          <p
            class="
              blue-grey--text
              text--darken-1 text-h3
              font-weight-regular
              text-center
              mt-4
            "
          >
            I'm profficient in:
          </p>
        </div>

        <v-img
          dark
          :src="require('../assets/artwork_home.png')"
          max-height="646"
          style="border-radius: 10px"
        >
          <div
            class="d-flex glass-2-div justify-center ma-1"
          >
            <v-row class="ma-2">
              <v-col
                v-for="(icon, index) in icons"
                :key="index"
                cols="3"
                class="d-flex justify-center"
              >
                <v-img :src="icon.icon" :max-width="width"></v-img>
              </v-col>
            </v-row>
          </div>
        </v-img>
      </v-sheet>
    </v-lazy>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    isActive: false,
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
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 75;
        case "sm":
          return 75;
        case "md":
          return 100;
        case "lg":
          return 100;
        case "xl":
          return 100;
      }
    },
  },
};
</script>
