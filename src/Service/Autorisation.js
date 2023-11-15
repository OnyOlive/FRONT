import { ref } from 'vue'
import monaxios from '../axios.js'

export default function AutorisationFonction() {
    const autorisation = ref([])
    const autorisationByNumAE = ref({})

    const afficherListAE = async () => {
        await monaxios.get("/autorisation/readAll")
        .then(response => {
            autorisation.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const creerAE = async (autorisationForm) => {
        await monaxios.post("/autorisation/create",{...autorisationForm})
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherParNumAE = async (numeroAE) => {
        await monaxios.get(`/autorisation/readByNumeroAE/${numeroAE}`)
        .then(response => {
            autorisationByNumAE.value = response.data

        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    return{
        autorisation,
        autorisationByNumAE,
        afficherListAE,
        creerAE,
        rechercherParNumAE
    }
}