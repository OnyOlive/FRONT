import { ref } from "vue";
import monaxios from "../axios.js";

export default function tabacsFonction() {
    const tabacs = ref([])

    const afficherTabacs = () => {
        console.log(tabacs)
        monaxios.get("/tabacs/read")
        .then(response => {
            tabacs.value = response.data
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return{
        tabacs,
        afficherTabacs
    }
}