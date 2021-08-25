<template>
  <v-container fluid>
    <v-row dense justify="center">
      <v-col class="px-0">
        <v-card
          v-for="project in projects"
          :key="project.title"
          class="mx-auto mt-5 pa-2"
          max-width="50rem"
        >
          <v-card-text class="text-center my-4 mx-1 blue-grey--text text--darken-2">
            <h1>{{ project.title }}</h1>
          </v-card-text>

          <v-carousel height="400" class="text-center mb-4">
            <v-carousel-item
              v-for="(picture, i) in project.pictures"
              :key="i"
              :src="require('../assets/projects-images/' + picture.src)"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
            ></v-carousel-item>
          </v-carousel>

          <v-card-text class="text-center mb-2">
            <h3>{{ project.about }}</h3>
          </v-card-text>

          <v-card-text class="text-center mb-4">
            <span
              v-for="(language, i) in project.languages"
              :key="i"
              class="mx-2"
              style="
                font-size: 1.15em;
              "
            >
              {{ language }}
            </span>
          </v-card-text>

          <v-divider class="mx-4 mb-2"></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-if="project.link"
                  icon
                  x-large
                  color="blue-grey darken-2"
                  class="mr-3"
                  :ripple="false"
                  :href="project.link"
                  target="_blank"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-open-in-new</v-icon>
                </v-btn>
              </template>
              <span>External Link</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-if="project.codeLink"
                  icon
                  x-large
                  color="blue-grey darken-2"
                  :ripple="false"
                  :href="project.codeLink"
                  target="_blank"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-code-json</v-icon>
                </v-btn>
              </template>
              <span>Code Repository</span>
            </v-tooltip>

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
            src: "jaxium/jaxium-site-home.png",
          },
          {
            src: "jaxium/jaxium-home.png",
          },
          {
            src: "jaxium/jaxium-profile.png",
          },
          {
            src: "jaxium/jaxium-messages.png",
          },
        ],
        about:
          "My senior project for my degree. It is a small-scale social network.",
        languages: ["MongoDB", "expressJS", "Vue.js + Vuetify", "Node.JS"],
        link: "http://ec2-52-53-58-204.us-west-1.compute.amazonaws.com:3000/",
        codeLink: "https://github.com/jacksonlauder/jaxium-social-network",
      },
      {
        title: "Application Connector Catalog",
        pictures: [
          {
            src: "connector-catalog/connector-catalog.png",
          },
          {
            src: "connector-catalog/connector-catalog-2.png",
          },
        ],
        about:
          "I was tasked with refactoring this site. I refactored it by limiting server calls and filtering the connectors.",
        languages: ["jQuery", "XSLT"],
        link: "http://catalog.netiq.com/ncarest/displayCatalog",
      },
    ],
  }),
};
</script>
