<template>
    <div class="ocean">
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
    <div class="min-vh-100 bg-primary py-5 d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card shadow-lg">
              <div class="card-body">
                <h1 class="text-center mb-4">Connexion</h1>
                <form @submit.prevent="submitForm">
                  <div class="mb-3">
                    <input
                      v-model="email"
                      type="text"
                      class="form-control"
                      placeholder="Email address"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div class="d-grid">
                    <button class="btn btn-warning btn-block fw-semibold" type="submit">
                      Soumettre
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      submitForm() {
        // Ajoutez ici la logique de soumission du formulaire
        console.log('Formulaire soumis');
      },
    },
  };
  </script>
  
  <style>
    html,
body {
  height: 100%;
}
body {
  /* background: radial-gradient(
    ellipse at center,
    rgba(255, 254, 234, 1) 0%,
    rgba(255, 254, 234, 1) 35%,
    #b7e8eb 100%
  ); */
  background-color: #015871;
  overflow: hidden;
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
  