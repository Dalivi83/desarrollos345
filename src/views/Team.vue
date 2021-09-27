<template>
  <div class="team">
      <h1>Equipo de Trabajo</h1>
      <v-container>
        <v-row>
          <v-col v-for="team in team" :key="team.id">
            <teamInfo :team="team" />            
          </v-col>
        </v-row>
      </v-container>
  </div>
 
</template>

<script>
import teamInfo from "../components/teamInfo.vue";

export default {
  components: {
    teamInfo
  },
  data(){
    return {
      team: [
        {id: 1, foto: "https://i.pinimg.com/736x/4b/cd/33/4bcd33ca4155ff5519bf8019a955ba73.jpg", name: "Gloria Carvajal", rol: "Scrum Master", descripcion:"Gloria Carvajal es Ingeniera de QA en Dell Technologies. Vive en San José – Estados Unidos. Su pasatiempo favorito es viajar y le encanta comer fritanga. Ella considera que su principal cualidad es ser servicial. Ella opina que la experiencia en el proyecto mintic ha sido IEEE - interesante, enriquecedora, estupenda aunque estresante. Sus principales proyectos relacionados con el área de la programación son: el desarrollo de scripts para la automatización de pruebas que se usan para testear las funcionalidades de los switches usados en los centros de datos.",
        },
        {id: 2, foto: "https://simg.nicepng.com/png/small/225-2255668_icono-iconos-de-personas-solas.png", name: "Pedro Osorio", rol: "Development Team", descripcion:"Pedro Osorio trabaja como administrador de plataformas de educación virtual en Bogotá, ciudad en la que vive y trabaja desde hace 20 años. Colombiano, sus pasatiempos son los libros de narrativa fantástica y los videojuegos. Le gusta comer pero no programar en spaguetti. Su paso por Misión TIC 2022 ha estado lleno de altos y bajos, pero sobre todo, de mucho aprendizaje. Sus principales proyectos relacionados con el área de la programación son: construir Objetos de Aprendizaje usando las metodologías y los lenguajes aprendidos en Mision TIC.",
        },
        {id: 3, foto: "https://i.pinimg.com/736x/4b/cd/33/4bcd33ca4155ff5519bf8019a955ba73.jpg", name: "Jenny Veloza", rol: "Development Team", descripcion:"Jenny Veloza es Ingeniera de Sistemas especialista en Gerencia de Tecnologías de la Información en SGS Colombia. Vive en Bogotá. Sus pasatiempos favoritos son leer, hacer deporte y viajar. Le encanta comer ensalada de frutas y comida de mar. Ella considera que su principal cualidad es la honestidad, compromiso y transparencia. Ella opina que la experiencia en el proyecto Mintic ha sido retador, de aprendizajes y enseñanzas que han permitido fortalecer sus conocimientos y adquirir nuevos. Sus principales proyectos relacionados con la programación son el manejo de scripts en motores de bases de datos como lo son Oracle y Sql Server para el funcionamiento de ERP y repositorios de información para el mejoramiento continuo.",
        },
        {id: 4, foto: "https://i.pinimg.com/736x/4b/cd/33/4bcd33ca4155ff5519bf8019a955ba73.jpg", name: "Carmen Cárdenas", rol: "Development Team", descripcion:"Carmen Cárdenas es Docente de Informática en el Colegio Ramón B. Jimeno de la Empresa de Acueducto. Vive en Bogotá - Colombia. Sus pasatiempos favoritos son almorzar en familia, bailar Salsa, ver series y documentales y le encanta comer arroz en todas sus presentaciones y carne asada. Ella considera que sus principales cualidades son la responsabilidad y el amor por los animales, así como ser una persona comprometida en todos sus proyectos. Ella opina que la experiencia en el proyecto mintic ha sido altamente desafiante y llena de aprendizajes a todo nivel. Sus principales proyectos relacionados con el área de la programación son: profundizar en la enseñanza de la programación para que los estudiantes fortalezcan su lógica y su capacidad de solucionar problemas.",
        },
        {id: 5, foto: "https://i.pinimg.com/736x/4b/cd/33/4bcd33ca4155ff5519bf8019a955ba73.jpg", name: "Lida Pineda", rol: "Product Owner", descripcion:"Lida Pineda es Ingeniera de Sistemas y gestiona proyectos tecnológicos y personales en el Instituto Caro y Cuervo. Vive en Bogotá – Colombia. Sus pasatiempos favoritos son leer diferentes textos literarios de aventuras, ficción, escribir algunos cuentos y trabajar con letras y diseños en punto de cruz y le encanta comer lasaña de pollo con champiñones. Ella considera que sus principales cualidades son la paciencia, saber escuchar a las personas y comprender las necesidades del otro. Ella opina que la experiencia en el proyecto Mintic ha sido entender y fortalecer los conceptos de desarrollo que por su labor ha dejado a un lado, y que no han dejado de ser parte de lo que ella es. Sus principales proyectos relacionados con el área de la programación son: convertirse en desarrollador senior tanto en programación estructurada como objetos, cumpliendo funciones como DBA y trabajando en el backend ya que lo considera un reto valioso al estar mucho más cerca de todo lo relacionado con Big Data y Data Science.",
        },
      ]
    }
  }

}
</script>

<style>

</style>