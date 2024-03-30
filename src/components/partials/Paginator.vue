<script>
import {store} from '../../data/store'
  export default {

    data(){
      return{
        store
      }
    },

    methods: {
      nextPage(){
        this.store.queryParams.page++
        this.store.counter++
        this.$emit('goNext')     
      },

      prevPage(){
        this.store.queryParams.page--
        this.store.counter--
        this.$emit('goPrev')   
      }
    }
    
  }
</script>

<template>
   <div class="text-center my-5">
    Pagina {{store.counter}} di {{store.queryParams.allPages}} - 
    <button @click="prevPage" v-if="store.counter > 1" class="btn btn-success me-3"><</button>
    <button @click="nextPage" v-if="store.counter < store.queryParams.allPages" class="btn btn-success">></button>

  </div>
</template>

<style lang="scss" scoped>

</style>