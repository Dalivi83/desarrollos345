<template>
  <div class="services">
      <h1>Servicios</h1>
      <br>
    <servicesInfo/>
    <v-card>
     <v-spacer></v-spacer>
    <v-tabs v-model="tab" >
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        
          <v-card-text>{{ item.content }}</v-card-text>
       
      </v-tab-item>
    </v-tabs-items>
 
  </v-card>
  </div>  
</template>

<script>
import ServicesInfo from "../components/ServicesInfo.vue";
  export default {
    components:{
      ServicesInfo
    },
    data () {
      return {
        tab: null,
        items: [
          { tab: 'Desarrollo Web', 
          content: 'Desarrollo de páginas web y aplicativos web funcionales, dinámicos que cumplas con altos estándares de calidad y usabilidad son algunas de las caracteristicas que brindamos a nuestros clientes de manera que cuenten con experiencas de mejora continúa de manera que no se limite a exponer información si no todo lo contrario un lugar en el que se establezca una comunicación e interacción con los usuarios.                                                                                Adicionalmente contamos con un equipo de prófesionales que puede asesorar a nuestros clientes antes, durante y después de nuestros desarrollos web de manera que sientan seguridad con sus resultados finales.                                                                                          Logramos diseños web de la mano de excelentes desarrollos de páginas web.'
          
          },          
          { tab: 'Análisis de datos en Python', 
          content: 'Python es un lenguaje de programación que soporta un desarrollo rápido de aplicaciones de análisis de datos. Es así como uno de nuestros servicios consiste en el análisis, tratado y procesamiento de los datos de manera que podamos orientar a nuestros clientes.                         El análisis de datos se está posicionando cada día de una manera muy rápida debido a que el aprovechamiento de los datos puede ofrecer una ventaja competitiva. Algunas de las funcionalidades del servicio consisten en el manejo, análisis y ordenamiento de la información, recuperación y limpieza de los datos , creación y automatización de informes.                                                  Mediante los servicios de análisis de datos con Python brindamossu simplicidad y conveniencia llegando asi a proporcionar servicios de calidad para la inteligencia artificial.' 
          },
          { tab: 'Normalización y construcción de Bases de Datos', 
          content: 'Los principales activos de la compañía son los datos y la información, es importante contar con bases de datos que cuenten con data limpia es decir que no se encuentre duplicada o que tenga dependencias innecesarias en las tablas de datos es por esto ofrecemos que garantizamos a nuestros cliente un correcto manejo de su información de manera que no existan redundancias y los cruces de la información se den de una manera correcta y se lleve a cabo una mejor gestión de la base de datos.Nuestro servicios de normalización son las formas normales y cada una de estas aplican criterios y reglas que permiten determinar los niveles de vulnerabilidad de los datos.                            A continuación las describiremos, dentro de la primera forma normal es necesario contar con las tablas separadas para cada conjunto de datos relacionados con una llave primaria, es necesario que no existan atributos nulos. La segunda forma debe contar con los requisitos de la primera forma y adicional se debe contar con la gestión de múltiples registro es decir que si existen datos con diferentes localizaciones se deben crear tablas separadas y relacionarlar mediante una clave ajena y por último la tercera forma normal los datos deben estar estructurados de modo que todos los campos dependan de una clave primaria.                                                                                   De esta manera podemos determinar la normalización enla base de datos de nuestro clientes de manera que puedan gestionar y estructurar su información correctamente y su vez determinar el dato único que el valor de agregado con el cuenta nuestros clientes.'
           },
        ],
      }
    },
  }
</script>

<style>

</style>