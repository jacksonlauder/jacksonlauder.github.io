<template>
  <v-app>
    <v-app-bar app color="blue-grey darken-3" flat tile>
      <v-spacer></v-spacer>
      <v-btn icon x-large plain color="white" to="/home">
        <v-icon class="icon-logo"></v-icon>
      </v-btn>

      <v-btn text color="white" class="app-bar-links" plain to="/resume">
        <span>Resume</span>
      </v-btn>

      <v-btn text color="white" class="app-bar-links" plain to="/projects">
        <span>Projects</span>
      </v-btn>

      <v-btn
        icon
        x-large
        plain
        color="white"
        href="https://github.com/jacksonlauder"
        target="_blank"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn
        icon
        x-large
        plain
        color="white"
        href="https://www.linkedin.com/in/jacksonlauder/"
        target="_blank"
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
