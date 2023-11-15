<template>
    
    <UpdateMagasinForm :id-magasin="id"/>
    <div>
        <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row d-flex justify-content-between align-items-center">
                        <h2>Magasins</h2>
                        <div class="col-sm-6 mt-2">
                            <div class="input-group rounded">
                                <div class="input-group-prepend">
                                    <select class="form-select rounded" id="search-type" title="Rechercher par" v-model="recherchePar">
                                        <option value="zone">zone</option>
                                        <option value="secteur">secteur</option>
                                        <option value="magasin">magasin</option>
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
                        <div class="col-sm-6 d-flex flex-row-reverse">
                            <!-- <button type="button" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#ajouterMagasin" >
                                Ajouter magasin
                            </button> -->
                        </div>
                            <!-- <CreateMagasinForm @afficher="afficherMagasin"/> -->
                    </div>
                </div>
                <table class="table table-striped table-hover mt-3">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Secteur</th>
                            <th>Zone</th>
                            <!-- <th>Actions</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="magasin in magasins" :key="magasin.idMagasin">
                            <!-- <td>{{magasin.idMagasin}}</td> -->
                            <td>{{magasin.nomMagasin}}</td>
                            <td>{{magasin.secteur.nomSecteur}}</td>
                            <td>{{magasin.secteur.zone.nomZone}}</td>
                            <!-- <td>
                                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modifierMagasin" @click="modifierID(magasin.idMagasin)">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#" style="margin-left: 5px;"  @click="supprimer(magasin.idMagasin)">
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
    import { onMounted, ref, watch} from 'vue';
    // import CreateMagasinForm from './CreateMagasinForm.vue';
    // import UpdateMagasinForm from './UpdateMagasinForm.vue';
    import MagasinFonction from '../../Service/MagasinsService.js'; 

    const {
        magasins,
        afficherMagasin,
        // supprimerMagasin,
        rechercheParNomMagasin,
        rechercheParSecteur,
        rechercheParZone} = MagasinFonction()

    const id = ref(0)
    const recherchePar = ref('zone');
    const termeRecherche = ref('');

    // const modifierID = (newID) => {
    //     id.value = newID
    // }

    // const supprimer = async (idMagasin) => {
    //     await supprimerMagasin(idMagasin)
    //     Swal.fire({
	// 			title: 'Succès',
	// 			text: 'Le magasin a été supprimé avec succès',
	// 			icon: 'success',
	// 			customClass: {
	// 				confirmButton: 'success-button-class',
	// 			},
	// 		})
    //     .then(afficherMagasin)
    // }

    const rechercherParMagasin = (nomMagasin) => {
        if(nomMagasin.length > 0) {
            rechercheParNomMagasin(nomMagasin)
        } else {
            afficherMagasin()
        }
    }

    const rechercherParSecteur = (nomSecteur) => {
        if(nomSecteur.length > 0) {
            rechercheParSecteur(nomSecteur)
        } else {
            afficherMagasin()
        }
    }

    const rechercherParZone = (nomZone) => {
        if(nomZone.length > 0) {
            rechercheParZone(nomZone)
        } else {
            afficherMagasin()
        }
    }

    watch([recherchePar, termeRecherche], ([nouvelleRecherchePar, nouveauTermeRecherche]) => {
        rechercher(nouvelleRecherchePar, nouveauTermeRecherche);
    });

    const rechercher = (recherchePar, termeRecherche) => {
        if (recherchePar === 'zone') {
            rechercherParZone(termeRecherche);
        } else if (recherchePar === 'secteur') {
            rechercherParSecteur(termeRecherche);
        } else if (recherchePar === 'magasin'){
            rechercherParMagasin(termeRecherche);
        }
    };
    

    onMounted(afficherMagasin)
</script>

