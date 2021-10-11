<template>
<nav class="nav-menu">
    <v-row class="nav-item">
        <router-link v-for="link in links" :key="link.name" :to="link.href" class="nav-item-link">
            <v-icon class="nav-item-link__icon">
                {{link.icon}}
            </v-icon>
            <span class="nav-item-link__text">
                {{link.title}}
            </span>
        </router-link>

        <router-link class="nav-item-link">
            <v-icon class="nav-item-link__icon">
                mdi-account
            </v-icon>
            <span class="nav-item-link__text">
                Iniciar sesión
            </span>
        </router-link>
    </v-row>
</nav>
</template>

<style scoped>
.nav-menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.nav-item {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
}

.nav-item-link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    border-right: 2px solid #001c40;
    color: #b9beca;
    text-decoration: none;
    font-size: 1.25em;
    font-weight: 300;
}

.nav-item-link:last-child {
    border-right: none;
}

.nav-item-link__icon {
    padding-right: 6px;
    color: #b9beca !important;
    transition-property: none;
}

.nav-item-link:hover .nav-item-link__icon {
    color: #001c40 !important;
}

.nav-item-link:hover .nav-item-link__text {
    color: #001c40 !important;
    border-bottom: 2px solid #001c40;
}
</style>

<script>
export default {
    name: 'NavMenu',
    data() {
        return {
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
        };
    },
};
</script>
