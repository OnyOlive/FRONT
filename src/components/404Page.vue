<template>
    <div class="d-flex align-items-center justify-content-center vh-100 position-relative">
        <div class="bg-image"></div>
        <div class="text-overlay">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"><span class="text-danger">Oops!</span> Page non trouvée.</p>
                <p class="lead">
                    La page que vous essayez de trouver n'existe pas.
                </p>
                <button class="btn btn-warning" @click="router.push({name: 'show home'})">Revenir à la page d'accueil</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {useRouter} from "vue-router";

    const router = useRouter()
</script>

<style>
    .bg-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('../assets/img.jpg');
        background-size: cover;
        background-position: center center;
        z-index: -1;
        filter: blur(5px);
    }

    .text-overlay {
        position: relative;
        z-index: 1;
        color: rgb(255, 255, 255);
    }
</style>