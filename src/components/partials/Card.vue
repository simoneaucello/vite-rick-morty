<script>
  export default {
    props:{
      name: String,
      status: String,
      species: String,
      image: String
    }
    
  }
</script>

<template>
 <div class="col mb-3">
  <div class="card sa_card">
    <img :src="image" class="card-img-top" alt="name">
    <div class="card-body">
      <h5 class="card-title text-white">{{name}}</h5>
      <h6 class="card-title text">{{status}}</h6>
      <p class="text-center text-warning">{{species}}</p>
    </div>
  </div>
 </div>
</template>


<style lang="scss" scoped>

.sa_card{
  background-color: #c6cac479;
  box-shadow: 0px 2px 15px 2px;
}

img{
    border-radius: 50%;
    transform: scale(0.9);
    
    box-shadow: 0px 2px 15px 2px;
  }
  img:hover{
    transform: scale(1.1);
    transition: .3s ease-out;
  }

</style>