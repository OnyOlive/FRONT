<template>
    <div>
        <!-- <UpdateVariete/> -->
        <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <h2>Variétés</h2>
                        <div class="col-sm-4 mt-2">
                            <div class="input-group rounded">
                                <input type="search" class="form-control rounded" placeholder="Entrer le terme de recherche" aria-label="Search" aria-describedby="search-addon" @input="rechercheParVariete($event.target.value)"/>
                                <span class="input-group-text border-0 bg-info" id="search-addon" style="border-radius: 10px;">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <div class="col-sm-8 d-flex flex-row-reverse">
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#ajouterVariete">
                                Ajouter variété
                            </button>
                            <CreateVariete @afficher="afficherVarietes"/>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover mt-3">
                    <thead>
                        <tr>
                            <!-- <th>ID</th> -->
                            <th>Nom</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="variete in varietes" :key="variete.idVariete">
                            <!-- <td>{{ variete.idVariete }}</td> -->
                            <td>{{ variete.nomVariete }}</td>
                            <td>
                                <!-- <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modifierVariete">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-danger"  style="margin-left: 5px;" @click="supprimer(variete.idVariete)">
                                    <i class="fas fa-trash"></i>
                                </button> -->
                                <button type="button" class="btn btn-warning" title="Ajouter un grade" style="margin-left: 5px;" data-bs-toggle="modal" data-bs-target="#ajouterGrade" @click="modifierID(variete.idVariete)">
                                    <i class="fas fa-plus-circle"></i>
                                    Ajouter grade
                                </button>
                            </td>
                        </tr>				 
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <CreateGrade :idVariete="id"/>
</template>

<script setup>
	// import Swal from 'sweetalert2';
    import { onMounted, ref } from "vue";
    import CreateVariete from "./CreateVariete.vue";
    import CreateGrade from "../Grades/CreateGrade.vue";
    // import UpdateVariete from "./UpdateVariete.vue";
    import VarieteFonction from "../../Service/VarietesService.js"

    const id = ref(0)
    const {afficherVarietes, varietes, rechercherVariete} = VarieteFonction()

    // const supprimer = async (v) => {
    //     await supprimerVariete(v)
    //     Swal.fire({
	// 			title: 'Succès',
	// 			text: 'La variété a été supprimée avec succès',
	// 			icon: 'success',
	// 			customClass: {
	// 				confirmButton: 'success-button-class',
	// 			},
	// 		})
    //     .then(afficherVarietes)
    // }

    const modifierID = async (newID) => {
        id.value = newID
    }

    const rechercheParVariete = (nomVariete) => {
        if(nomVariete.length > 0) {
            rechercherVariete(nomVariete)
        } else {
            afficherVarietes();
        }
    }

    onMounted(afficherVarietes)
</script>