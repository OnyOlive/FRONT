<template>
    <div>
        <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <h2>Autorisation d'enlèvement</h2>
                        <div class="col-sm-4 mt-2">
                            <div class="input-group rounded">
                                <input type="date" class="form-control rounded" placeholder="Entrer la date de l'autorisation" title="Rechercher par date d'autorisation" aria-label="Search" aria-describedby="search-addon"/>
                                <span class="input-group-text border-0 bg-info" id="search-addon" style="border-radius: 10px;">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <!-- <div class="col-sm-8 d-flex flex-row-reverse">
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#ajouterAE">
                                <i class="fas fa-plus-circle"></i>
                                Créer une autorisation d'enlèvement
                            </button>
                            <CreateAE/>
                        </div> -->
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
                                <button type="button" class="btn btn-warning" title="Voir l'autorisation" @click="router.push({name: 'show autorisation', params : { numeroAE:a.numeroAE}})">
                                    <i class="fas fa-eye"></i>
                                     <!-- Voir l'autorisation -->
                                </button>
                                <button type="button" class="btn btn-warning" title="Générer la facture" style="margin-left: 5px;" @click="router.push({name: 'show facture'})">
                                    <i class="fas fa-file-invoice" ></i>
                                     <!-- Générer la facture -->
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
    import { onMounted } from "vue";
    import {useRouter} from "vue-router";
    // import CreateAE from "./CreateAE.vue";
    import AutorisationFonction from "../../Service/Autorisation.js";

    const router = useRouter()

    const {afficherListAE, autorisation} = AutorisationFonction()

    onMounted(afficherListAE);
        
</script>