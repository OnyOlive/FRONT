<template>
    <!-- component -->
    <div class="z-3">
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div> 
      </div>
      <section class="z-3">
          <div class="container-fluid">
            <div class="row align-items-center my-5">
              <div class="col-md-6 d-flex">
                <img class="w-20 px-5" src="../assets/logoOfmata.png">
              </div>
              <div class="col-md-6 d-flex flex-column justify-content-center align-items-center mt-4 text-white">
                <h1 class="d-none d-md-block display-1 text-center font-weight-bold fw-bolder">OF.MA.TA</h1>
                <h2 class="text-2xl text-bg-warning"> Office Malgache des Tabacs </h2>
                <p class="text-xl mt-4">Tutelle et assure la promotion qualitative et quantitative de la production tabacole.</p>
                <button class="btn btn-outline-warning btn-lg my-4 px-4 duration-300" @click="router.push({name: 'show bilan'})">
                  Entrer dans l'application <i class="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
      </section>
    </div>
    <div class="w-100 bg-black position-fixed top-0 bottom-0 opacity-50 z-neg"></div>

</template>
  
<script setup>
  import {useRouter} from "vue-router";
  const router = useRouter()
</script>
  
<style>
  .z-neg {
    z-index: -1;
  }
      html,body {
        height: 100%;
      }
      body {
        /* background-color: #015871; */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('../assets/background.jpg');
        background-size: cover;
        background-position: center center;
        z-index: -1;
        /* backdrop-filter: blur(5px); */
        overflow: hidden;
      }

      @media (max-width: 768px) {
        body {
          overflow-y: auto;
        }
      }

      .ocean {
        height: 5%;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #33bbff;
      }

      .wave {
        /* background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) */
        background: url('../assets/wave.svg')
            repeat-x;
        position: absolute;
        top: -198px;
        width: 6400px;
        height: 198px;
        animation: wave 700s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
        transform: translate3d(0, 0, 0);
      }

      .wave:nth-of-type(2) {
        top: -175px;
        animation: wave 700s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
            swell 7s ease -1.25s infinite;
        opacity: 1;
      }

      @keyframes wave {
        0% {
            margin-left: 0;
        }
        100% {
            margin-left: -1600px;
        }
      }

      @keyframes swell {
        0%,
        100% {
            transform: translate3d(0, -25px, 0);
        }
        50% {
            transform: translate3d(0, 5px, 0);
        }
      }
</style>
  