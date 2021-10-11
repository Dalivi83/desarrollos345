<template>
<v-app>
    <!-- <v-navigation-drawer color="#515e7b" v-model="drawer" dark app> -->
    <!-- <Nav></Nav> -->
    <!-- </v-navigation-drawer> -->

    <v-app-bar app class="header-wrapper" color="#515e7b" elevation="0" tile height="72">
        <v-container class="header-section">
            <v-row justify="space-between" align="center" no-gutters>
                <v-col cols="auto">
                    <v-toolbar-title>

                        <h1 class="main-title">
                            <router-link class="main-title__link" to="/">
                                {{title}}
                            </router-link>
                        </h1>

                    </v-toolbar-title>
                </v-col>
                <v-col class="d-none d-md-block" cols="auto">

                  <v-row justify="end" align="center">

                    <!-- navigation bar -->
                    <nav-menu cols="auto"></nav-menu>
                    <account-button @open-login="showLogin = true" cols="auto"></account-button>

                  </v-row>

                </v-col>
                <v-col class="d-none d-md-block" cols="auto">
                </v-col>
                <v-col class="d-block d-md-none" cols="auto">

                    <!-- navigation drawer icon -->
                    <v-app-bar-nav-icon class="nav-drawer-icon" large @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                </v-col>

            </v-row>
        </v-container>
    </v-app-bar>

    <!-- navigation drawer -->
    <v-navigation-drawer class="nav-drawer" v-model="drawer" absolute temporary right>
        <v-list dense nav>
            <v-list-item class="nav-drawer-item" v-for="link in links" :key="link.title" link>
                <v-list-item-icon class="nav-drawer-item-icon">
                    <v-icon class="nav-drawer-item__icon">{{ link.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="nav-drawer-item__title">
                        <router-link class="nav-drawer-item__link" :to="link.href">{{ link.title }}</router-link>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <!-- <v-app-bar dark prominent src="../src/assets/IMG-SLIDE-Desarrollo.jpg" app> -->
    <!-- <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        ><h1>{{ title }}</h1></v-toolbar-title
      >

      <v-spacer></v-spacer> -->
    <!-- botón CARMEN OJO -->
    <!-- <account-button @open-login="showLogin = true"></account-button> -->

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
    <!-- </v-app-bar> -->

    <!-- Sizes your content based upon application components -->
    <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
            <!-- If using vue-router -->
            <router-view></router-view>
        </v-container>
    </v-main>

    <!-- footer -->
    <v-footer class="footer-wrapper" padless tile color="#e5e5e5">
        <v-container class="footer-section py-10">
            <v-row justify="space-between" align="stretch">
                <v-col class="footer-block pr-10" cols="12" md="6">
                    <p>Este sitio web fue desarrollado con HTML <i class="fab fa-html5 fa-lg" style="color: #f06529"></i>, CSS <i class="fab fa-css3-alt fa-lg" style="color: #2965f1;"></i>, Vuetify <i class="fab fa-bootstrap fa-lg" style="color: #7494be;"></i> y mucho esfuerzo.</p>

                    <p>Github <i class="fab fa-github fa-lg" style="color: #161b22;"></i>: <a href="https://github.com/Dalivi83/desarrollos345.git" target="_blank" title="Desarrollos 345 | Github"> https://github.com/Dalivi83/desarrollos345.git</a></p>
                </v-col>
                <v-col class="footer-block pl-10" cols="12" md="6">
                    <h2 class="footer-block-title">Contáctanos</h2>
                    <ul class="">
                        <li>Gloria Carvajal <a href="mailto:gloria.carvajal@desarrollos345.com" target="_blank" title="mailto:gloria.carvajal@desarrollos345.com">gloria.carvajal@desarrollos345.com</a>
                        </li>
                        <li>Lida Pineda <a href="mailto:lida.pineda@desarrollos345.com" target="_blank" title="mailto:lida.pineda@desarrollos345.com">lida.pineda@desarrollos345.com</a></li>
                        <li>Carmen Cárdenas <a href="mailto:carmen.cardenas@desarrollos345.com" target="_blank" title="mailto:carmen.cardenas@desarrollos345.com">carmen.cardenas@desarrollos345.com</a>
                        </li>
                        <li>Jenny Veloza <a href="mailto:jenny.veloza@desarrollos345.com" target="_blank" title="mailto:jenny.veloza@desarrollos345.com">jenny.veloza@desarrollos345.com</a></li>
                        <li>Pedro Osorio <a href="mailto:pedro.osorio@desarrollos345.com" target="_blank" title="mailto:pedro.osorio@desarrollos345.com">pedro.osorio@desarrollos345.com</a></li>
                    </ul>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>

    <v-dialog v-model="showLogin" persistent max-width="400">
        <login @login-success="showLogin = false"></login>
    </v-dialog>
</v-app>
</template>

<style scoped>
.header-wrapper {
    border-bottom: 7px solid #001c40 !important;
}

.header-section {
    /* max-width: 1200px; */
    padding: 0 12px;
}

.main-title {
    font-weight: 500;
    line-height: 1.2;
    text-decoration: none;
}

.main-title__link {
    color: #b9beca;
    text-decoration: none;
}

.nav-drawer-icon {
    color: #b9beca !important;
}

.nav-drawer-item-icon {
    margin-right: 12px !important;
}

.nav-drawer-item__icon {
    color: #b9beca !important;
}

.nav-drawer-item__icon:hover {
    color: #001c40 !important;
}

.nav-drawer-item__link {
    color: #b9beca !important;
    text-decoration: none;
    font-weight: 300 !important;
    font-size: 1em !important;
    line-height: 1.2;
}

.nav-drawer-item:hover .nav-drawer-item__icon,
.nav-drawer-item:hover .nav-drawer-item__link {
    color: #001c40 !important;
}

.footer-wrapper {
    border-top: 7px solid #9caab8 !important;
}

.footer-section {
    /* max-width: 1200px; */
    padding: 0 12px;
}

.footer-block {
    border-right: 2px solid #9caab8;
}

.footer-block:last-child {
    border-right: none;
}

@media only screen and (max-width: 400px) {
    .main-title {
        font-size: 1.25rem;
    }
}
</style>

<script>
import AccountButton from './components/AccountButton.vue';
import Login from './components/Login.vue';
// import Nav from "./components/Nav.vue";
import NavMenu from "./components/NavMenu.vue";

export default {
    components: {
        // Nav,
        NavMenu,
        AccountButton,
        Login,
    },
    data: () => ({
        showLogin: false,
        drawer: false,
        title: "Desarrollos 3|45",
        links: [{
                title: 'Inicio',
                href: '/',
                icon: 'mdi-home',
            },
            {
                title: 'Servicios',
                href: '/services',
                icon: '',
            },
            {
                title: 'Noticias',
                href: '/news',
                icon: '',
            },
            {
                title: 'Equipo',
                href: '/team',
                icon: '',
            },
        ],
    }),
    computed: {
        username() {
            return sessionStorage.getItem("username");
        },
    },
    methods: {
        // toggleDrawer() {
        //     this.drawer = !this.drawer;
        // },
    },
};
</script>
