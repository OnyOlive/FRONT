import { ref } from "vue";
import monaxios from "../axios.js"

export default function SocieteFonction() {
    const societes = ref([])
    const societeByID = ref({})

    const afficherSociete = async () => {
        await monaxios.get("/societes/read")
        .then(response => {
            societes.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const ajouterSociete = async (societeForm) => {
        await monaxios.post("/societes/create",{...societeForm})
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const modifierSociete = async (idSociete, societeForm) => {
        await monaxios.put(`/societes/update/${idSociete}`,{...societeForm})
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const supprimerSociete = async (idSociete) => {
        await monaxios.delete(`/societes/delete/${idSociete}`)
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherParID = async (idSociete) => {
        await monaxios.get(`/societes/readByID/${idSociete}`)
        .then(response => {
            societeByID.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherSociete = async (nomSociete) => {
        await monaxios.get(`/societes/readByNomSociete/${nomSociete}`)
        .then(response => {
            societes.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    return {
        societes,
        societeByID,
        afficherSociete,
        ajouterSociete,
        modifierSociete,
        supprimerSociete,
        rechercherParID,
        rechercherSociete
    }
}

