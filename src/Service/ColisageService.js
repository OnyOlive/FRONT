import { ref } from "vue";
import monaxios from "../axios.js";

export default function ColisageFonction() {
    const colisages = ref([])
    const colisageTable = ref([])
    const recap = ref([])
    const colisageByID = ref({})
    const annees = ref([])

    const ajouterHeader = async (colisageHeader) => {
       await monaxios.post("/colisage/createHeader",{...colisageHeader})
        .catch(error => {
         
            throw error.response.data.message;
        })
    }

    const afficherLC = async () => {
        await monaxios.get("/colisage/readLC")
        .then(response => {
            colisages.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const ajouterTable = async (colisageTableForm) => {
        await monaxios.post("/colisage/createTable",{...colisageTableForm})
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const afficherColisageTable = async (numeroLC) => {
        await monaxios.get(`/colisage/readByNumLC/${numeroLC}`)
        .then(response => {
            colisageTable.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const recapLC = async (numeroLC) => {
        await monaxios.get(`/colisage/recap/${numeroLC}`)
        .then(response => {
            recap.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherParNumeroLC = async(numeroLC) =>{
        await monaxios.get(`/colisage/readCol/${numeroLC}`)
        .then(response => {
            colisageByID.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    } 

    const rechercherColisageParNumLC = async (numeroLC) => {
        await monaxios.get(`/colisage/readColisageByNumLC/${numeroLC}`)
        .then(response => {
            colisages.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherColisageParNumLP = async (numeroLP) => {
        await monaxios.get(`/colisage/readColisageByNumLP/${numeroLP}`)
        .then(response => {
            colisages.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherColisageParDate = async (dateLC) => {
        await monaxios.get(`/colisage/readColisageByDate/${dateLC}`)
        .then(response => {
            colisages.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherColisageParAnnee = async (annee) => {
        await monaxios.get(`/colisage/readColisageByYear/${annee}`)
        .then(response => {
            colisages.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const afficherAnnee = async () => {
        await monaxios.get('/colisage/allYears')
        .then(response => {
            annees.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    return {
        recap,
        annees,
        colisages,
        colisageTable,
        colisageByID,
        recapLC,
        afficherLC,
        ajouterTable,
        ajouterHeader,
        afficherAnnee,
        rechercherParNumeroLC,
        afficherColisageTable,
        rechercherColisageParNumLC,
        rechercherColisageParNumLP,
        rechercherColisageParDate,
        rechercherColisageParAnnee
    }

}