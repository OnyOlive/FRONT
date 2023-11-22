<template>
    <div>
        <div class="container">
            <div class="table-wrapper">
                <div class="table-title " >
                    <div class="row">
                        <h2>Liste de colisage</h2>
                        <div class="col-sm-6 mt-2">
                            <div class="input-group rounded">
                                <div class="input-group-prepend">
                                    <select class="form-select" aria-label="Default select example" aria-placeholder="" title="Rechercher par" v-model="selected">
                                        <option value="numLC">Numéro LC</option>
                                        <option value="annee">Année</option>
                                        <option value="dateLC">Date</option>
                                    </select>
                                </div>
                                <input 
                                        type="search" 
                                        v-if="selected == 'numLC' " 
                                        class="form-control rounded" 
                                        placeholder="Entrer le terme de recherche" 
                                        aria-label="Search" aria-describedby="search-addon" 
                                        style="margin-left: 5px;"
                                        @input="parNumLC($event.target.value)"
                                    />

                                    <select v-if="selected == 'annee'" id="annee" @select="parAnnee($event.target.value)" class="form-select rounded" style="width: 10%;margin-left: 5px;">
										<option v-for="a in annees" :key="a">{{ a }}</option>
                                    </select>

                                    <input type="date" 
                                        v-if="selected == 'dateLC'" 
                                        class="form-control rounded" 
                                        aria-label="Search" aria-describedby="search-addon" 
                                        style="margin-left: 5px;"
                                        @input="parDateLC($event.target.value)"
                                    />
                                <span class="input-group-text border-0 bg-info" id="search-addon" style="border-radius: 10px;">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <div class="col-sm-6 d-flex flex-row-reverse">
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#LCForm">
                                Entrer une liste
                            </button>
                            <LCForm @afficher="afficherLC"/>
                        </div>
                    </div>
                </div>
                
                <table class="table table-striped table-hover mt-3" >
                    <thead>
                        <tr>
                            <th>
                                <button type="button" class="btn btn-info" title="Créer une autorisation" data-bs-toggle="modal" data-bs-target="#ajouterAE" @click="recupererValeursSelectionnees">
                                    <i class="fas fa-plus-circle"></i>
                                </button>
                                <CreateAE :selectedCheckboxes="selectedCheckboxes"/>
                            </th>
                            <th>Numero</th>
                            <th>Laissez-passer N°</th>
                            <th>Variété</th>
                            <th>Secteur</th>
                            <th>Magasin </th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="c in colisages" :key="c.numeroLC">
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input" style="border: 2px solid rgb(0, 195, 255);" type="checkbox" :value="c.numeroLC" v-model="selectedCheckboxes" @change="onCheckboxChange(c)">
                                </div>
                            </td>
                            <td>{{ c.numeroLC }}</td>
                            <td>{{ c.numeroLaissezPasser }}</td>
                            <td>{{ c.varietes.nomVariete }}</td>
                            <td>{{ c.secteur }}</td>
                            <td>{{ c.magasins.nomMagasin }}</td>
                            <td>{{ format(new Date(c.dateLC), 'dd/MM/yyyy') }}</td>
                            <td>
                                <button type="button" class="btn btn-warning" title="voir la liste de colisage" @click="router.push({name: 'show LC',params:{numeroLC:c.numeroLC}})">
                                    <i class="fas fa-eye"></i>
                                    Voir la liste
                                </button>
                            </td>                           
                        </tr>		
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
	import LCForm from "./LCForm.vue";
    import CreateAE from "../Autorisation/CreateAE.vue";
    import ColisageFonction from "../../Service/ColisageService.js";
    import { onMounted, ref} from "vue";
    import {useRouter} from "vue-router";
    import { format } from 'date-fns';

    const router = useRouter()
    const selected = ref("numLC");

    const {
        colisages,
        annees,
        afficherLC,
        afficherAnnee,
        rechercherColisageParNumLC, 
        rechercherColisageParDate,
        rechercherColisageParAnnee,
    } = ColisageFonction()

    const selectedCheckboxes = ref([]);

    const recupererValeursSelectionnees = () => {
        console.log('Cases à cocher sélectionnées :', selectedCheckboxes.value);
    };

    const parNumLC = (numLC) => {
        if(numLC.length > 0) {
            rechercherColisageParNumLC(numLC);
        } else {
            afficherLC();
        }
    }

    const parDateLC = (dateLC) => {
        if(dateLC.length > 0) {
            rechercherColisageParDate(dateLC)
        } else {
            afficherLC();
        }
    }

    const parAnnee = (annee) => {
        if(annee.length > 0) {
            rechercherColisageParAnnee(annee)
        } else {
            afficherLC();
        }
    }


    onMounted(() => {
        afficherLC();
        afficherAnnee();
    })
</script>