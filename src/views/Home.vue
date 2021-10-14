<template>
  <v-container name="main-home" fluid>
<!--carrusel-->
  <template>
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </template>

  <div>
    <!-- Sección Servicios -->
    <h2 class="text-md-center py-6">Servicios</h2>
    <v-container>
      <v-row align="">
        <!-- Tarjeta Servicio Uno -->
        <v-col cols="12" md="4">
          <v-card
            class="mx-auto d-flex flex-column"
            justify="space-between"
            max-width="400"
            height="500"
            max-height="500"
            outlined
            tile
          >
            <v-img
              class="white--text align-end flex-grow-0 flex-shrink-0"
              height="200px"
              src="../assets/img/IMG-SERV-Analisis_de_datos.png"
            >
            </v-img>
            <div class="flex-grow-1 flex-shrink-0">
              <v-card-title
                >Normalización y construcción de base de datos</v-card-title
              >
              <v-card-text class="text--primary flex-grow-1">
                <div>
                  Los principales activos de la compañía son los datos y la
                  información, es importante contar con bases de datos que
                  cuenten con data limpia
                </div>
              </v-card-text>
            </div>
            <v-card-actions>
              <v-btn color="primary" to="/services/"> Más información </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Tarjeta Servicio Dos -->
        <v-col cols="12" md="4">
          <v-card
            class="mx-auto d-flex flex-column"
            max-width="400"
            height="500"
            max-height="500"
            outlined
            tile
          >
            <v-img
              class="white--text align-end flex-grow-0 flex-shrink-0"
              height="200px"
              src="../assets/img/IMG-SERV-Bases_de_datos.png"
            >
            </v-img>
            <div class="flex-grow-1 flex-shrink-0">
              <v-card-title>Analísis de datos en Python</v-card-title>
              <v-card-text class="text--primary flex-grow-1">
                <div>
                  Python es un lenguaje de programación que soporta un
                  desarrollo rápido de aplicaciones de análisis de datos. Es así
                  como uno de nuestros servicios consiste en el análisis,
                  tratado y procesamiento de los datos
                </div>
              </v-card-text>
            </div>
            <v-card-actions>
              <v-btn color="primary" to="/services/"> Más información </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Tarjeta Servicio Tres -->
        <v-col cols="12" md="4">
          <v-card
            class="mx-auto d-flex flex-column"
            max-width="400"
            height="500"
            max-height="500"
            outlined
            tile
          >
            <v-img
              class="white--text align-end flex-grow-0 flex-shrink-0"
              height="200px"
              src="../assets/img/IMG-SERV-Desarrollo_webp.png"
            >
            </v-img>
            <div class="flex-grow-1 flex-shrink-0">
              <v-card-title>Desarrollo Web</v-card-title>
              <v-card-text class="text--primary flex-grow-1">
                <div>
                  Los principales activos de la compañía son los datos y la
                  información, es importante contar con bases de datos que
                  cuenten con data limpia
                </div>
              </v-card-text>
            </div>
            <v-card-actions>
              <v-btn color="primary" to="/services/"> Más información </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Sección Noticias -->

    <h2 class="text-md-center py-6">Noticias</h2>

    <!-- Primera fila de noticias -->
    <v-container>
      <v-row py-8>
        <v-col cols="12" md="2">
          <v-img
            class="white--text align-end flex-grow-0 flex-shrink-0"
            src="../assets/img/IMG-NOTICIA-Uno.png"
          >
          </v-img>
        </v-col>
        <v-col cols="12" md="4">
          <h2>Actualidad</h2>
          <h4>
            Desarrollos 3|45 prestará sus servicios a una importante empresa de
            calzado
          </h4>
          <p>
            La empresa de zapatos y accesorios Mussi ha contratado los servicios
            de Desarrollos 3|45 para implementar una página intranet que
            facilite el trabajo a sus vendedores.
          </p>
          <v-btn plain color="primary" to="/newsone"> Noticia Completa </v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <h2>Humor</h2>
          <h4>Los videojuegos no causan violencia, la latencia sí</h4>
          <p>
            Le gritaste a tu mejor amigo? Peliaste con tu mamá porque cocinó el
            plato favorito de tu hemano y no el tuyo?
          </p>
          <v-btn plain color="primary" to="/newstwo"> Noticia Completa </v-btn>
        </v-col>
        <v-col cols="12" md="2">
          <v-img
            class="white--text align-end flex-grow-0 flex-shrink-0"
            src="../assets/img/IMG-NOTICIA-Dosp.jpg"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>

    <!-- Segunda fila de noticias -->
    <v-container>
      <v-row py-8>
        <v-col cols="12" md="2">
          <v-img
            class="white--text align-end flex-grow-0 flex-shrink-0"
            src="../assets/img/IMG-NOTICIA-Tres.png"
          >
          </v-img>
        </v-col>
        <v-col cols="12" md="4">
          <h2>Sociales</h2>
          <h4>Conozca los ganadores rumbo a ciclo 3 de MisiónTIC y UTP</h4>
          <p>
            Por fin llegó el día tan anhelado. Quienes estabamos en clase
            pedimos a nuestros profesores que hicieramos una pausa para ver el
            en vivo de la rifa de los codiciados premios.
          </p>
          <v-btn plain color="primary" to="/newsthree">
            Noticia Completa
          </v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <h2>Humor</h2>
          <h4>Sonreir</h4>
          <p>
            Una imagen dice más que mil palabras. Te invitamos a ver lo que pasa
            cuando dos desarrolladores trabajan en la misma rama.
          </p>
          <v-btn plain color="primary" to="/newsfour"> Noticia Completa </v-btn>
        </v-col>
        <v-col cols="12" md="2">
          <v-img
            class="white--text align-end flex-grow-0 flex-shrink-0"
            src="../assets/img/IMG-NOTICIA-Cuatrop.jpg"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>

    <!-- Sección Equipo -->

    <h2 class="text-md-center py-6">Nuestro Equipo</h2>
    <v-container>
      <v-row>
        <v-col md="auto" cols="12">
          <v-card
            class="d-flex flex-column"
            justify="space-between"
            max-width="210"
            height="600"
            max-height="600"
            outlined
            tile
          >
            <v-img
              class="align-end flex-grow-0 flex-shrink-0"
              height="300px"
              src="../assets/img/IMG-TEAM-Pedro_Osorio.png"
            >
            </v-img>
            <div>
              <v-card-title>Pedro Osorio</v-card-title>
              <v-card-text>
                <div>
                  Pedro Osorio trabaja como administrador de plataformas de
                  educación virtual en Bogotá, ciudad donde vive y trabaja.
                </div>
              </v-card-text>
            </div>
            <div class="flex-grow-1 flex-shrink-0"></div>
            <v-card-actions>
              <v-btn small color="primary" to="/team/"> Más información </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col md="auto" cols="12">
          <v-card
            class="d-flex flex-column"
            justify="space-between"
            max-width="210"
            height="600"
            max-height="600"
            outlined
            tile
          >
            <v-img
              class="align-end flex-grow-0 flex-shrink-0"
              height="300px"
              src="../assets/img/IMG-TEAM-Lida_Pineda.png"
            >
            </v-img>
            <div>
              <v-card-title>Lida Pineda</v-card-title>
              <v-card-text>
                <div>
                  Ingeniera de Sistemas y gestora deproyectos tecnológicos y
                  personales en el Instituto Caro y Cuervo Vive en Bogotá –
                  Colombia.
                </div>
              </v-card-text>
            </div>

            <div class="flex-grow-1 flex-shrink-0"></div>
            <v-card-actions>
              <v-btn small color="primary" to="/team/"> Más información </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col md="auto" cols="12">
          <v-card
            class="d-flex flex-column"
            justify="space-between"
            max-width="210"
            height="600"
            max-height="600"
            outlined
            tile
          >
            <v-img
              class="align-end flex-grow-0 flex-shrink-0"
              height="300px"
              src="../assets/img/IMG-TEAM-Jenny_Veloza.png"
            >
            </v-img>
            <div>
              <v-card-title>Jenny Veloza</v-card-title>
              <v-card-text>
                <div>
                  Ingeniera de Sistemas especialista en Gerencia de Tecnologías
                  de la Información en SGS Colombia. Vive en Bogotá.
                </div>
              </v-card-text>
            </div>

            <div class="flex-grow-1 flex-shrink-0"></div>
            <v-card-actions>
              <v-btn small color="primary" to="/team/"> Más información </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col md="auto" cols="12">
          <v-card
            class="d-flex flex-column"
            justify="space-between"
            max-width="210"
            height="600"
            max-height="600"
            outlined
            tile
          >
            <v-img
              class="align-end flex-grow-0 flex-shrink-0"
              height="300px"
              src="../assets/img/IMG-TEAM-Carmen_Cardenas.png"
            >
            </v-img>
            <div>
              <v-card-title>Carmen Cardenas</v-card-title>
              <v-card-text>
                <div>
                  Carmen Cárdenas es "docente de Informática" en el Colegio
                  Ramón B. Jimeno de la empresa de Acueducto". Vive en Bogotá -
                  Colombia.
                </div>
              </v-card-text>
            </div>
            <div class="flex-grow-1 flex-shrink-0"></div>
            <v-card-actions>
              <v-btn small color="primary" to="/team/"> Más información </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col md="auto" cols="12">
          <v-card
            class="d-flex flex-column"
            justify="space-between"
            max-width="210"
            height="600"
            max-height="630"
            outlined
            tile
          >
            <v-img
              class="align-end flex-grow-0 flex-shrink-0"
              height="300px"
              src="../assets/img/IMG-TEAM-Gloria_Carvajal.png"
            >
            </v-img>
            <div>
              <v-card-title>Gloria Carvajal</v-card-title>
              <v-card-text>
                <div>
                  Ingeniera de QA en Dell Technologies. Trabaja en el grupo de
                  soluciones de infraestructura en el área de redes de datos.
                  Vive en San José CA.
                </div>
              </v-card-text>
            </div>
            <div class="flex-grow-1 flex-shrink-0"></div>
            <v-card-actions>
              <v-btn small color="primary" to="/team/"> Más información </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
 
  </div>


</v-container>



</template>


 

<script>
export default {
  name: "Home",
    data () {
      return {
        items: [
          {
            id: 1, src: require('../assets/img/Banner1.jpg'),
          },
          {
            id: 2, src: require('../assets/img/banner2.jpg'),
          },
          {
            id: 3, src: require('../assets/img/banner3.jpg'),
          },
          {
            id: 4, src: require('../assets/img/banner4.jpg'),
          },
        ],
      }
    },
  }
</script>
