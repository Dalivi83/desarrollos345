
<template>
  <v-container>
    <v-row class="row py-5">
      <v-col class="child-flex" cols="4" align-self="center">
        <h2>{{ newsType }}</h2>
        <img v-bind:src="newsImgOne" />
      </v-col>
      <v-col class="child-flex" cols="8">
        <h4>{{ newsDate }}</h4>
        <h2>{{ newsTitle }}</h2>
        <p>{{ newsParagraphOne }}</p>
        <img v-bind:src="newsImgTwo" class="d-block mx-auto py-3" />
        <p>{{ newsParagraphTwo }}</p>
      </v-col>
    </v-row>
  </v-container>
</template> 

<script>
export default {
  name: "NewsFour",
  data() {
    return {
      newsType: "HUMOR",
      newsImgOne: require("../../assets/img/IMG-NOTICIA-Cuatro.jpg"),
      newsDate: "17-09-2021",
      newsTitle: "Sonreir",
      newsParagraphOne:
        "Una imagen dice más que mil palabras. Te invitamos a ver lo que pasa cuando dos desarrolladores trabajan en la misma rama. Cualquier parecido con la realidad es pura coincidencia.",
      newsImgTwo: require("../../assets/img/IMG-NOTICIA-Cuatro_pink_panter.png"),
      newsParagraphTwo:
        "Sonreir estimula la liberación de sustancias como dopamina, serotonina y endorfinas, neurotransmisores que contribuyen a aumentar la sensación de bienestar, y reduce los niveles de cortisol, una hormona que se segrega como respuesta al estrés y la ansiedad.",
    };
  },
};
</script>


<style>
</style>