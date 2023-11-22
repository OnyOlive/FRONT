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
						<div class="row">
							<div class="form-group">
								<label>N° de l'autorisation d'enlèvement </label>
								<input type="text" class="form-control" name="" v-model="autorisation.numeroAE"  required>
							</div>
							<div class="col-md-6">					
								<div class="form-group">
									<label>Nom secteur</label>
									<input type="text" class="form-control" name="" v-model="autorisation.secteurs.nomSociete" required>
								</div>	
								<div class="form-group">
									<label>Nom société</label>
									<input type="text" class="form-control" name="" v-model="autorisation.societeClients.nomSociete" required>
								</div>
								<div class="form-group">
									<label>Poids tabacs à livrer</label>
									<input type="text" class="form-control" name="" v-model="autorisation.poidsAlivrer" required>
								</div>
								<div class="form-group">
									<label>Variété</label>
									<input type="text" class="form-control" name="" v-model="autorisation.varietes.nomVariete" required>
								</div>
								<div class="form-group">
									<label>Début de la validité</label>
									<input type="text" class="form-control" name="" v-model="autorisation.dateDebutValidite" required>
								</div>									
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label>Provenance</label>
									<input type="text" class="form-control" name="" v-model="autorisation.magasins.nomMagasin" required>
								</div>
								<div class="form-group">
									<label>Destination</label>
									<input type="text" class="form-control" name="" v-model="autorisation.destination" required>
								</div>								
								<div class="form-group">
									<label>N° Décision</label>
									<input type="number" min="10" class="form-control" name="" v-model="autorisation.numeroDecision" required>
								</div>
								<div class="form-group">
									<label>Date de la décision</label>
									<input type="date" class="form-control" name="" v-model="autorisation.dateDecision" required>
								</div>
								<div class="form-group">
									<label>Fin de la validité</label>
									<input type="date" class="form-control" name="" v-model="autorisation.dateFinValidite" required>
								</div>
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
	import { reactive } from 'vue';
	import {useRouter} from "vue-router";
	import AutorisationFonction from '../../Service/Autorisation.js';

	const router = useRouter();
	const {creerAE} = AutorisationFonction()

	const autorisation = reactive ({
		numeroAE: null,
		secteurs: {
			nomSecteur: null
		},
		societeClients: {
			nomSociete: null
		},
		poidsAlivrer: null,
		varietes : {
			nomVariete: null
		},
		magasins : {
			nomMagasin: null
		},
		destination: null,
		numeroDecision: null,
		dateDecision: null,
		dateDebutValidite: null,
		dateFinValidite: null
	})

	const emit = defineEmits(["afficher"])

	const creer = async()  => {
		try{
			await creerAE(autorisation)
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