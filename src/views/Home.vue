<template>
  <v-container fluid>
    <v-card class="mb-10">
      <v-img
        dark
        height="800"
        :src="require('../assets/artwork_home.png')"
      ></v-img>
    </v-card>
    <v-card>
      <v-row>
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
      {
        icon: "https://img.icons8.com/color/240/000000/mac-logo.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/xcode.png",
      },
      {
        icon: "https://img.icons8.com/color/240/000000/linux.png",
      },
    ],
  }),
};
</script>
