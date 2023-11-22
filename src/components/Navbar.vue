<template>
    
        <div class="d-flex flex-column align-items-center align-items-sm-start px-2 pt-3 text-white min-vh-100">
            <a href="/" class="d-flex align-items-center pb-5 mb-md-0 me-md-auto text-white text-decoration-none">
                <img src="../assets/logoOfmata.png" alt="Logo ofmata" width="75">
                <span class="fs-6 d-none d-sm-inline px-4 fw-medium text-center text-warning">OFFICE MALGACHE DES TABACS</span>
            </a>
            <ul class="nav nav-pills flex-column mb-sm-auto mb-15 align-items-center align-items-sm-start " id="menu" style="width: 100%" >
                <li class="nav-item w-100">
                    <p class="nav-link align-middle px-2 m-0 w-100 text-info" :class="{ 'active-menu-item': isActive('show bilan') }" @click="router.push({name: 'show bilan'})">
                        <i class="fas fa-th-list"></i>
                        <span class="ms-1 d-none d-sm-inline" > BILANS DES VENTES</span>
                    </p>
                </li>
                <li class="nav-item w-100">
                    <p class="nav-link px-2 align-middle m-0 w-100 text-info" :class="{ 'active-menu-item': isActive('colisage') }" @click="router.push({name: 'colisage'})">
                        <i class="fas fa-list" ></i>
                        <span class="ms-1 d-none d-sm-inline"> LISTE DE COLISAGE </span>
                    </p>
                </li >
                <li class="nav-item w-100">
                    <p class="nav-link px-2 m-0 w-100  align-middle text-info" :class="{ 'active-menu-item': isActive('all autorisation') }" @click="router.push({name: 'all autorisation'})">
                        <i class="fas fa-file-signature" ></i>
                        <span class="ms-1 d-none d-sm-inline"> AUTORISATION </span>
                    </p>
                </li>
                <li class="nav-item w-100">
                    <p class="nav-link px-2 m-0 w-100  align-middle text-info" :class="{ 'active-menu-item': isActive('all factures') }" @click="router.push({name: 'all factures'})">
                        <i class="fas fa-file-invoice" ></i>
                        <span class="ms-1 d-none d-sm-inline"> FACTURE </span>
                    </p>
                </li>
                
                <li class="nav-item w-100">
                    <p class="nav-link px-2 m-0 w-100  align-middle text-info" :class="{ 'active-menu-item': isActive('all clients') }"  @click="router.push({name: 'all clients'})">
                        <i class="fas fa-users" ></i>
                        <span class="ms-1 d-none d-sm-inline"> CLIENTS</span>
                    </p>
                </li>
                <li class="nav-item w-100">
                    <p class="px-2 m-0 w-100 text-info" >
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle dropdown-toggle text-info">
                            <i class="fas fa-leaf" ></i>
                            <span class="ms-1 d-none d-sm-inline"> TABACS </span>
                        </a>
                    </p>
                    
                    <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                        <li class="w-100">
                            <p class="nav-link px-2 m-0 w-100 text-info"  :class="{ 'active-menu-item': isActive('all varietes') }"  @click="router.push({name: 'all varietes'})">
                                <span class="d-none d-sm-inline"> Variété </span>
                            </p>
                        </li>
                        <li>
                            <p class="nav-link px-2 m-0 w-100 text-info"  :class="{ 'active-menu-item': isActive('all grades') }" @click="router.push({name: 'all grades'})"> 
                                <span class="d-none d-sm-inline"> Grade </span>
                            </p>
                        </li>
                    </ul>
                </li>
                <li class="nav-item w-100">
                    <p class="px-2 m-0 w-100 text-info">
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle dropdown-toggle text-info">
                            <i class="fas fa-map-marker-alt" ></i>
                            <span class="ms-1 d-none d-sm-inline "> PROVENANCE </span>
                        </a>
                    </p>
                    <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                        <li class="w-100">
                            <p class="nav-link px-2 m-0 w-100 text-info"  :class="{ 'active-menu-item': isActive('all zones') }" @click="router.push({name: 'all zones'})">
                                <i class="fas fa-map-marked-alt" ></i>
                                <span class="d-none d-sm-inline"> Zones </span>
                            </p>
                        </li>
                        <li>
                            <p class="nav-link px-2 m-0 w-100 text-info"  :class="{ 'active-menu-item': isActive('all secteurs') }" @click="router.push({name: 'all secteurs'})"> 
                                <i class="fas fa-store-alt"></i>
                                <span class="d-none d-sm-inline"> Secteurs </span>
                            </p>
                        </li>
                        <li>
                            <p class="nav-link px-2 m-0 w-100 text-info"  :class="{ 'active-menu-item': isActive('all magasins') }" @click="router.push({name: 'all magasins'})"> 
                                <i class="fas fa-store"></i>
                                <span class="d-none d-sm-inline "> Magasins </span>
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
            <hr>    
        </div>
    
</template>

<script setup>
    import {useRouter} from "vue-router";

    const router = useRouter()

    const isActive = (routeName) => {
        return router.currentRoute.value.name === routeName;
    };  

</script>

<style>
.active-menu-item {
    text-decoration-color: #000000;
    background-color: rgb(116, 114, 106);
}

.w-100 {
    width: 100%;
}


</style>

  