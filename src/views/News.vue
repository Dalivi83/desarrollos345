<template>
  <div class="news">
    <h1> Noticias</h1>
  <NewsInfo/>
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
import NewsInfo from "../components/NewsInfo.vue";
  export default {
    components:{
      NewsInfo
    },
    data () {
      return {
        tab: null,
        items: [
          { tab: 'Desarrollos 3|45 prestará sus servicios a una importante empresa de calzado', 
          content: 'La empresa de zapatos y accesorios Mussi ha contratado los servicios de Desarrollos 3|45 para implementar una página intranet que facilite el trabajo a sus vendedores. Esta página debe filtrar la información del inventario de zapatos que se encuentra en la bodega por talla, color, referencia, mostrar una foto del zapato que se esta buscando y si el producto se encuentra en oferta. La búsqueda también debe tener la opción de mostrar si el producto se encuentra disponible en otras tiendas de la ciudad o el país en caso que no se encuentre en la tienda respectiva.'
          
          },          
          { tab: 'Los videojuegos no causan violencia, latencia sí', 
          content: 'Le gritaste a tu mejor amigo? Peleaste con tu mamá porque cocinó el plato favorito de tu hemano y no el tuyo? Tiraste el joystick por la ventana de tu cuarto y descalabraste al vigilante del edificio? Has experimentado alguna de estas reacciones después de haber jugado alguna partida de videojuego importante en tu vida? Déjame decirte que la mayoría de las veces y para alimentarte tu ego no es tu culpa, simplemente eres una victima más de la &*!@$^ latencia!!!' 
          },
          { tab: 'Conozca los ganadores rumbo a ciclo 3 de MisiónTIC y UTP', 
          content: 'Por fin llegó el día tan anhelado. Quienes estabamos en clase pedimos a nuestros profesores que hicieramos una pausa para ver el en vivo de la rifa de los codiciados premios y lograr ser los grandes afortunados de ganarnos el PlayStation 4 o el PC gamer. En el chat se podían leer todo tipo de mensajes como: "sagrado rostro...!!! PC GAMER", "la play es mia", "ya vi mi nueva compu" y algunos compañeros también hacían alusión a su suerte en las rifas: "yo solo me gano turnos extra" o "yo solo me gano los turnos del 24, 31 y Reyes". Todos guardabamos la esperanza de ser el elegido de la tan famosa quinta llamada.'
           },
          { tab: 'Sonreir', 
          content: 'Una imagen dice más que mil palabras. Te invitamos a ver lo que pasa cuando dos desarrolladores trabajan en la misma rama. Cualquier parecido con la realidad es pura coincidencia.Sonreir estimula la liberación de sustancias como dopamina, serotonina y endorfinas, neurotransmisores que contribuyen a aumentar la sensación de bienestar, y reduce los niveles de cortisol, una hormona que se segrega como respuesta al estrés y la ansiedad.'
           },
        ],
      }
    },
  }
</script>

<style>

</style>