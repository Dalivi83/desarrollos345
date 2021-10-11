<template>
    <v-card width="400" class="mx-auto mt-5">
        <v-card-title>
        <h1 class="display-1">Autenticación</h1>
        </v-card-title>
        <v-card-text>
            <v-text-field label="Usuario" prepend-icon="mdi-account-circle" v-model="username" />
            <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Contraseña"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
            />
        </v-card-text>
        <v-divider></v-divider>

        
        <v-divider></v-divider>
        <v-card-actions>
        <v-btn color="info" @click="login()">Ingresar</v-btn>
        <v-btn color="info" @click="nuevoUsuario()">Nuevo Usuario</v-btn>
        <!-- <router-link to="/form">Pruebas</router-link> -->
        </v-card-actions>
        
    </v-card>
    
</template>

<script>
export default {
    data(){
        return{
            showPassword: false,
            correo: "",
            contraseña: "",

        };
    },
    methods:{
        
        login(){
            window.location.href="/Form"
            // Toma el correo y la contraseña para verificar si es válido
            sessionStorage.setItem("correo", this.username);
            console.log(this.username)
            // if(this.username == "gloria.carvajal@desarrollos345.com"){
            //     sessionStorage.setItem("role", "admin");

            // }else{
            //     sessionStorage.setItem("role", "user");
            // }

            this.$emit("login-success", this.username);
            window.location.reload();
        },
        nuevoUsuario(){
                window.location.href="/nuevoUsuario"
        //         try {
        //             const { data: user } = await api.post('/user/login', {
        //                 email: this.username,
        //                 password: this.password
        //             })
        //             if (!user.login) {
        //             Swal.fire('Error!', user.message, 'error')
        //                 return
        //             }
        //             this.$router.push('/')
        //         } catch (error) {
        //             console.error(error)




        // },

    },
    }
}
</script>

<style>

</style>


