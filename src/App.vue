<template>
  <v-app>
    <v-app-bar app dark color="blue-grey darken-3" flat tile class="flex">
      <v-app-bar-nav-icon
        class="d-md-none"
        absolute
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-btn icon x-large plain :ripple="false" to="/" class="text-center">
        <v-icon class="icon-logo"></v-icon>
      </v-btn>

      <v-btn
        text
        plain
        class="app-bar-links font-weight-regular d-none d-md-flex"
        :ripple="false"
        to="/resume"
      >
        <span>Resume</span>
      </v-btn>

      <v-btn
        text
        plain
        class="app-bar-links font-weight-regular d-none d-md-flex"
        :ripple="false"
        to="/projects"
      >
        <span>Projects</span>
      </v-btn>

      <v-btn
        icon
        x-large
        plain
        :ripple="false"
        @click="goToGithub()"
        class="d-none d-md-flex"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn
        icon
        x-large
        plain
        :ripple="false"
        @click="goToLinkedIn()"
        class="d-none d-md-flex"
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="blue-grey darken-3"
      dark
    >
      <v-list nav>
        <v-list-item
          @click="$router.push('/resume')"
          :ripple="false"
          class="pl-5 mt-5"
        >
          <v-list-item-title>Resume</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          @click="$router.push('/projects')"
          :ripple="false"
          class="pl-5 mt-2"
        >
          <v-list-item-title>Projects</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item @click="goToGithub()" :ripple="false" class="pl-5 mt-2">
          <v-list-item-title><v-icon>mdi-github</v-icon></v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item @click="goToLinkedIn()" :ripple="false" class="pl-5 mt-2">
          <v-list-item-title><v-icon>mdi-linkedin</v-icon></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app dark padless absolute>
      <v-card flat tile class="blue-grey darken-3 text-center flex">
        <v-card-text class="blue-grey--text text--lighten-3">
          <v-row align="center" class="my-3 d-none d-md-flex">
            <v-spacer></v-spacer>
            <v-icon left color="blue-grey lighten-3">mdi-email</v-icon
            >jacksonelauder@gmail.com<v-spacer></v-spacer
            ><v-icon left color="blue-grey lighten-3">mdi-phone</v-icon
            >801-884-3885<v-spacer></v-spacer
            ><v-icon left color="blue-grey lighten-3">mdi-map-marker</v-icon
            >Salt Lake City, Utah<v-spacer></v-spacer>
          </v-row>

          <v-row align="center" class="my-3 d-md-none">
            <v-spacer></v-spacer>
            <v-icon left color="blue-grey lighten-3">mdi-email</v-icon
            >jacksonelauder@gmail.com<v-spacer></v-spacer
            ><v-icon left color="blue-grey lighten-3">mdi-phone</v-icon
            >801-884-3885<v-spacer></v-spacer>
          </v-row>
          
          <v-row align="center" class="my-3 d-md-none">
            <v-spacer></v-spacer>
            <v-icon left color="blue-grey lighten-3">mdi-map-marker</v-icon
            >Salt Lake City, Utah<v-spacer></v-spacer>
          </v-row>
        </v-card-text>

        <v-card-text class="my-3 blue-grey--text text--lighten-3">
          <v-icon left color="blue-grey lighten-3">mdi-copyright</v-icon>
          {{ new Date().getFullYear() }} Jackson Lauder. All rights reserved.
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
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
