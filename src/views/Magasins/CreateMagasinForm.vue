<template>
    <div id="ajouterMagasin" class="modal">
		<div class="modal-dialog">
			<div class="modal-content">
				<form @submit.prevent >
					<div class="modal-header">						
						<h4 class="modal-title">Ajouter un magasin</h4>
						<button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">					
						<div class="form-group">
							<label>Nom</label>
							<input type="text" class="form-control" name="nomMagasin" v-model="magasinsForm.nomMagasin" required>
						</div>
						<div class="form-group">
							<label>Secteur</label>
							<input type="text" class="form-control" name="lieuMagasin" v-model="magasinsForm.secteur.nomSecteur" required>
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
	import { reactive, toRef , watch} from "vue";
	import MagasinFonction from "../../Service/MagasinsService";
	import SecteursFonction from "../../Service/SecteursService";

    const magasinsForm = reactive({
        nomMagasin: null,
		secteur: {
			nomSecteur: null
		}
    })

	const {ajouterMagasin} = MagasinFonction()
	const {rechercherParID, secteursByID} = SecteursFonction()

	const props = defineProps({
		idSecteur: {
			type: Text,
			required: true
		}
	})

	const emit = defineEmits(["afficher"])

	const ajout = async () => {
		try{
			await ajouterMagasin(magasinsForm)
			emit("afficher")
			Swal.fire({
						title: 'Succès',
						text: 'Le magasin a été ajouté avec succès',
						icon: 'success',
						customClass: {
							confirmButton: 'success-button-class',
						},
					});
			magasinsForm.nomMagasin = null
			magasinsForm.secteur.nomSecteur = null
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

	const idSecteur = toRef(props, 'idSecteur')
	
	watch(idSecteur, async (newValue, oldValue) => {
		await rechercherParID(newValue)
		.then(() => {
			magasinsForm.secteur.nomSecteur = secteursByID.value.nomSecteur
		})
	})
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