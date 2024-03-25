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
       axios.get(this.store.apiUrl)
       .then(result => {
        console.log(result.data.results);
        this.store.cardsList = result.data.results;
       })
       .catch(error => {
        console.log(error);
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

  <Header />
  <Main />
  <Footer />

  </div>
</template>


<style lang="scss">
@use './assets/scss/main.scss';

</style>