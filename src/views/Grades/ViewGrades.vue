<template>
    <div>
        <UpdateGrade :id-grade="id"/>
        <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <!-- <div class="col-sm-6"> -->
                        <h2>Grades</h2>
                        <div class="col-sm-6 mt-2">
                            <div class="input-group rounded">
                                <div class="input-group-prepend">
                                    <select class="form-select rounded" id="search-type" title="Recherche par" v-model="recherchePar">
                                        <option value="variete">variété</option>
                                        <option value="grade">grade</option>
                                    </select>
                                </div>
                                <input 
                                    type="search" class="form-control rounded" 
                                    placeholder="Entrer le terme de recherche" 
                                    aria-label="Search" aria-describedby="search-addon" 
                                    style="margin-left: 5px;"
                                    v-model="termeRecherche"
                                    @input="rechercher"
                                />
                                <span class="input-group-text border-0 bg-info" id="search-addon" style="border-radius: 10px;">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <!-- <div class="col-sm-6 d-flex flex-row-reverse">
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#ajouterGrade">
                                Ajouter grade
                            </button>
                            <CreateGrade @afficher="afficherGrades"/>
                        </div> -->
                    </div>
                </div>
                <table class="table table-striped table-hover mt-3">
                    <thead>
                        <tr>
                            <th>Grade</th>
                            <th>Prix unitaire</th>
                            <th>Variété</th>
                            <!-- <th>Actions</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="grade in grades" :key="grade.idGrade">
                            <!-- <td>{{ grade.idGrade }}</td> -->
                            <td>{{ grade.nomGrade }}</td>
                            <td>{{ grade.prixUnitaire }}</td>
                            <td>{{ grade.varietes.nomVariete }}</td>
                            <!-- <td>
                                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modifierGrade" @click="modifierID(grade.idGrade)">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-danger" style="margin-left: 5px;" @click="supprimer(grade.idGrade)">
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
    import { onMounted, ref, watch} from "vue";
    import CreateGrade from "./CreateGrade.vue";
    import UpdateGrade from "./UpdateGrade.vue";
    import GradesFonction from "../../Service/GradesService.js";

    const {afficherGrades, grades, rechercherParGrade, rechercheParVariete} = GradesFonction()
    const id = ref(0)
    const recherchePar = ref('variete');
    const termeRecherche = ref('');

    // const supprimer = async (g) => {
    //     await supprimerGrade(g)
    //     Swal.fire({
	// 			title: 'Succès',
	// 			text: 'La grade a été supprimée avec succès',
	// 			icon: 'success',
	// 			customClass: {
	// 				confirmButton: 'success-button-class',
	// 			},
	// 		})
    //     .then(afficherGrades)
    // }

    // const modifierID = (theID) => {
    //     id.value = theID;
    // }

    const rechercheGrade = (nomGrade) => {
        if(nomGrade.length > 0) {
            rechercherParGrade(nomGrade)
        } else {
            afficherGrades()
        }
    }

    const rechercherParVariete = (nomVariete) => {
        if(nomVariete.length > 0) {
            rechercheParVariete(nomVariete)
        }else {
            afficherGrades()
        }
    }

    watch([recherchePar, termeRecherche], ([nouvelleRecherchePar, nouveauTermeRecherche]) => {
        rechercher(nouvelleRecherchePar, nouveauTermeRecherche);
    });

    const rechercher = (recherchePar, termeRecherche) => {
        if (recherchePar === 'variete') {
            rechercherParVariete(termeRecherche);
        } else if (recherchePar === 'grade') {
            rechercheGrade(termeRecherche);
        }
    };

    onMounted(afficherGrades)
</script>