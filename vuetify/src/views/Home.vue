<template>
  <v-container>
    <v-row :wrap="true">
      <v-col xs12>
        <v-card>
          <v-date-picker 
          v-model="fecha"
          full-width
          :min="minimo"
          :max="maximo"
          ></v-date-picker>
        </v-card>
        <v-card 
        color="error" dark >
          <v-card-text class="display-1 text-center">650 {{fecha}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src'
import  axios from "axios";

export default {
  data(){
    return{
      fecha: '',
      minimo: '1984',
      maximo: new Date().toISOString().substr(0,10)
    }
  },
  methods:{
    async getDolar(){
      let datos= await axios.get('https://mindicador.cl/api/dolar')
      console.log(datos);
    }
  },
  created(){
    this.getDolar()
  },
  name: 'Home',
  components: {
  }
}
</script>
