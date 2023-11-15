<template>
    <div id="ajouterGrade" class="modal">
		<div class="modal-dialog">
			<div class="modal-content">
				<form @submit.prevent >
					<div class="modal-header">						
						<h4 class="modal-title">Ajouter une grade</h4>
						<button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">					
						<div class="form-group">
							<label>Nom</label>
							<input type="text" class="form-control" name="nomGrade" v-model="gradesForm.nomGrade"  required>
						</div>
                        <div class="form-group">
							<label>Prix unitaire</label>
							<input type="text" class="form-control" name="prixUnitaire" v-model="gradesForm.prixUnitaire" required>
						</div>
						<div class="form-group">
							<label>Variété</label>
							<!-- <select class="form-select rounded" id="search-type"  v-model="gradesForm.varietes.nomVariete" required>
                                <option v-for="v in varietes" :key="v.idVariete">{{ v.nomVariete }}</option>
							</select> -->
							<input type="text" class="form-control" name="" v-model="gradesForm.varietes.nomVariete" required>
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
	import Swal from 'sweetalert2';
	import { watch, toRef, reactive } from "vue";
	import GradesFonction from "../../Service/GradesService.js";
	import VarieteFonction from "../../Service/VarietesService.js";

	const gradesForm = reactive({
		nomGrade: null,
		prixUnitaire: null,
		varietes: {
			nomVariete:null
		}
	})

	const {ajouterGrade} = GradesFonction()
	// const {afficherVarietes, varietes} = VarieteFonction()
	const {rechercherParID, varieteByID} = VarieteFonction();

	const emit = defineEmits(["afficher"])

	const ajouter = async () => {
		try{
			await ajouterGrade(gradesForm)
			// .then(emit("afficher"));
			Swal.fire({
				title: 'Succès',
				text: 'Le grade a été ajouté avec succès',
				icon: 'success',
				customClass: {
					confirmButton: 'success-button-class',
				},
			});
			emit("afficher")
			gradesForm.nomGrade = null
			gradesForm.prixUnitaire = null
			gradesForm.varietes.nomVariete = null
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

	const props = defineProps({
		idVariete: {
			type: Text,
			required: true
		}
	})

	const idVariete = toRef(props, 'idVariete')
	
	watch(idVariete, async (newValue, oldValue) => {
		await rechercherParID(newValue)
		.then(() => {
			console.log(varieteByID.value.nomVariete);
			gradesForm.varietes.nomVariete = varieteByID.value.nomVariete;
		})
	})

	// onMounted(afficherVarietes)

</script>