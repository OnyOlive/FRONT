<template>

  <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <Navbar/>
        </div>
        <div class="col py-3" style="background-color: #CFD8DC;">
          <RouterView/>
        </div>
    </div>
  </div>
    

</template>

<script setup>
  import Navbar from '../components/Navbar.vue';
  import { RouterView } from 'vue-router';

  

</script>
