import monaxios from "../axios.js";
import {ref} from "vue";

export default function MagasinFonction() {
    const magasins = ref([])
    const magasinsByID = ref({})
    const secteurs = ref([])

    const afficherMagasin = async () => {
        await monaxios.get("/magasins/read")
        .then(response => {
            magasins.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const ajouterMagasin = async (magasinsForm) => {
        await monaxios.post('/magasins/create', {...magasinsForm})
        .catch((error) => {
            throw error.response.data.message;
        })
    }

    const supprimerMagasin = async (idMagasin) => {
        await monaxios.delete(`/magasins/delete/${idMagasin}`)
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const modifierMagasin = async (idMagasin, magasinsForm) => {
        await monaxios.put(`/magasins/update/${idMagasin}`, {...magasinsForm})
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherParID = async (idMagasin) => {
        await monaxios.get(`/magasins/readByID/${idMagasin}`)
        .then(response => {
            magasinsByID.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercheParNomMagasin = async (nomMagasin) => {
        await monaxios.get(`/magasins/readByMagasin/${nomMagasin}`)
        .then(response => {
            magasins.value = response.data
        })
        .catch(error => {
            throw error.response.data.message
        })
    }

    const rechercheParSecteur = async (nomSecteur) => {
        await monaxios.get(`/magasins/readBySecteur/${nomSecteur}`)
        .then(response => {
            magasins.value = response.data
        })
        .catch(error => {
            throw error.response.data.message
        })
    }

    const rechercheParZone = async (nomZone) => {
        await monaxios.get(`/magasins/readByZone/${nomZone}`)
        .then(response => {
            magasins.value = response.data
        })
        .catch(error => {
            throw error.response.data.message
        })
    }

    const allSecteur = async () => {
        await monaxios.get("/secteurs/read")
        .then(response => {
            secteurs.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    return {
        secteurs,
        magasins,
        magasinsByID,
        ajouterMagasin, 
        afficherMagasin, 
        supprimerMagasin, 
        modifierMagasin,
        rechercherParID,
        allSecteur,
        rechercheParNomMagasin,
        rechercheParSecteur,
        rechercheParZone
    }
}