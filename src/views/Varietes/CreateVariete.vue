<template>
    <div id="ajouterVariete" class="modal">
		<div class="modal-dialog">
			<div class="modal-content">
				<form @submit.prevent >
					<div class="modal-header">						
						<h4 class="modal-title">Ajouter une variété</h4>
						<button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">					
						<div class="form-group">
							<label>Nom</label>
							<input type="text" class="form-control" name=""  v-model="VarietesForm.nomVariete" required>
						</div>			
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-secondary" data-bs-dismiss="modal" value="ANNULER">
						<input type="submit" class="btn btn-warning" data-bs-dismiss="modal" value="AJOUTER" @click="ajouter" >
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Swal from 'sweetalert2';
	import { reactive } from "vue";
	import VarieteFonction from "../../Service/VarietesService.js";

	const VarietesForm = reactive({
		nomVariete: null
	})

	const emit = defineEmits(["afficher"])

	const {ajouterVariete} = VarieteFonction()

	const ajouter = async () => {
		try{
			await ajouterVariete(VarietesForm);
			emit("afficher");
			Swal.fire({
				title: 'Succès',
				text: 'La variété a été ajoutée avec succès',
				icon: 'success',
				customClass: {
					confirmButton: 'success-button-class',
				},
			});
			VarietesForm.nomVariete = null
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