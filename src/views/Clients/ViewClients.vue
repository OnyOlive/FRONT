<template>
    <div>
        <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <h2>Sociétés clients</h2>
                        <div class="col-sm-4 mt-2">
                            <div class="input-group rounded">
                                <input type="search" class="form-control rounded" placeholder="Entrer le nom de la société" aria-label="Search" aria-describedby="search-addon" @input="rechercheSociete($event.target.value)"/>
                                <span class="input-group-text border-0 bg-info" id="search-addon" style="border-radius: 10px;">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <div class="col-sm-8 d-flex flex-row-reverse">
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#ajouterSociete">
                                Ajouter société
                            </button>
                            <CreateClients @afficher="afficherSociete"/>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover mt-3">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Lieu</th>
                            <!-- <th>Actions</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="s in societes" :key="s.idSociete">
                            <td>{{ s.nomSociete }}</td>
                            <td>{{ s.secteurSociete }}</td>
                            <!-- <td>
                                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#" style="margin-left: 5px;" @click="supprimer(s.idSociete)">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td> -->
                        </tr>				 
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
// import Swal from 'sweetalert2';
import CreateClients from './CreateClients.vue';
import SocieteFonction from '../../Service/SocieteService';
import { onMounted } from 'vue';

const {afficherSociete, societes, rechercherSociete} = SocieteFonction()

// const supprimer = async (idSociete) => {
//     await supprimerSociete(idSociete)
//     Swal.fire({
// 				title: 'Succès',
// 				text: 'La société a été supprimée avec succès',
// 				icon: 'success',
// 				customClass: {
// 					confirmButton: 'success-button-class',
// 				},
// 			})
//     .then(afficherSociete)
// }

const rechercheSociete = (nomSociete) => {
    if(nomSociete.length > 0) {
        rechercherSociete(nomSociete)
    } else {
        afficherSociete();
    }
}

onMounted(afficherSociete)
</script>