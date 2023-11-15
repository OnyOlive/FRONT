<template>
		<div id="ajouterZone" class="modal">
			<div class="modal-dialog">
				<div class="modal-content">
					<form @submit.prevent >
						<div class="modal-header">						
							<h4 class="modal-title">Ajouter une zone</h4>
							<button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
						</div>
						<div class="modal-body">					
							<div class="form-group">
								<label>Nom</label>
								<input type="text" class="form-control" name="nomZone" v-model="zonesForm.nomZone" required>
							</div>				
						</div>
						<div class="modal-footer">
							<input type="button" class="btn btn-secondary" data-bs-dismiss="modal" value="ANNULER">
							<input type="submit" class="btn btn-warning" data-bs-dismiss="modal"  @click="ajout" value="AJOUTER">
						</div>
					</form>
				</div>
			</div>
		</div>
</template>

<script setup>
	import Swal from 'sweetalert2';
	import { reactive } from "vue";
	import ZonesFonction from "../../Service/ZonesService.js";
	
	const zonesForm = reactive({
        nomZone: null
    })

	const {ajouterZone} = ZonesFonction()

	const emit = defineEmits(["findAll"])

	const ajout = async () => {
		try {
			await ajouterZone(zonesForm);
			emit("findAll");
			Swal.fire({
				title: 'Succès',
				text: 'La zone a été ajoutée avec succès',
				icon: 'success',
				customClass: {
					confirmButton: 'success-button-class', 
				},
			});
			zonesForm.nomZone = null;
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
	};
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