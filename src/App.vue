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
      <account-button @open-login="showLogin = true"></account-button>

      <!-- <v-menu left bottom>
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
      </v-menu> -->
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
    <v-dialog v-model="showLogin" persistent max-width="400">
            <login @login-success="showLogin = false"></login>
    </v-dialog>
  </v-app>

</template>

<script>
import AccountButton from './components/AccountButton.vue';
import Login from './components/Login.vue';
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
    AccountButton,
    Login,
  },
  data: () => ({
      showLogin: false,
      drawer: true,
      title: "Desarrollos|345",
    }),
  computed: {
      username() {
        return sessionStorage.getItem("username");
      },
    },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
