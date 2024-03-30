<script>
import axios from 'axios';
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Paginator from './components/partials/Paginator.vue'
  export default {
    components:{
      Header,
      Main,  
      Paginator,  
      Footer
    },

    data(){
      return{
        store
      }
    }, 

    methods: {
      getApi(){
        this.store.cardsList = [];
        this.store.errorMsg = '';
       axios.get(this.store.apiUrl, {
        params: this.store.queryParams
       })
       .then(result => {
        console.log(result.data.results);
        this.store.cardsList = result.data.results;
        this.store.queryParams.allPages = result.data.info.pages
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
  <Paginator @goNext="getApi" @goPrev="getApi" />
  <Footer />

  </div>
</template>


<style lang="scss">
@use './assets/scss/main.scss';

</style>