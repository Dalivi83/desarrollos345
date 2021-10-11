<template>
<div class="container elevation-2"> 
   <h1 class="font-weight-black">
              Registrar Servicio
    </h1> <br>
  <v-form @submit.prevent="agregarServicio()">
    <v-text-field
      v-model="atributos.NombreServicio"
      :counter="20"
      label="Nombre del Servicio"
      required
    ></v-text-field>  

    <v-text-field
      v-model="atributos.Descripcion"
      label="Descripción"
      >
    </v-text-field>
    <v-text-field
      v-model="atributos.DescripcionCorta"
      :rules="emailRules"
      label="Descripción Corta"
      
    ></v-text-field>
  
        <!-- Carga de archivos 
          <template>
          <v-file-input
          accept="image/*"
          label="Imagen Servicio"
          >
        </v-file-input>
        </template> -->

    <v-btn
      color="success"
      class="mr-4"
      type="submit"      
    >
      Enviar Registro
    </v-btn>
  </v-form>
</div>
</template>
<script>
  export default {
    data () {
     
      return {
        Atributos:[],
        atributos:{
          NombreServicio: "",
          Descripcion: "",
          DescripcionCorta:"",
          ImagenPrincipal: "",
          ImagenSecundaria:"",

        },
          
        
      }
     
    },

    methods:{

      agregarServicio(){
        console.log(this.atributos);
        if(!this.atributos.NombreServicio){
          
          this.$swal('Error!',
                    'Falta Nombre del Servicio!',
                    'error');
          
        }
          else if(!this.atributos.Descripcion){
          
          this.$swal('Error!',
                    'Falta registrar la descripción del Servicio!',
                    'error');
          
        }

          else if(!this.atributos.DescripcionCorta){
          
          this.$swal('Error!',
                    'Falta registrar una descripción corta del Servicio!',
                    'error');
          
        }


        else{
          this.axios
          .post("/nuevo-registro",this.atributos)
          .then((res)=>{
          this.Atributos.push(res.data);

          this.$swal('Succes!',
                    'Servicio agregado exitosamente!',
                    'success');

          this.atributos.NombreServicio="";
          this.atributos.Descripcion="";
          this.atributos.DescripcionCorta="";
         
        })

        .catch((e)=>{
          console.log(e.respose);

          alert("Error en guardar servicio")

        })

        }

        
        
      }

    }
  }

</script>