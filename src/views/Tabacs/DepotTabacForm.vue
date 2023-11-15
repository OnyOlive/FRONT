<template>
    <div id="depotTabac" class="modal">
		<div class="modal-dialog">
			<div class="modal-content">
				<form @submit.prevent >
					<div class="modal-header">						
						<h4 class="modal-title">Dépot de tabacs</h4>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label>Récolte</label>
							<input type="number" class="form-control" name="" required>
						</div>					
						<div class="form-group">
							<label>Provenance</label>
							<input type="text" class="form-control" name="" required>
						</div>
						<div class="form-group">
							<label>Variété</label>
							<input type="text" class="form-control" name="" required>
						</div>
						<div class="form-group">
							<label>Grade</label>
							<input type="text" class="form-control" name="" required>
						</div>	
						<div class="form-group">
							<label>Magasin</label>
							<input type="text" class="form-control" name="" required>
						</div>
						<div class="form-group">
							<label>Poids</label>
							<input type="text" class="form-control" name="" required>
						</div>
						<div class="form-group">
							<label>Date de dépôt</label>
							<input type="date" class="form-control" name="" required>
						</div>				
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-default" data-dismiss="modal" value="ANNULER">
						<input type="submit" class="btn btn-success" value="AJOUTER">
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style>

</style>