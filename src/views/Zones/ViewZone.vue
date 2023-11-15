<template>
    <div>
        <UpdateZoneForm :idZone="id"/>
        <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row d-flex justify-content-between align-items-center">
                        <h2>Zones</h2>
                        <div class="col-sm-4 mt-2">
                            <div class="input-group rounded">
                                <input type="search" class="form-control rounded" placeholder="Entrer le nom de la zone à rechercher" aria-label="Search" aria-describedby="search-addon"   @input="rechercherZone($event.target.value)"/>
                                <span class="input-group-text border-0 bg-info" id="search-addon" style="border-radius: 10px;">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <div class="col-sm-6 d-flex flex-row-reverse">
                            <button type="button" class="btn btn-info"  data-bs-toggle="modal" data-bs-target="#ajouterZone" >
                                Ajouter zones
                            </button>
                            <CreateZoneForm @find-all="afficherZones"/>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover  mt-3">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="zone in zones" :key="zone.idZone">
                            <td>{{zone.nomZone}}</td>
                            <td>
                                <!-- <button type="button" class="btn btn-warning" @click="modifier(zone.idZone)"  data-bs-toggle="modal" data-bs-target="#modifierZone">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-danger" style="margin-left: 5px;" @click="supprimer(zone.idZone)">
                                    <i class="fas fa-trash"></i>
                                </button> -->
                                <button type="button" class="btn btn-warning" title="Ajouter un secteur" style="margin-left: 5px;" data-bs-toggle="modal" data-bs-target="#ajouterSecteur" @click="modifier(zone.idZone)">
                                    <i class="fas fa-plus-circle"></i>
                                    Ajouter secteur
                                </button>
                            </td>
                        </tr>			 
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <CreateSecteur :idZone="id"/>	
</template>

<script setup>
	// import Swal from 'sweetalert2';
    import { onMounted, ref} from 'vue';
    import CreateZoneForm from './CreateZoneForm.vue';
    // import UpdateZoneForm from './UpdateZoneForm.vue';
    import CreateSecteur from '../Secteurs/CreateSecteur.vue';
    import ZonesFonction from '../../Service/ZonesService.js'

    const {afficherZones, zones, rechercherParNomZone} = ZonesFonction()
    const id = ref(0);

    // const supprimer = async (z) => {
    //     await supprimerZone(z)
    //     Swal.fire({
	// 			title: 'Succès',
	// 			text: 'La zone a été supprimée avec succès',
	// 			icon: 'success',
	// 			customClass: {
	// 				confirmButton: 'success-button-class',
	// 			},
	// 		})
    //     .then(afficherZones)
    // }
    const modifier = (theID) => {
        id.value = theID;
    }

    const rechercherZone = (nomZone) => {
        if(nomZone.length > 0) {
            rechercherParNomZone(nomZone)
        } else {
            afficherZones()
        } 
    }

    onMounted(afficherZones)
</script>

