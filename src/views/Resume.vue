<template>
  <v-container fluid>
    <v-card>
      <v-card-title><h2>My Resume</h2></v-card-title>

      <v-divider class="mx-4"></v-divider>

      <v-img :src="require('../assets/Resume Jun 2020.png')"></v-img>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn dark depressed large color="blue-grey darken-2">
          <v-icon class="mr-1">mdi-download</v-icon>
          Download
        </v-btn>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
