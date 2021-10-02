<template>
  <v-container>
    <h1>{{ pageTitle }}</h1>
    <v-row class="row py-8">
      <v-col class="child-flex" cols="4" align-self="center">
        <h2>{{ newsType }}</h2>
        <img v-bind:src="newsImg" />
      </v-col>
      <v-col class="child-flex" cols="8">
        <h4>{{ newsDate }}</h4>
        <h2>{{ newsTitle }}</h2>
        <p>{{ newsParagraphOne }}</p>
        <p>{{ newsParagraphTwo }}</p>
        <p>{{ newsParagraphThree }}</p>
      </v-col>
    </v-row>
  </v-container>
</template> 

<script>
export default {
  name: "NewsOne",
  data() {
    return {
      pageTitle: "Noticias",
      newsType: "ACTUALIDAD",
      newsImg: require("../../assets/img/IMG-NOTICIA-Uno.png"),
      newsDate: "25-08-2021",
      newsTitle:
        "Desarrollos 3|45 prestará sus servicios a una importante empresa de calzado",
      newsParagraphOne:
        "La empresa de zapatos y accesorios Mussi ha contratado los servicios de Desarrollos 3|45 para implementar una página intranet que facilite el trabajo a sus vendedores. Esta página debe filtrar la información del inventario de zapatos que se encuentra en la bodega por talla, color, referencia, mostrar  una foto del zapato que se esta buscando y si el producto se encuentra en oferta. La búsqueda también debe tener la opción de mostrar si el producto se encuentra disponible en otras tiendas de la ciudad o el país en caso que no se encuentre en la tienda respectiva.",
      newsParagraphTwo:
        "Para Mussi el desarrollo de este servicio representa una gran ayuda ya que el vendedor usando una tablet podrá ofrecer una atención mucho más eficiente especialmente para los clientes cuya talla de zapato recae en la categoría de lo que  se llaman “las puntas” y para las cuales no se produce la misma cantidad de zapatos que las tallas promedio. Así el vendedor no tendrá que ir a la bodega a revisar si el producto se encuentra en el inventario, sino que podrá revisar en tiempo real el inventario desde la tablet y ofrecerle al cliente inclusive otras opciones de lo que hay disponible en el inventario en caso que no se encuentre el producto que se está buscando.",
      newsParagraphThree:
        "Indudablemente es una inversión en la que se gana por partida doble, además  de permitir al vendedor prestar un mejor servicio al cliente, esto reflejará un aumento en la ventas para las tiendas Mussi.",
    };
  },
};
</script>


<style>
</style>