<script>
import axios from 'axios';
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
  export default {
    components:{
      Header,
      Main,    
      Footer
    },

    data(){
      return{
        store
      }
    }, 

    methods: {
      getApi(){
        this.store.characters = [];
        this.store.errorMsg = '';
       axios.get(this.store.apiUrl, {
        params: this.store.queryParams
       })
       .then(result => {
        console.log(result.data.results);
        this.store.cardsList = result.data.results;
       })
       .catch(error => {
        this.store.errorMsg = 'Personaggio non trovato'
       })
      }
    },

    mounted(){
      this.getApi();
    }

  }

</script>

<template>
  <div>

  <Header/>
  <Main  
  @search="getApi" />
  <Footer />

  </div>
</template>


<style lang="scss">
@use './assets/scss/main.scss';

</style>