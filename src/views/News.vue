<template>
  
  <v-content>
    <NewsOne />
    <NewsTwo />
    <NewsThree />
    <NewsFour />
  </v-content>

</template>  

<script>
import NewsOne from "../components/News/NewsOne.vue";
import NewsTwo from "../components/News/NewsTwo.vue";
import NewsThree from "../components/News/NewsThree.vue";
import NewsFour from "../components/News/NewsFour.vue";

export default {
  name: "News",

  components: {
    NewsOne,
    NewsTwo,
    NewsThree,
    NewsFour,
  },
};
</script>

<style>

</style>