<template>
<v-container>
  
  <v-data-table
    :headers="headers"
    :items="desserts" 
    sort-by="Nombre Servicio"
    class="elevation-2"
  >
        <template v-slot:top>
            <v-toolbar flat >
                <v-toolbar-title>
                <h1 class="font-weight-black">
                 Servicios
                </h1> 
            </v-toolbar-title>
                
                <v-spacer></v-spacer>
                <v-dialog
                v-model="dialog"
                max-width="500px"
                >
                    
                <v-card>
                    <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-col>
                          <v-row
                              cols="12"
                              sm="6"
                              md="4"
                          >
                              <v-text-field 
                              v-model="editedItem.NombreServicio"
                              label="Nombre Servicio"
                              >
                              </v-text-field>
                          </v-row>
                        </v-col>

                        <v-col>
                            <v-row
                                cols="12"
                                sm="6"
                                md="4"
                            >
                            
                                <v-text-field
                                v-model="editedItem.Descripcion"
                                label="Descripción"
                                ></v-text-field> 
                            
                             </v-row>
                        </v-col>
                        <v-col>
                            <v-row
                                cols="12"
                                sm="6"
                                md="4"
                                >
                                <v-text-field
                                v-model="editedItem.ImagenPrincipal"
                                label="Imagen"
                                ></v-text-field>                            
                            </v-row>
                          </v-col>
                    </v-container>
                </v-card-text> 

                <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="close"
                    >
                        Cancelar
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="editarServicio(editedItem)"
                    >
                        Modificar
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>

                <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                    <v-card-title class="text-h5">Desea eliminar el servicio?</v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-toolbar>
            </template>
            <!-- <template v-slot:item.actions="{ item }"> -->
            <template v-slot:[`item.actions`]="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="editItem(item._id)"  
            >
                mdi-file-document-edit
            </v-icon>
            <v-icon
                small
                @click="eliminarServicio(item._id)"
            >
                mdi-delete-variant
            </v-icon>
            </template>    
  </v-data-table>
</v-container>
</template>
      
    
<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        
        { text: 'Servicio', value: 'NombreServicio' },
        { text: 'Descripción', value: 'Descripcion' },
        { text: 'Imagen', value: 'ImagenPrincipal' , sortable: false},
        { text: 'Acciones', value: 'actions', sortable: false},
        
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: [],
      defaultItem: {
      }
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Editar Servicio' : 'Nuevo Servicio'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created () {
      this.listarServicios();
      this.initialize()
    },
    methods: {
      initialize () {
        this.desserts = [
          
        ]
      },
      editItem (item) {
        this.dialog = true
        console.log(item);
        this.axios.get(`/buscarParametro/${item}`)
        .then(res=>{
          this.editedItem=res.data
        })
      },
      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
      
     listarServicios(){
    
      this.axios.get('/buscarTodo')
      .then((response)=>{
          this.desserts=response.data;
      })
      .catch((e)=>{
        console.log('error'+e);
      })
    },
     editarServicio(item){
      this.axios.put(`/actualizar/${item._id}`,item)
      .then(res =>{
            this.$swal('Completado!',
                    'Servicio modificado satisfactoriamente!',
                    'success');
            this.close();
   
        const index = this.desserts.findIndex(n=>n._id=== res.data._id)
        //Cambiar desserts en todo
        this.desserts[index].NombreServicio=res.data.NombreServicio;
        this.desserts[index].Descripcion=res.data.Descripcion;
        this.desserts[index].ImagenPrincipal=res.data.ImagenPrincipal;
      }).catch(e=>{
        console.log(e.response)
      })
    }, 
    eliminarServicio(id){
      console.log(id);
      this.axios.delete(`/eliminarParametro/${id}`)
      .then(res => {
            this.$swal('Desea eliminar el servicio',
                    'Servicio eliminado satisfactoriamente!',
                    'warning');
            
        const index = this.desserts.findIndex(item => item._id === res.data._id)
        this.desserts.splice(index,1);
        this.editedIndex = this.desserts.indexOf(item);
        this.editedItem= Object.assign({}, item)
        
        
      }).catch(e => {
        console.log(e.response)
      })
    }
    
    },
  }
</script>