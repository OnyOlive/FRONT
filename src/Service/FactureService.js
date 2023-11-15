import { ref } from 'vue';
import monaxios from '../axios.js';

export default function FactureFonction() {
    const factures = ref([])
    const facturesByNum = ref({})
    const factureGenerate = ref({})

    const afficherListFacture = async () => {
        await monaxios.get("/factures/readAll")
        .then(response => {
            factures.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const genererFacture = async() => {
        await monaxios.post(`/factures/create`)
        .then(response => {
            factureGenerate.value = response.data
        })
        .catch(error => {
            throw error.response.data.message
        })
    }

    const rechercherParNumFacture = async (numeroFacture) => {
        await monaxios.get(`/factures/readByNumFacture/${numeroFacture}`)
        .then(response => {
            facturesByNum.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    return {
        factures,
        facturesByNum,
        factureGenerate,
        afficherListFacture,
        rechercherParNumFacture,
        genererFacture
    }
}