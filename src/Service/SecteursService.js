import { ref } from "vue";
import monaxios from "../axios.js";

export default function SecteursFonction() {
    const secteurs = ref([])
    const secteursByID = ref([])
    const zones = ref([])

    const afficherSecteurs = async () => {
        await monaxios.get("/secteurs/read")
        .then(response => {
            secteurs.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const ajouterSecteur = async (secteursForm) => {
        console.log("aaaaaa" + secteursForm)
        await monaxios.post("/secteurs/create",{...secteursForm})
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherParID = async (idSecteur) => {
        await monaxios.get(`/secteurs/readByID/${idSecteur}`)
        .then(response => {
            secteursByID.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherParNomSecteur = async (nomSecteur) => {
        await monaxios.get(`/secteurs/readBySecteur/${nomSecteur}`)
        .then(response => {
            secteurs.value = response.data
        })
        .catch(error => {
            throw error.response.data.message
        })
    }

    const rechercherParZone = async (nomZone) => {
        await monaxios.get(`/secteurs/readByZone/${nomZone}`)
        .then(response => {
            secteurs.value = response.data
        })
    }

    const modifierSecteur = async (idSecteur, secteursForm) => {
        await monaxios.put(`/secteurs/update/${idSecteur}`,{...secteursForm})
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const supprimerSecteur = async (idSecteur) => {
        await monaxios.delete(`/secteurs/delete/${idSecteur}`)
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const allZone = async () => {
        await monaxios.get("/zones/read")
        .then(response => {
            zones.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    return {
        zones,
        secteurs,
        secteursByID,
        afficherSecteurs,
        ajouterSecteur,
        modifierSecteur,
        supprimerSecteur,
        rechercherParID,
        allZone,
        rechercherParNomSecteur,
        rechercherParZone
    }
}