<script>
import Card from './partials/Card.vue'
import {store} from '../data/store'
  export default {
    components:{
      Card
    },


    data(){
      return{
        store
      }
    }
  }
</script>


<template>

<div class="text-center my-5 container sa_cont">
  <div class="nav_menu d-flex m-3">

    <input v-model.trim="store.queryParams.name" 
    @keyup.enter="$emit('search')"
    type="text" class="form-control" placeholder="Search character" aria-describedby="addon-wrapping">

    <select class="form-select mx-3" aria-label="Default select example">
    <option selected>Select Status</option>
    <option value="1">Alive</option>
    <option value="2">Dead</option>
    <option value="3">unknown</option>
    </select>

    <button 
    @click="$emit('search')"
    type="button" class="btn btn-warning mx-3">Search</button>

    <button type="button" class="btn btn-success">Reset</button>
  </div>

  <!-- <span class="loader">L &nbsp; ading</span> -->
  
    <div v-if="store.cardsList.length > 0 " class="row row-cols-4">
      <Card
        v-for="card in store.cardsList"
        :key="card.id" 
        :name="card.name"
        :status="card.status"
        :species="card.species"
        :image="card.image"
        />
    </div>

    <div v-else>
      <h2 class="text-danger">{{store.errorMsg}}</h2>

    </div>

</div>

</template>



<style lang="scss" scoped>


.sa_cont{
  padding: 10px;
  border-radius: 10px;;
  .nav_menu{
    padding: 10px;
    background-color: #dd7ff5;
    border-radius: 10px;
  }
  .loader {
  display: inline-block;
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #FFF;
  position: relative;
}
.loader::before {
  content: '';  
  position: absolute;
  left: 34px;
  bottom: 8px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 5px solid #FFF;
  border-bottom-color: #FF3D00;
  box-sizing: border-box;
  animation: rotation 0.6s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
}

</style>