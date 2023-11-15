<template>
    <div id="modifierMagasin" class="modal">
		<div class="modal-dialog">
			<div class="modal-content">
				<form @submit.prevent >
					<div class="modal-header">						
						<h4 class="modal-title">Modifier un magasin</h4>
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
						<input type="button" class="btn btn-default" data-bs-dismiss="modal" value="ANNULER">
						<input type="submit" class="btn btn-success" value="MODIFIER" @click="modifier(props.idMagasin, magasinsForm)">
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive, toRef, watch } from "vue";
import MagasinFonction from "../../Service/MagasinsService";

    const magasinsForm = reactive({
        nomMagasin: null,
		secteur: {
			nomSecteur: null
		}
    })

	const {modifierMagasin, rechercherParID, magasinsByID} = MagasinFonction()

	const props = defineProps({
		idMagasin: {
			type: Number,
			required: true
		}
	})

	const emit = defineEmits(["afficher"])

	const modifier = async (idMagasin) => {
		await modifierMagasin(idMagasin, magasinsForm)
		.then(emit("afficher"))
		magasinsForm.nomMagasin = null
		magasinsForm.secteur.nomSecteur = null
	}

	const idMagasin = toRef(props, 'idMagasin')

	watch(idMagasin, async (newValue, oldValue) => {
		await rechercherParID(newValue)
		.then(( ) => {
			magasinsForm.nomMagasin = magasinsByID.value.nomMagasin
			magasinsForm.secteur.nomSecteur = magasinsByID.value.secteur.nomSecteur
		})
	})


</script>
<style>

</style>