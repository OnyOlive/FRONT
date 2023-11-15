<template>
    <div>
        <div class="card">
            <!-- <div class="card-header bg-black"></div> -->
            <div class="card-body">
                <div class="container ">
                    <div class="row text-center">
                        <div class="col-md-5">
                            <ul class="list-unstyled">
                                <li class="fs-4 fw-bold" style="font-family: 'Times New Roman', Times, serif;">REPOBLIKAN'I MADAGASIKARA</li>
                                <li class="fs-6 fw-bold fst-italic" style="font-family: 'Times New Roman', Times, serif;">Fitiavana - Tanindrazana - Fandrosoana</li>
                                <li class="mt-3 fw-bold">OFFICE MALGACHE DES TABACS</li>
                                <li class="fs-6 fw-bold fst-italic">(OF.MA.TA)</li>
                                <li class="mt-3 fw-bold">DIRECTION GENERALE</li>
                            </ul>
                        </div>
                        <div class="col-md-2">
                            <img src="../../assets/logoOfmata.png" alt="Logo ofmata" width="120">
                        </div>
                        
                        <div class="col-md-5">
                            <ul class="list-unstyled ">
                                <li class="fw-bold ">123, RUE Eveka JERÔME RAKOTOMALALA</li>
                                <li class="mt-2 fw-semibold " style="font-family: 'Times New Roman', Times, serif;">Tel: +261 020 22 623 25</li>
                                <li class="fw-bold"> B.P: 1004</li>
                                <li class="fs-6 fw-bold" >101 - ANTANANARIVO</li>
                                <li class="fs-6 fw-bold " >MADAGASCAR</li>
                                <li class="mt-2 fw-semibold" style="font-family: 'Times New Roman', Times, serif;"><span class="text-decoration-underline">E-mail:</span> ofmata@moov.mg</li>
                            </ul>
                        </div>
                    </div>
                    <hr>
                    <div class="row text-center">
                        <h1 class="fw-bold fst-italic" style="font-family: 'Times New Roman', Times, serif;" >
                            LISTE DE COLISAGE
                        </h1>
                        <h3  class="fst-italic" style="font-family: 'Times New Roman', Times, serif;" >N° {{props.numeroLC}} </h3> 
                    </div>
                    <div class="row px-5 mt-3">
                        <div class="col-md-6">
                            <ul class="list-unstyled">
                                <li ><span class="fw-bold">N° Laissez-passer: </span>{{ colisageByID.numeroLaissezPasser}}</li>
                                <li ><span class="fw-bold">Variété: </span>{{ colisageByID.varietes?.nomVariete}}</li>
                                <li ><span class="fw-bold">Secteur:</span> {{ colisageByID.secteur  }}</li>
                                <li ><span class="fw-bold">Magasin:</span> {{ colisageByID.magasins?.nomMagasin }}</li>
                                <li ><span class="fw-bold">Emballage:</span> {{ colisageByID.emballage }}</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul class="list-unstyled">
                                <li ><span class="fw-bold">Chauffeur: </span>{{ colisageByID.nomChauffeur}}</li>
                                <li ><span class="fw-bold">N° Camion: </span>{{ colisageByID.numeroCamion }}</li>
                                <li ><span class="fw-bold">Lieu de départ:</span> {{ colisageByID.lieuDepart }}</li>
                                <li ><span class="fw-bold">Destination:</span> {{ colisageByID.destination }}</li>
                            </ul>
                        </div>
                    </div>

                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>N° de balle</th>
                                <th>Récolte</th>
                                <th>Grade</th>
                                <th>Poids brute</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ct in colisageTable" :key="ct.numeroBalle">
                                <td>{{ ct.numeroBalle }}</td>
                                <td>{{ ct.recolte }}</td>
                                <td>{{ ct.grades.nomGrade }}</td>
                                <td>{{ ct.poidsBrute }}</td>
                            </tr>				 
                        </tbody>
                    </table>
                    <hr>
                    <div class="row mx-auto ">
                        <input type="submit" class="btn btn-info fw-bold" value="RECAPITULER"  @click="router.push({name: 'show recap',params:{numeroLC:props.numeroLC}})">
                    </div>
                </div>
            </div>
            <!-- <div class="card-footer bg-black"></div> -->
            </div>
    </div>
</template>

<script setup>
    import { onMounted } from "vue";
    import ColisageFonction from "../../Service/ColisageService";
    import {useRouter} from "vue-router";

    const router = useRouter()

    const {afficherColisageTable, colisageTable,rechercherParNumeroLC, colisageByID} = ColisageFonction()

    const props = defineProps({
        numeroLC: {
            required: true
        }
    })

    onMounted(() => {
        afficherColisageTable(props.numeroLC);
        rechercherParNumeroLC(props.numeroLC);
    })

</script>
