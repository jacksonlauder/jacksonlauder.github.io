<template>
  <v-app>
    <v-app-bar app dark color="blue-grey darken-3" flat tile>
      <v-spacer></v-spacer>

      <v-btn icon x-large plain :ripple="false" to="/">
        <v-icon class="icon-logo"></v-icon>
      </v-btn>

      <v-btn text plain class="app-bar-links font-weight-regular" :ripple="false" to="/resume">
        <span>Resume</span>
      </v-btn>

      <v-btn text plain class="app-bar-links font-weight-regular" :ripple="false" to="/projects">
        <span>Projects</span>
      </v-btn>

      <v-btn
        icon
        x-large
        plain
        :ripple="false"
        href="https://github.com/jacksonlauder"
        target="_blank"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn
        icon
        x-large
        plain
        :ripple="false"
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
