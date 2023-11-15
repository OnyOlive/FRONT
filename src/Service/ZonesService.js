import monaxios from "../axios";
import { ref } from "vue";

export default function ZonesFonction() {
    const zones = ref([])
    const zone = ref({});

    const afficherZones = async () => {
        await monaxios.get("/zones/read")
        .then(response => {
            zones.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
            
        })
    }

    const ajouterZone = async (zoneForm) => {
        await monaxios.post("/zones/create",{...zoneForm})
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherParID = async (idZone) => {
        await monaxios.get(`zones/readByID/${idZone}`)
        .then((response) => {
            zone.value = response.data;
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherParNomZone = async (nomZone) => {
        await monaxios.get(`zones/readByZone/${nomZone}`)
        .then(response => {
            zones.value = response.data
        })
        .catch(error => {
            throw error.response.data.message
        })
    }

    const modifierZone = async (idZone, zoneForm) => {
        await monaxios.put(`/zones/update/${idZone}`,{...zoneForm})
        .then((response) => {
            console.log(response)
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const supprimerZone = async (idZone) => {
         await monaxios.delete(`/zones/delete/${idZone}`)
        .then(() => {
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    return {
        zones,
        zone,
        ajouterZone,
        afficherZones,
        modifierZone,
        supprimerZone,
        rechercherParID,
        rechercherParNomZone
    }
}