<template>
  <v-card
              class="mx-auto"
              max-width="400"
              

            >
              <v-img
                class="white--text align-end"
                height="400px"
                :src="team.src"
              >
                
              </v-img>
              
                <v-card-text>
                  <h2 class="font-weight-black">
                    <div>{{team.name}}</div>
                  </h2>
                  
                </v-card-text>
              
                <v-card-subtitle class="font-weight-medium">{{team.rol}}
              </v-card-subtitle>
              
               
              <v-card-text class="font-weight-medium text-justify">
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