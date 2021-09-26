<template>
  <v-app>
    <v-navigation-drawer color="#515e7b" v-model="drawer" dark app>
      <Nav></Nav>
    </v-navigation-drawer>

    <v-app-bar dark prominent src="../src/assets/IMG-SLIDE-Desarrollo.jpg" app>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        ><h1>{{ title }}</h1></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      drawer: false,
      title: "Desarrollos|345",
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
