<template>
    <div>
        <UpdateSecteur :id-secteur="id"/>
        <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row d-flex justify-content-between align-items-center">
                        <h2>Secteurs</h2>
                        <div class="col-sm-6 mt-2">
                            <div class="input-group rounded">
                                <div class="input-group-prepend">
                                    <select class="form-select rounded" id="search-type"  title="rechercher par" v-model="recherchePar">
                                        <option value="zone">zone</option>
                                        <option value="secteur">secteur</option>
                                    </select>
                                </div>
                                <input 
                                    type="search" class="form-control rounded pl" 
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
                        <div class="col-sm-6 d-flex flex-row-reverse">
                            <!-- <button type="button" class="btn btn-info"  data-bs-toggle="modal" data-bs-target="#ajouterSecteur" >
                                Ajouter secteur
                            </button>
                            <CreateSecteur @find-all="afficherSecteurs"/> -->
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover mt-3">
                    <thead>
                        <tr>
                            <!-- <th>ID</th> -->
                            <th>Secteur</th>
                            <th>Zone</th>
                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="secteur in secteurs" :key="secteur.idSecteur">
                            <!-- <td>{{secteur.idSecteur}}</td> -->
                            <td>{{secteur.nomSecteur}}</td>
                            <td>{{secteur.zone.nomZone}}</td>
                            <td class="text-center">
                                <!-- <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modifierSecteur" @click="modifierID(secteur.idSecteur)">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-danger" style="margin-left: 5px;" @click="supprimer(secteur.idSecteur)">
                                    <i class="fas fa-trash"></i>
                                </button> -->
                                <button type="button" class="btn btn-warning" title="Ajouter un magasin" style="margin-left: 5px;" data-bs-toggle="modal" data-bs-target="#ajouterMagasin" @click="modifierID(secteur.idSecteur)">
                                    <i class="fas fa-plus-circle"></i>
                                    Ajouter magasin
                                </button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <CreateMagasinForm :id-secteur="id"/>				 
</template>

<script setup>
    // import Swal from 'sweetalert2';
    import { onMounted, ref, watch} from 'vue';
    import SecteursFonction from '../../Service/SecteursService';
    // import CreateSecteur from './CreateSecteur.vue';
    // import UpdateSecteur from './UpdateSecteur.vue';
    import CreateMagasinForm from '../Magasins/CreateMagasinForm.vue';

    const {afficherSecteurs, secteurs, rechercherParNomSecteur, rechercherParZone} = SecteursFonction()
    const id = ref(0)
    const recherchePar = ref('zone');
    const termeRecherche = ref('');

    // const supprimer = async (s) => {
    //     await supprimerSecteur(s)
    //     Swal.fire({
	// 			title: 'Succès',
	// 			text: 'Le secteur a été supprimé avec succès',
	// 			icon: 'success',
	// 			customClass: {
	// 				confirmButton: 'success-button-class',
	// 			},
	// 		})
    //     .then(afficherSecteurs)
    // }

    const modifierID = async (newID) => {
        id.value = newID
    }

    const rechercherSecteur = (nomSecteur) => {
        if(nomSecteur.length > 0) {
            rechercherParNomSecteur(nomSecteur)
        } else {
            afficherSecteurs()
        }
    }

    const rechercheZone = (nomZone) => {
        if(nomZone.length > 0) {
            rechercherParZone(nomZone)
        }else {
            afficherSecteurs()
        }
    }

    watch([recherchePar, termeRecherche], ([nouvelleRecherchePar, nouveauTermeRecherche]) => {
        rechercher(nouvelleRecherchePar, nouveauTermeRecherche);
    });

    const rechercher = (recherchePar, termeRecherche) => {
        if (recherchePar === 'zone') {
            rechercheZone(termeRecherche);
        } else if (recherchePar === 'secteur') {
            rechercherSecteur(termeRecherche);
        }
    };

    onMounted(afficherSecteurs)
</script>

