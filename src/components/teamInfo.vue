<template>
  <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                :src="team.src"
              >
                
              </v-img>
              <v-card-text class="text--primary">
                <div>{{team.name}}</div>

              </v-card-text>

              <v-card-subtitle class="pb-0">{{team.rol}}
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>{{team.descripcion}}</div>

              </v-card-text>

              
            </v-card>
</template>

<script>
export default {
    props: [
        "team"
    ],
    

}
</script>

<style>

</style>