<template>
	
    <div id="modifierZone" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <form @submit.prevent >
                    <div class="modal-header">						
                        <h4 class="modal-title">Modifier une zone</h4>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">					
                        <div class="form-group">
                            <label>Nom</label>
                            <input type="text" class="form-control" name="nomZone" v-model="zonesForm.nomZone" required>
                        </div>				
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" data-bs-dismiss="modal" value="ANNULER">
                        <input type="submit" class="btn btn-success" data-bs-dismiss="modal" value="MODIFIER" @click="modifier(props.idZone, zonesForm)">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import {  reactive, toRef, watch } from "vue";
import ZonesFonction from "../../Service/ZonesService";

const zonesForm = reactive({
    nomZone: null
})

const {modifierZone, zone, rechercherParID} = ZonesFonction()

const emit = defineEmits(["findAll"])

const modifier = async (idZone, zonesForm) => {
    await modifierZone(idZone, zonesForm)
    .then(emit("findAll"));
    zonesForm.nomZone = null
}

const props = defineProps({
    idZone: {
        type: Number,
        required: true
    }
})

const idZone = toRef(props, 'idZone');

watch(idZone, async (newValue, oldValue) => {
    await rechercherParID(newValue)
    .then(() => {
        zonesForm.nomZone = zone.value.nomZone;
    })
})

</script>
<style>

</style>