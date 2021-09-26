<template>
  <v-list>
    <v-list-item v-for="item in items" :key="item.title" :to="item.page" link>
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { icon: "mdi-home", title: "Inicio", page: "/" },
        { icon: "mdi-laptop", title: "Servicios", page: "/services" },
        { icon: "mdi-newspaper", title: "Noticias", page: "/news" },
        { icon: "mdi-account-multiple", title: "Equipo", page: "/team" },
      ],
    };
  },
};
</script>

<style>
</style>