<template>
    <div>
        <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <h2>Autorisation d'enlèvement</h2>
                        <div class="col-sm-4 mt-2">
                            <div class="input-group rounded">
                                <div class="input-group-prepend">
                                    <select class="form-select" aria-label="Default select example" aria-placeholder="" title="Rechercher par" v-model="selected">
                                        <option value="numAE">Numéro AE</option>
                                        <option value="annee">Année</option>
                                        <option value="dateAE">Date</option>
                                    </select>
                                </div>
                                <input 
                                    type="search" 
                                    v-if="selected == 'numAE' " 
                                    class="form-control rounded" 
                                    placeholder="Entrer le terme de recherche" 
                                    aria-label="Search" aria-describedby="search-addon" 
                                    style="margin-left: 5px;"
                                    @input="parNumAE($event.target.value)"
                                />

                                <select v-if="selected == 'annee'" id="annee" @select="parAnnee($event.target.value)" class="form-select rounded" style="width: 10%;margin-left: 5px;">
									<option v-for="a in annees" :key="a">{{ a }}</option>
                                    <option value="">2021</option>
                                    <option value="">2022</option>
                                    <option value="">2023</option>
                                </select>

                                <input type="date" 
                                    v-if="selected == 'dateAE'" 
                                    class="form-control rounded" 
                                    aria-label="Search" aria-describedby="search-addon" 
                                    style="margin-left: 5px;"
                                    @input="parDateAE($event.target.value)"
                                />
                                <span class="input-group-text border-0 bg-info" id="search-addon" style="border-radius: 10px;">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <div class="col-sm-8 d-flex flex-row-reverse">
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#ajouterAE">
                                <i class="fas fa-plus-circle"></i>
                                Créer une autorisation d'enlèvement
                            </button>
                            <CreateAE/>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover mt-3">
                    <thead>
                        <tr>
                            <th>N° AE</th>
                            <th>Société</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="a in autorisation" :key="a.idAutorisation">
                            <td>{{ a.numeroAE }}</td>
                            <td>{{ a.societeClients.nomSociete }}</td>
                            <td>{{ a.dateAE }}</td>
                            <td>
                                <!-- <button type="button" class="btn btn-warning" title="Voir l'autorisation" @click="router.push({name: 'show autorisation', params : { numeroAE:a.numeroAE}})"> -->
                                <button type="button" class="btn btn-warning" title="Voir l'autorisation" @click="router.push({name: 'show autorisation'})">
                                    <i class="fas fa-eye"></i>
                                     <!-- Voir l'autorisation -->
                                </button>
                                <!-- <button type="button" class="btn btn-warning" title="Générer la facture" style="margin-left: 5px;" @click="router.push({name: 'show facture'})">
                                    <i class="fas fa-file-invoice" ></i>
                                     Générer la facture
                                </button> -->
                            </td>
                        </tr>				 
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from "vue";
    import {useRouter} from "vue-router";
    import CreateAE from "./CreateAE.vue";
    // import Swal from 'sweetalert2';
    import AutorisationFonction from "../../Service/Autorisation.js";

    const router = useRouter()
    const selected = ref("numAE");

    const {
        annees,
        autorisation,
        afficherListAE,
        afficherAnnee,
        rechercherAutorisation,
        rechercherParDate,
        rechercherParAnnee, 
    } = AutorisationFonction()

    const parNumAE = (numAE) => {
        if(numAE.length > 0) {
            rechercherAutorisation(numAE);
        } else {
            afficherListAE();
        }
    }

    const parDateAE = (dateAE) => {
        if(dateAE.length > 0) {
            rechercherParDate(dateAE)
        } else {
            afficherListAE();
        }
    }

    const parAnnee = (annee) => {
        if(annee.length > 0) {
            rechercherParAnnee(annee)
        } else {
            afficherListAE();
        }
    }

    // const genererFacture = () => {
    //     Swal.fire({
    //         title: 'Transport ?',
    //         text: 'Voulez-vous ajouter un transport ?',
    //         icon: 'question',
    //         showCancelButton: true,
    //         confirmButtonText: 'Oui',
    //         cancelButtonText: 'Non'
    //     }).then((result) => {
    //         if (result.isConfirmed) { 
    //             console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa')
    //             router.push({ name: 'ajouter transport' });
    //         } else {
    //             router.push({ name: 'show facture' });
    //         }
    //     });
    // };


    onMounted(() => {
        afficherListAE();
        afficherAnnee
    });
        
</script>