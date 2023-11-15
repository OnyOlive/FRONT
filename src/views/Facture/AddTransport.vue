<template>
    <div id="ajouterTransport" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <form @submit.prevent >
                    <div class="modal-header">						
                        <h4 class="modal-title">Ajouter un transport</h4>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">					
                        <div class="form-group">
                            <label>Transport</label>
                            <input type="text" class="form-control" name="nomZone" v-model="factureForm.addTransport" required>
                        </div>				
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-secondary" data-bs-dismiss="modal" value="ANNULER">
                        <input type="submit" class="btn btn-warning" data-bs-dismiss="modal"  @click="addTransport" value="AJOUTER TRANSPORT">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
    

</script>