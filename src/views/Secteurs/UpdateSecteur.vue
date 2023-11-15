<template>
    <div id="modifierSecteur" class="modal">
		<div class="modal-dialog">
			<div class="modal-content">
				<form @submit.prevent >
					<div class="modal-header">						
						<h4 class="modal-title">Modifier un secteur</h4>
						<button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">					
						<div class="form-group">
							<label>Nom</label>
							<input type="text" class="form-control" name="nomSecteur" v-model="secteursForm.nomSecteur" required>
						</div>
						<div class="form-group">
							<label>Zone</label>
							<input type="text" class="form-control" name="nomZone" v-model="secteursForm.zone.nomZone" required>
						</div>			
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-default" data-bs-dismiss="modal" value="ANNULER">
						<input type="submit" class="btn btn-success" value="MODIFIER" @click="modifier(props.idSecteur, secteursForm)">
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { reactive, toRef, watch } from "vue";
	import SecteursFonction from "../../Service/SecteursService.js";

    const secteursForm = reactive({
        nomSecteur: null,
		zone: {
			nomZone:null
		}
    })

	const {modifierSecteur, rechercherParID, secteursByID} = SecteursFonction()

	const emit = defineEmits(["findAll"])

	const modifier = async (idSecteur, secteursForm) => {
		await modifierSecteur(idSecteur, secteursForm)
		.then(emit("findAll"))
		secteursForm.nomSecteur = null;
		secteursForm.zone.nomZone = null;
	}

	const props = defineProps({
		idSecteur: {
			type: Number,
			required: true
		}
	})

	const idSecteur = toRef(props, 'idSecteur')

	watch(idSecteur, async(newValue, oldValue) => {
		await rechercherParID(newValue)
		.then(() => {
			secteursForm.nomSecteur = secteursByID.value.nomSecteur;
			secteursForm.zone.nomZone = secteursByID.value.zone.nomZone;
		})
	})

</script>