<template>
<v-card width="600" class="mx-auto mt-5">
  <v-card-text>
    <v-card-title>
        <h1 class="display-1">Nuevo Usuario</h1>
      </v-card-title>
  <v-form @submit.prevent="nuevoUsuario()">
    <v-text-field
      v-model="atributos.nombre"
      :counter="20"
      label="Nombre"
      required
    ></v-text-field>  

    <v-text-field
      v-model="atributos.apellido"
      label="Apellido"
      >
    </v-text-field>
    <v-text-field
      v-model="atributos.correo"
      :rules="emailRules"
      label="Email"
      
    ></v-text-field>
    <v-text-field
      v-model="atributos.contraseña"
      :rules="emailRules"
      label="Contraseña"
      
    ></v-text-field>
 <v-btn
      color="success"
      class="mr-4"
      type="submit"      
    >
      Enviar Registro
    </v-btn>
  </v-form>
  </v-card-text>
  </v-card>
</template>
<script>
  export default {
    data () {
     
      return {
        Atributos:[],
        atributos:{
          nombre: "",
          apellido: "",
          correo: "",
          contraseña: "",
        },
      }
    },
 
        methods:{

          nuevoUsuario(){
          
            console.log(this.atributos);
            if(!this.atributos.nombre ){
              alert("Registro de usuario satisfactorio");
            }else {
              this.axios
              .post("/nuevo-usuario",this.atributos)
              .then((res)=>{
              this.Atributos.push(res.data);
                alert("Registro de usuario satisfactorio");
              this.atributos.nombre="";
              this.atributos.apellido="";
              this.atributos.correo="";
              this.atributos.contraseña="";
            
            })
            .catch((e)=>{
                console.log(e.respose);

              alert("Error en guardar usuario");

            })




          }
            

        
        }

      }
    }

</script>




