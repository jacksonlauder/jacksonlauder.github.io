<template>
  <v-container fluid>
    <v-card class="pa-8 mx-auto" max-width="65rem">
      <v-img
        :src="require('../assets/Resume_Img.png')"
        :lazy-src="require('../assets/Resume_Img.png')"
        aspect-ratio=".75"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>

      <v-divider class="mx-1 my-7"></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          dark
          depressed
          color="deep-orange darken-4"
          href="/Jackson_Lauder_Resume.pdf"
          target="_blank"
        >
          <v-icon class="mr-1">mdi-download</v-icon>
          Download
        </v-btn>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Resume",
  data: () => ({
    isLoaded: false,
  }),
  methods: {
    onImgLoad() {
      this.isLoaded = true;
    },
  },
};
</script>
