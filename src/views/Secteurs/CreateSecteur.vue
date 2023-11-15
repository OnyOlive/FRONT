<template>
    <div id="ajouterSecteur" class="modal">
		<div class="modal-dialog">
			<div class="modal-content">
				<form @submit.prevent >
					<div class="modal-header">						
						<h4 class="modal-title">Ajouter un secteur</h4>
						<button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">					
						<div class="form-group">
							<label>Nom</label>
							<input type="text" class="form-control" name="nomSecteur" v-model="secteursForm.nomSecteur" required>
						</div>
						<div class="form-group">
							<label>Zone</label>
                            <!-- <select class="form-select rounded" id="search-type"  v-model="secteursForm.zone.nomZone" required>
                                <option v-for="z in zones" :key="z.idZone">{{ z.nomZone }}</option>
							</select> -->
							<input type="text" class="form-control" name="lieuMagasin" v-model="secteursForm.zone.nomZone" required>
						</div>			
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-secondary" data-bs-dismiss="modal" value="ANNULER">
						<input type="submit" class="btn btn-warning" data-bs-dismiss="modal" value="AJOUTER" @click="ajout">
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Swal from 'sweetalert2';
	import { reactive, watch, toRef } from "vue";
	import SecteursFonction from "../../Service/SecteursService.js";
	import ZonesFonction from '../../Service/ZonesService';

    const secteursForm = reactive({
        nomSecteur: null,
		zone: {
			nomZone:null
		}
    })

	const {ajouterSecteur} = SecteursFonction()
	const {rechercherParID, zone} = ZonesFonction()

	const props = defineProps({
		idZone: {
			type: Text,
			required: true
		}
	})

	const emit = defineEmits(["findAll"])

	const ajout = async () => {
		try{
			await ajouterSecteur(secteursForm)
			emit("findAll")
			Swal.fire({
				title: 'Succès',
				text: 'Le secteur a été ajouté avec succès',
				icon: 'success',
				customClass: {
					confirmButton: 'success-button-class',
				},
			});
			secteursForm.nomSecteur = null
			secteursForm.zone.nomZone = null
		} catch (error) {
			Swal.fire({
				title: 'Erreur',
				text: error,
				icon: 'error',
				customClass: {
					confirmButton: 'error-button-class',
				},
			});
		}
	}

	const idZone = toRef(props, 'idZone');

	watch(idZone, async (newValue, oldValue) => {
		await rechercherParID(newValue)
		.then(() => {
			secteursForm.zone.nomZone = zone.value.nomZone;
		})
	})

	// onMounted(allZone)

</script>
<style>
	.success-button-class {
	background-color: #00f5fd; 
	color: rgb(0, 0, 0); 
	border: 2px solid #ffe600; 
	}

	.error-button-class {
	background-color: #f44336;
	color: white; 
	border: 2px solid #d32f2f; 
	}
</style>