<template>
    <div id="ajouterSociete" class="modal">
		<div class="modal-dialog">
			<div class="modal-content">
				<form @submit.prevent >
					<div class="modal-header">						
						<h4 class="modal-title">Ajouter une société</h4>
						<button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">					
						<div class="form-group">
							<label>Nom</label>
							<input type="text" class="form-control" name="nomGrade" v-model="societesForm.nomSociete"  required>
						</div>	
						<div class="form-group">
							<label>Lieu</label>
							<input type="text" class="form-control" name="nomGrade" v-model="societesForm.secteurSociete"  required>
						</div>
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-secondary" data-bs-dismiss="modal" value="ANNULER">
						<input type="submit" class="btn btn-warning" value="AJOUTER" @click="ajouter">
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Swal from "sweetalert2";
	import { reactive } from "vue";
	import SocieteFonction from "../../Service/SocieteService.js";

	const societesForm = reactive({
		nomSociete: null,
		secteurSociete: null
	})

	const {ajouterSociete} = SocieteFonction()

	const emit = defineEmits(["afficher"])

	const ajouter = async () => {
		try{
			await ajouterSociete(societesForm)
			emit("afficher")
			Swal.fire({
					title: 'Succès',
					text: 'La société a été ajoutée avec succès',
					icon: 'success',
					customClass: {
						confirmButton: 'success-button-class', 
					},
				});
			societesForm.nomSociete = null;
			societesForm.secteurSociete = null;
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
</script>