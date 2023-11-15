<template>
    <div id="ajouterAE" class="modal">
		<div class="modal-dialog">
			<div class="modal-content">
				<form @submit.prevent >
					<div class="modal-header">						
						<h4 class="modal-title">Créer une autorisation d'enlèvement</h4>
						<button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">					
						<div class="form-group">
							<label>N°</label>
							<input type="text" class="form-control" name="" v-model="autorisationForm.numeroAE"  required>
						</div>
						<div class="form-group">
							<label>N° Liste de colisage</label>
							<input type="text" class="form-control" name="" v-model="separation" required>
						</div>
						<div class="form-group">
							<label>Nom société</label>
							<input type="text" class="form-control" name="" v-model="autorisationForm.societeClients.nomSociete" required>
						</div>	
						<div class="form-group">
							<label>Immatriculation</label>
							<input type="text" class="form-control" name="" v-model="autorisationForm.immatriculation" required>
						</div>
						<div class="form-group">
							<label>Destination</label>
							<input type="text" class="form-control" name="" v-model="autorisationForm.destination" required>
						</div>	
						<div class="form-group">
							<label>Validité (jours)</label>
							<input type="number" min="10" class="form-control" name="" v-model="autorisationForm.validite" required>
						</div>	
						<div class="row">
							<div class="form-group col-md-6">
								<label for="datePicker">Date de départ du véhicule</label>
								<input type="date" v-model="autorisationForm.departVehicule" class="form-control"  required >
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-secondary" data-bs-dismiss="modal" value="ANNULER">
						<input type="submit" class="btn btn-info" data-bs-dismiss="modal" value="CREER" @click="creer">
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
import Swal from 'sweetalert2';
import { reactive, toRef , watch} from 'vue';
import {useRouter} from "vue-router";
import AutorisationFonction from '../../Service/Autorisation.js';

const router = useRouter();
const {creerAE} = AutorisationFonction()

const autorisationForm = reactive({
	numeroAE: null,
	societeClients:{
		nomSociete: null
	},
	numeroLC: null,
	immatriculation: null,
	destination: null,
	validite: null,
	departVehicule: null
})

// const props = defineProps({
// 	numeroLC: {
// 		type: Array,
// 		required: true
// 	}
// })

const props = defineProps(['selectedCheckboxes']);

const emit = defineEmits(["afficher"])

const creer = async()  => {
	await creerAE(autorisationForm)
	emit("afficher")
	Swal.fire({
		title: 'Succès',
		text: "L'autorisation a été créée avec succès",
		icon: 'success',
		customClass: {
			confirmButton: 'success-button-class',
		},
	});
	router.push({name: 'all autorisation'})
}
const selectedCheckboxes = toRef(props, 'selectedCheckboxes');

watch(selectedCheckboxes,  (newValue, oldValue) => {
	console.log("aaaaa: " + newValue[0])
	autorisationForm.numeroLC = newValue;
	// separation = autorisationForm.value.numeroLC.join(' - ');
})

</script>