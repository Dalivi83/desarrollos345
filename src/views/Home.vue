<template>
  <v-container name="main-home" fluid>
    <div id="home-services">
      <h2 class="text-md-center font-weight-bold">Servicios</h2>
      <v-row no-gutters>
        <v-col order="last">
          <v-card class="pa-2" outlined tile>
            <v-img
              src="../assets/img/IMG-SERV-Desarrollo_webp.png"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0 font-weight-regular">
                  Desarrollo Web
                </h3>
                <div>
                  <p class="font-weight-thin">
                    Desarrollo de páginas web y aplicativos web funcionales,
                    dinámicos que cumplas con altos estándares de calidad y
                    usabilidad son algunas de las caracteristicas que brindamos
                    a nuestros clientes
                  </p>
                </div>
              </div>
            </v-card-title>
            <v-card-actions> </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-2" outlined tile>
            <v-img
              src="../assets/img/IMG-SERV-Analisis_de_datos.png"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0 font-weight-regular">
                  Analísis de datos en Python
                </h3>
                <p class="font-weight-thin">
                  Python es un lenguaje de programación que soporta un
                  desarrollo rápido de aplicaciones de análisis de datos. Es así
                  como uno de nuestros servicios consiste en el análisis,
                  tratado y procesamiento de los datos...
                </p>
              </div>
            </v-card-title>
            <v-card-actions> </v-card-actions>
          </v-card>
        </v-col>
        <v-col order="first">
          <v-card class="pa-2" outlined tile>
            <v-img
              src="../assets/img/IMG-SERV-Bases_de_datos.png"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0 font-weight-regular">
                  Normalización y construcción de base de datos
                </h3>
                <p class="font-weight-thin">
                  Los principales activos de la compañía son los datos y la
                  información, es importante contar con bases de datos que
                  cuenten con data limpia
                </p>
              </div>
            </v-card-title>
            <v-card-actions> </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <h2 class="text-md-center font-weight-bold">Nuestro equipo</h2>
    <v-container grid-list-md text-xs-center fluid>
      <v-layout row wrap>
        <v-flex xs12 sm6 justify-center>
          <v-row no-gutters>
            <v-col order="last">
              <v-card>
                <v-img
                  src="../assets/img/IMG-TEAM-Gloria_Carvajal.png"
                  aspect-ratio="2.75"
                >
                </v-img>
                <v-card-title> GLORIA CARVAJAL </v-card-title>
                <v-card-text>
                  ingeniera de QA en Dell Technologies. Vive en San José –
                  Estados Unidos. Su pasatiempo favorito es viajar y le encanta
                  comer fritanga.</v-card-text
                >
                <v-card-actions> </v-card-actions>
              </v-card>
              <v-card>
                <v-img
                  src="../assets/img/IMG-TEAM-Lida_Pineda.png"
                  aspect-ratio="2.75"
                >
                </v-img>
                <v-card-title> LIDA PINEDA </v-card-title>
                <v-card-text>
                  Ingeniera de Sistemas y gestora deproyectos tecnológicos y
                  personales en el Instituto Caro y Cuervo Vive en Bogotá –
                  Colombia.</v-card-text
                >
                <v-card-actions> </v-card-actions>
              </v-card>
              <v-card>
                <v-img
                  src="../assets/img/IMG-TEAM-Pedro_Osorio.png"
                  aspect-ratio="2.75"
                >
                </v-img>
                <v-card-title> PEDRO OSORIO </v-card-title>
                <v-card-text>
                  trabaja como administrador de plataformas de educación virtual
                  en Bogotá, ciudad donde vive y trabaja.</v-card-text
                >
                <v-card-actions> </v-card-actions>
              </v-card>
              <v-card>
                <v-img
                  src="../assets/img/IMG-TEAM-Carmen_Cardenas.png"
                  aspect-ratio="2.75"
                >
                </v-img>
                <v-card-title> CARMEN CARDENAS </v-card-title>
                <v-card-text>
                  Carmen Cárdenas es "docente de Informática" en "el Colegio
                  Ramón B. Jimeno de la empresa de Acueducto". Vive en Bogotá -
                  Colombia.</v-card-text
                >
                <v-card-actions> </v-card-actions>
              </v-card>
              <v-card>
                <v-img
                  src="../assets/img/IMG-TEAM-Jenny_Veloza.png"
                  aspect-ratio="2.75"
                >
                </v-img>
                <v-card-title> JENNY VELOZA </v-card-title>
                <v-card-text
                  >Ingeniera de Sistemas especialista en Gerencia de Tecnologías
                  de la Información en SGS Colombia. Vive en Bogotá.
                </v-card-text>
                <v-card-actions> </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>
