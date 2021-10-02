<template>
  <v-container>
    <v-row class="row py-5">
      <v-col class="child-flex" cols="4" align-self="center">
        <h2>{{ newsType }}</h2>
        <img v-bind:src="newsImg" />
      </v-col>
      <v-col class="child-flex" cols="8">
        <h4>{{ newsDate }}</h4>
        <h2>{{ newsTitle }}</h2>
        <p>{{ newsParagraphOne }}</p>
        <p>{{ newsParagraphTwo }}</p>
      </v-col>
    </v-row>
  </v-container>
</template> 

<script>
export default {
  name: "NewsTwo",
  data() {
    return {
      newsType: "HUMOR",
      newsImg: require("../../assets/img/IMG-NOTICIA-Dos.png"),
      newsDate: "14-09-2021",
      newsTitle: "Los videojuegos no causan violencia, la latencia sí",
      newsParagraphOne:
        "Le gritaste a tu mejor amigo? Peliaste con tu mamá porque cocinó el plato favorito de tu hemano y no el tuyo? Tiraste el joystick por la ventana de tu cuarto y descalabraste al vigilante del edificio? Has experimentado alguna de estas reacciones después de haber jugado alguna partida de videojuego importante en tu vida? Déjame decirte que la mayoría de las veces y para alimentarte tu ego no es tu culpa, simplemente eres una victima más de la &*!@$^ latencia!!!",
      newsParagraphTwo:
        "Si, la latencia ese enemigo oculto que aunque estés en el ranking de los mejores jugadores de videojuegos por internet te hace perder en el momento menos esperado. La latencia causa que en cuestión de milisegundos algunos jugadores permitan realizar jugadas antes que otros lo cual les da ciertas ventajas especialmente en los encuentros cara a cara.  Pues acá te presentamos la mejor opción para mejorar la conexión a internet desde tu casa: Crear un equipo como el del professor de la casa de papel para que estés donde estés te den una conexión exclusiva a internet desde cualquier país del mundo donde te encuentres! Latencia? Quién dijo yo? Y tu que conexión a internet tienes?",
    };
  },
};
</script>


<style>
</style>