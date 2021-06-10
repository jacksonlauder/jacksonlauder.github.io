<template>
  <v-container fluid>
    <v-row dense justify="center">
      <v-col v-for="project in projects" :key="project.title">
        <v-card class="mx-auto mt-5 pa-2" max-width="800">
          <!-- <v-img
            :src="require('../assets/' + project.filename)"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="350px"
          >
            <v-card-title
              v-text="project.title"
              class="justify-center"
            ></v-card-title>
          </v-img> -->

          <v-carousel cycle height="400" hide-delimiters :show-arrows="false">
            <v-carousel-item
              v-for="(picture, i) in project.pictures"
              :key="i"
              :src="require('../assets/' + picture.src)"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
            ></v-carousel-item>
          </v-carousel>

          <v-card-title class="justify-center mb-4">
            <h2>{{ project.title }}</h2>
          </v-card-title>

          <v-card-text class="text-center mb-7">
            <h3>{{ project.about }}</h3>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              icon
              x-large
              color="blue-grey darken-2"
              class="mr-3"
              :ripple="false"
              :href="project.link"
              target="_blank"
            >
              <v-icon>mdi-open-in-new</v-icon>
            </v-btn>

            <v-btn
              icon
              x-large
              color="blue-grey darken-2"
              :ripple="false"
              :href="project.githubLink"
              target="_blank"
            >
              <v-icon>mdi-code-json</v-icon>
            </v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        title: "Jaxium Social Network",
        pictures: [
          {
            src: "jaxium-site-home.png",
          },
          {
            src: "jaxium-home.png",
          },
          {
            src: "jaxium-profile.png",
          },
          {
            src: "jaxium-messages.png",
          },
        ],
        about:
          "A small-scale social network built with MongoDB, expressJS, Vue.js + Vuetify, and Node.JS",
        link: "http://ec2-52-53-58-204.us-west-1.compute.amazonaws.com:3000/",
        githubLink: "https://github.com/jacksonlauder/jaxium-social-network",
      },
    ],
  }),
};
</script>
