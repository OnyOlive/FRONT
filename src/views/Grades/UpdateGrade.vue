<template>
    <div id="modifierGrade" class="modal">
		<div class="modal-dialog">
			<div class="modal-content">
				<form @submit.prevent >
					<div class="modal-header">						
						<h4 class="modal-title">Modifier une grade</h4>
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
							<input type="text" class="form-control" name="nomVariete" v-model="gradesForm.varietes.nomVariete" required>
						</div>			
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-default" data-bs-dismiss="modal" value="ANNULER">
						<input type="submit" class="btn btn-success" value="AJOUTER" @click="modifier(gradesByID.value.idGrade)">
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive, toRef, watch } from "vue";
import GradesFonction from "../../Service/GradesService";

const gradesForm = reactive({
	nomGrade: null,
	prixUnitaire: null,
	varietes: {
		nomVariete:null
	}
})

const {modifierGrade, rechercherParID, gradesByID} = GradesFonction()

const emit = defineEmits(["afficher"])

const props = defineProps({
	idGrade: {
		type: Number,
		required: true
	}
})

const modifier = async (idGrade) => {
	await modifierGrade(idGrade)
	.then(emit("afficher"))
	gradesForm.nomGrade = null
	gradesForm.prixUnitaire = null
	gradesForm.varietes.nomVariete = null
}

const idGrade = toRef(props, 'idGrade');

watch(idGrade, async (newValue, oldValue) => {
	await rechercherParID(newValue)
	.then(() => {
		gradesForm.nomGrade = gradesByID.value.nomGrade;
		gradesForm.prixUnitaire = gradesByID.value.prixUnitaire;
		gradesForm.varietes.nomVariete = gradesByID.value.varietes;
	})
})

</script>