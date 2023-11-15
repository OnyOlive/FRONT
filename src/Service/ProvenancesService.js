import monaxios from "../axios.js";
import { ref } from "vue";

export default function ProvenanceFonction() {
    const provenances = ref([])

    const afficherProvenances = () => {
        monaxios.get("/provenance/read")
        .then(response => {
            provenances.value = response.data
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const ajouterProvenance = (provenanceForm) => {
        console.log(provenanceForm)
        monaxios.post("/provenance/create", {...provenanceForm})
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const supprimerProvenance = (idProvenance) => {
        console.log("idProvenance: " + idProvenance)
        monaxios.delete(`/provenance/delete/${idProvenance}`)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const modifierProvenance = (idProvenance) => {
        console.log(idProvenance)
        monaxios.put(`/provenance/update/${idProvenance}`)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return {
        provenances, 
        afficherProvenances, 
        ajouterProvenance,
        supprimerProvenance,
        modifierProvenance
    }
}