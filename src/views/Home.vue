<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="(icon, index) in icons"
        :key="index"
        cols="4"
        class="d-flex child-flex"
      >
        <v-img :src="icon" max-width="200" aspect-ratio="1"></v-img>
      </v-col>
    </v-row>
  </v-container>
  <!-- <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
  ></v-parallax> -->
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
        icon: "https://img.icons8.com/color/240/000000/angularjs.png",
      },
    ],
  }),
};
</script>
