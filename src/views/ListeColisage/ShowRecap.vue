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
                        <h2 class="fw-bold fst-italic" style="font-family: 'Times New Roman', Times, serif;" >
                            Récapitulation de la liste de colisage
                        </h2>
                        <h3  class="fst-italic" style="font-family: 'Times New Roman', Times, serif;" >N° {{props.numeroLC}} 000123</h3> 
                    </div>
                    <div class="row px-5 mt-3">
                        <div class="col-md-6">
                            <ul class="list-unstyled">
                                <li ><span class="fw-bold">N° Laissez-passer: </span>{{ colisageByID.numeroLaissezPasser}} 12</li>
                                <li ><span class="fw-bold">Variété: </span>{{ colisageByID.varietes?.nomVariete}} RNO</li>
                                <li ><span class="fw-bold">Secteur:</span> {{ colisageByID.secteur  }} Ambilobe</li>
                                <li ><span class="fw-bold">Magasin:</span> {{ colisageByID.magasins?.nomMagasin }} Ambilobe</li>
                                <li ><span class="fw-bold">Emballage:</span> {{ colisageByID.emballage }} 2023</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul class="list-unstyled">
                                <li ><span class="fw-bold">Chauffeur: </span>{{ colisageByID.nomChauffeur}} RABE</li>
                                <li ><span class="fw-bold">N° Camion: </span>{{ colisageByID.numeroCamion }}</li>
                                <li ><span class="fw-bold">Lieu de départ:</span> {{ colisageByID.lieuDepart }}</li>
                                <li ><span class="fw-bold">Destination:</span> {{ colisageByID.destination }}</li>
                            </ul>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Grades</th>
                                <th>Récolte</th>
                                <th>Nombre de balle</th>
                                <th>Poids brute</th>
                                <th>Poids Net</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="r in recap.recapitulationLCList" :key="r.nomGrade" >
                                <template v-if="r.nbBalle !== 0">
                                    <td>{{ r.nomGrade }}</td>
                                    <td>{{ r.recolte }}</td>
                                    <td>{{ r.nbBalle }}</td>
                                    <td>{{ r.poidsBrute }}</td>
                                    <td>{{ r.poidsNet }}</td>
                                </template >
                            </tr>
                            <tr>
                                <th colspan="2" class="text-center">TOTAL</th>
                                <td>{{ recap.sommeNB }}</td>
                                <td>{{ recap.sommePB }}</td>
                                <td>{{ recap.sommePN }}</td>
                            </tr>		 
                        </tbody>
                    </table>
                    <div class="row text-start">
                        <p>Arrétée la présente liste au nombre de : <b>{{ NombreEnLettres(recap.sommeNB) }} Balles</b> </p>
                        <p>Balles de tabacs, pesant ensemble brut : <b>{{ NombreEnLettres(recap.sommePB) }} Kilogramme</b></p>
                    </div>
                    <hr>
                    
                    <div class="row mt-2 text-end">
                        <p class="fw-bold">Date: <span class="text-muted">{{ formateDate(colisageByID.dateLC) }}</span></p>
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
    import NombreEnLettres from "../../Service/NombreEnLettre";

    const { recapLC, rechercherParNumeroLC, colisageByID, recap} = ColisageFonction()

    const props = defineProps({
        numeroLC: {
            required: true
        }
    })

    const formateDate = (dateToFormate) => {
        const date = new Date(dateToFormate);
        return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    }

    onMounted(() => {
        console.log(NombreEnLettres(90))
        recapLC(props.numeroLC);
        rechercherParNumeroLC(props.numeroLC);
    })

</script>
