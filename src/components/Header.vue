<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store
      }
    }
    
  }
</script>


<template>
  <div class="text-center my-5 container ">
    <h1 text-center>{{ store.mainTitle }}</h1>
  </div>
</template>



<style lang="scss" scoped>

h1{
  box-shadow: 0px 0px 6px 2px;
  padding: 20px;
  border-radius: 100px;
  transform: scale(0.9);
}

</style>