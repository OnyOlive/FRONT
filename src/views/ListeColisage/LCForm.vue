<template>
	<div id="LCForm" class="modal" >
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div v-if="etape === 1">
					<form @submit.prevent >	
						<div class="modal-header">						
							<h4 class="modal-title">Liste de colisage</h4>
							<button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-hidden="true" @click="closeModal">&times;</button>
						</div>
						<div class="modal-body">
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label>LC N°</label>
										<input type="text" class="form-control" name="" v-model="colisageHeader.numeroLC" required>
									</div>					
									<div class="form-group">
										<label>Laissez-passer N°</label>
										<input type="text" class="form-control" name="" v-model="colisageHeader.numeroLaissezPasser" required>
									</div>
										
									<div class="form-group">
										<label>Variété</label>
										<select class="form-select rounded" id="search-type"  v-model="colisageHeader.varietes.nomVariete"  required>
											<option v-for="v in varietes" :key="v.idVariete">{{ v.nomVariete }}</option>
										</select>
									</div>
									<div class="form-group">
										<label>Secteur</label>
										<input type="text" class="form-control" name="" v-model="colisageHeader.secteur" required>
									</div>
									<div class="form-group">
										<label>Magasin</label>
										<input type="text" class="form-control" name="" v-model="colisageHeader.magasins.nomMagasin" required>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Chauffeur</label>
										<input type="text" class="form-control" name="" v-model="colisageHeader.nomChauffeur" required>
									</div>
									<div class="form-group">
										<label>N° Camion</label>
										<input type="text" class="form-control" name="" v-model="colisageHeader.numeroCamion" required>
									</div>
									<div class="form-group">
										<label>Lieu de départ</label>
										<input type="text" class="form-control" name="" v-model="colisageHeader.lieuDepart" required>
									</div>
									<div class="form-group">
										<label>Destination</label>
										<input type="text" class="form-control" name="" v-model="colisageHeader.destination" required>
									</div>
									<div class="form-group">
										<label>Année d'emballage</label>
										<!-- <select v-model="selectedYear" id="annee" class="form-select rounded" style="width: 40%;">
											<option v-for="year in years" :key="year" :value="year">{{ year }}</option>
										</select> -->
										<input type="text" class="form-control" name="" v-model="colisageHeader.emballage" required>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<input type="button" class="btn btn-secondary px-5" data-bs-dismiss="modal" value="ANNULER">
							<input type="submit" class="btn btn-info px-5 m-lg-2" value="SUIVANT" @click="enregistrerHeader" v-if="etape < nombreTotalEtapes">
						</div>
					</form>
				</div>
	
				<div v-if="etape === 2">
					<form @submit.prevent >	
						<div class="modal-header">						
							<h4 class="modal-title">Liste de colisage N° {{ colisageHeader.numeroLC }} </h4>
							<button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
						</div>
						<div class="modal-body">
							<div class="form-group">
								<label>N° de balle</label>
								<input type="number" class="form-control" name="" v-model="colisageTable.numeroBalle" required>
							</div>	
							<div class="form-group">
								<label>Année de récolte</label>
								<!-- <select v-model="selectedRecolteYear" id="annee" class="form-select rounded" style="width: 40%;">
									<option v-for="year in years" :key="year" :value="year">{{ year }}</option>
								</select> -->
								<input type="text" class="form-control" name="" v-model="colisageTable.recolte" required>
							</div>
							<div class="form-group">
								<label>Grade</label>
								<select class="form-select rounded" id="search-type"  v-model="colisageTable.grades.nomGrade"  required>
									<option v-for="g in gradesByVariete" :key="g.idGrade">{{ g.nomGrade }}</option>
								</select>
							</div>						
							<div class="form-group">
								<label>Poids brute</label>
								<input type="number" class="form-control" min="10" v-model="colisageTable.poidsBrute" required>
							</div>	
						</div>
						<div class="modal-footer">
							<input type="button" class="btn btn-secondary" data-bs-dismiss="modal" value="ANNULER">
							<input type="submit" class="btn btn-warning" value="AJOUTER" @click="remplirTable">
							<!-- <input type="submit" class="btn btn-info" value="Voir la liste" @click="router.push({name: 'show LC',params:{numeroLC:colisageHeader.numeroLC}})"> -->
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
					
</template>

<script setup> 
    import Swal from 'sweetalert2';
	import { onMounted, reactive, ref } from 'vue';
	import ColisageFonction from '../../Service/ColisageService.js';
	import VarieteFonction from '../../Service/VarietesService.js';
	import GradesFonction from '../../Service/GradesService.js';

	const colisageHeader = reactive({
		numeroLC: null,
		numeroLaissezPasser: null,
		numeroCamion: null,
		nomChauffeur: null,
		lieuDepart: null,
		destination: null,
		emballage: null,
		dateLC: null,
		varietes:{
			nomVariete:null
		},
		magasins:{
			nomMagasin:null
		},
		secteur:null
	})

	const colisageTable = reactive({
		numeroBalle:null,
		recolte:null,
		grades: {
			nomGrade:null
		},
		poidsBrute:null,
		colisage: {
			numeroLC: null,
			varietes:{
				nomVariete: null
			}
		}
	})
	const {afficherVarietes, varietes} = VarieteFonction() 
	const {rechercherParVariete, gradesByVariete} = GradesFonction()
	const {ajouterHeader, ajouterTable} = ColisageFonction()
	const etape = ref(1);
	const nombreTotalEtapes = 3;

	const passerAEtapeSuivante = () => {
		if (etape.value < nombreTotalEtapes) {
			etape.value += 1;
		}
	};
	const emit = defineEmits(["afficher"])
	const remplirTable = async() => {
		try {
			// colisageTable.recolte = selectedRecolteYear;
			await ajouterTable(colisageTable)
			emit("afficher");
			Swal.fire({
				title: 'Succès',
				text: 'Ajouté avec succès',
				icon: 'success',
				customClass: {
					confirmButton: 'success-button-class', 
				},
			});
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

	const enregistrerHeader =  async () => {
		try{
			// colisageHeader.emballage = selectedYear;
			await ajouterHeader(colisageHeader)
			colisageTable.colisage.numeroLC = colisageHeader.numeroLC
			colisageTable.colisage.varietes.nomVariete = colisageHeader.varietes.nomVariete
			rechercherParVariete(colisageTable.colisage.varietes.nomVariete);
			passerAEtapeSuivante();
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

	// Fonction pour générer la liste des années de 2020 à 2040
	const generateYears = () => {
		const startYear = 2020;
		const endYear = 2040;
		const years = [];
		for (let year = startYear; year <= endYear; year++) {
			years.push(year);
		}
		return years;
	};

	// Initialisation de la liste des années
	const years = generateYears();

	// Variable pour stocker l'année sélectionnée
	const selectedYear = ref(years[0]);
	const selectedRecolteYear = ref(years[0]);

	onMounted(afficherVarietes)
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