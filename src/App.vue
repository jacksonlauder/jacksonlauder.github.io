<template>
  <v-app>
    <v-app-bar app dark color="blue-grey darken-3" flat tile>
      <v-spacer></v-spacer>

      <v-btn icon x-large plain :ripple="false" to="/">
        <v-icon class="icon-logo"></v-icon>
      </v-btn>

      <v-btn
        text
        plain
        class="app-bar-links font-weight-regular"
        :ripple="false"
        to="/resume"
      >
        <span>Resume</span>
      </v-btn>

      <v-btn
        text
        plain
        class="app-bar-links font-weight-regular"
        :ripple="false"
        to="/projects"
      >
        <span>Projects</span>
      </v-btn>

      <v-btn icon x-large plain :ripple="false" @click="goToGithub()">
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn icon x-large plain :ripple="false" @click="goToLinkedIn()">
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
    gitHubWindow: null,
    linkedInWindow: null,
  }),

  methods: {
    goToGithub: function () {
      // If a window with the name already exists, then url is loaded into the existing window.
      if (this.gitHubWindow === null || this.gitHubWindow.closed) {
        this.gitHubWindow = window.open(
          "https://github.com/jacksonlauder",
          "gitHubWindow"
        );
      } else {
        this.gitHubWindow.focus();
      }
    },
    goToLinkedIn: function () {
      // If a window with the name already exists, then url is loaded into the existing window.
      if (this.linkedInWindow === null || this.linkedInWindow.closed) {
        this.linkedInWindow = window.open(
          "https://www.linkedin.com/in/jacksonlauder/",
          "linkedInWindow"
        );
      } else {
        this.linkedInWindow.focus();
      }
    },
  },
};
</script>
