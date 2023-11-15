import monaxios from "../axios.js";
import { ref } from "vue";

export default function GradesFonction() {
    const grades = ref([])
    const gradesByID = ref({})
    const gradesByVariete = ref([])

    const afficherGrades = async () => {
        await monaxios.get("/grades/read")
        .then(response => {
            grades.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const ajouterGrade = async (gradesForm) => {
        await monaxios.post("/grades/create",{...gradesForm})
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const supprimerGrade = async (idGrade) => {
        await monaxios.delete(`/grades/delete/${idGrade}`)
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const modifierGrade = async (idGrade) => {
        await monaxios.put(`/grades/update/${idGrade}`)
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherParID = async (idGrade) => {
        await monaxios.get(`/grades/readByID/${idGrade}`)
        .then(response => {
            gradesByID.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherParGrade = async (nomGrade) => {
        await monaxios.get(`/grades/readByGrade/${nomGrade}`)
        .then(response => {
            grades.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercherParVariete = async (nomVariete) => {
        await monaxios.get(`/grades/readByVariete/${nomVariete}`)
        .then(response => {
            gradesByVariete.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    const rechercheParVariete = async (nomVariete) => {
        await monaxios.get(`/grades/readByVariete/${nomVariete}`)
        .then(response => {
            grades.value = response.data
        })
        .catch(error => {
            throw error.response.data.message;
        })
    }

    return {
        grades,
        gradesByID,
        gradesByVariete,
        afficherGrades, 
        ajouterGrade,
        supprimerGrade,
        modifierGrade,
        rechercherParID,
        rechercherParVariete,
        rechercherParGrade,
        rechercheParVariete
    }
}