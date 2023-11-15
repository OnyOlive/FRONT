import monaxios from "../axios";
import {ref} from "vue";

export default function VarieteFonction() {
    const varietes = ref([])
    const varieteByID = ref({})

    const afficherVarietes = async () => {
        await monaxios.get("/varietes/read")
        .then(response => {
            varietes.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const ajouterVariete = async (VarietesForm) => {
        await monaxios.post("/varietes/create",{...VarietesForm})
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const supprimerVariete = async (idVariete) => {
        await monaxios.delete(`/varietes/delete/${idVariete}`)
        .catch(error => {
            throw error.response.data.message;

        })
    }

    const modifierVariete = async (idVariete) => {
        await monaxios.put(`/varietes/update/${idVariete}`)
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherVariete = async (nomVariete) => {
        await monaxios.get(`/varietes/readByNomVariete/${nomVariete}`)
        .then(response => {
            varietes.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherParID = async (idVariete) => {
        await monaxios.get(`/varietes/readByID/${idVariete}`)
        .then(response => {
            varieteByID.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    return {
        afficherVarietes, 
        varietes,
        varieteByID,
        ajouterVariete,
        supprimerVariete,
        modifierVariete,
        rechercherVariete,
        rechercherParID
    }
}