<template>
    <div>
        <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <h2>Factures</h2>
                        <div class="col-sm-6 mt-2">
                            <div class="input-group rounded">
                                <div class="input-group-prepend">
                                    <select class="form-select rounded" id="search-type" v-model="selected">
                                        <option value="numFacture">N° Facture</option>
                                        <option value="annee">Année</option>
                                        <option value="dateFacture">Date</option>
                                    </select>
                                </div>
                                    <input 
                                        type="search" 
                                        v-if="selected == 'numFacture' " 
                                        class="form-control rounded" 
                                        placeholder="Entrer le terme de recherche" 
                                        aria-label="Search" aria-describedby="search-addon" 
                                        style="margin-left: 5px;"
                                        @input="parNumero($event.target.value)"
                                    />

                                    <select v-if="selected == 'annee'" id="annee" @select="parAnnee($event.target.value)" class="form-select rounded" style="width: 10%;margin-left: 5px;">
										<option v-for="a in annees" :key="a">{{ a }}</option>
                                        <option value="">2021</option>
                                        <option value="">2022</option>
                                        <option value="">2023</option>
                                    </select>

                                    <input type="date" 
                                        v-if="selected == 'dateFacture'" 
                                        class="form-control rounded" 
                                        placeholder="Entrer le terme de recherche" 
                                        aria-label="Search" aria-describedby="search-addon" 
                                        style="margin-left: 5px;"
                                        @input="parDate($event.target.value)"
                                    />
                                <span class="input-group-text border-0 bg-info" id="search-addon" style="border-radius: 10px;">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover mt-3 ">
                    <thead>
                        <tr>
                            <th>N° Facture</th>
                            <th>Société</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="f in factures" :key="f.numeroFacture">
                            <td>{{ f.numeroFacture }}</td>
                            <td>{{ f.autorisation.societeClients.nomSociete }}</td>
                            <td>{{ f.dateFacture }}</td>
                            <td>
                                <button type="button" class="btn btn-warning" @click="router.push({name: 'show facture', params : {numeroFacture:f.numeroFacture}})">
                                    <i class="fas fa-eye"></i>
                                     Voir la facture
                                </button>
                            </td>
                        </tr>
                        <!-- <tr>
                            <td>Ambilobe</td>
                            <td>societe1</td>
                            <td>12-10-2323</td>
                            <td>
                                <button type="button" class="btn btn-warning" @click="router.push({name: 'show facture'})">
                                    <i class="fas fa-eye"></i>
                                     Voir la facture
                                </button>
                            </td>
                        </tr>					  -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import FactureFonction from "../../Service/FactureService.js";

const router = useRouter()
const selected = ref("numFacture");

const {
    annees,
    factures,
    afficherAnnee,
    afficherListFacture,
    rechercherFacture,
    rechercherParAnnne,
    rechercherParDate
} = FactureFonction()

const parNumero = (numFacture) => {
    if(numFacture.length > 0) {
        rechercherFacture(numFacture)
    } else {
        afficherListFacture
    }
}

const parAnnee = (annee) => {
    if(annee.length > 0) {
        rechercherParAnnne(annee)
    } else {
        afficherListFacture
    }
}

const parDate = (date) => {
    if(date.length > 0) {
        rechercherParDate(date)
    } else {
        afficherListFacture
    }
}

onMounted(() => {
    afficherListFacture();
    afficherAnnee();
})
    
</script>