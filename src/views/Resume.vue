<template>
  <v-container fluid>
    <v-card class="pa-8 mx-auto" max-width="65rem">
      <v-img :src="require('../assets/Resume Jun 2020.png')"></v-img>

      <v-divider class="mx-1 my-7"></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          dark
          depressed
          color="blue-grey darken-2"
          href="/Jackson_Lauder_Resume.pdf"
        >
          <v-icon class="mr-1">mdi-download</v-icon>
          Download
        </v-btn>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
