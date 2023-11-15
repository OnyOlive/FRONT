<template>
    <div>
        <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <!-- <div class="col-sm-6"> -->
                            <h2>Historique de dépôt de tabacs</h2>
                            <div class="col-sm-6">
                            <div class="input-group rounded">
                                <input type="search" class="form-control rounded" placeholder="Entrer le nom du magasin" aria-label="Search" aria-describedby="search-addon" />
                                <span class="input-group-text border-0" id="search-addon">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <div class="col-sm-6 d-flex flex-row-reverse">
                            <button type="button" class="btn btn-primary" style="margin-left: 10px;" @click="router.push({name: 'stock tabacs'})">
                                Voir stock
                            </button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#depotTabac">
                                Faire un dépôt de tabacs
                            </button>
                            <DepotTabacForm/>
                        </div>
                    </div>
                </div>

                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Récolte</th>
                            <th>Variété</th>
                            <th>Grade</th>
                            <th>Provenance</th>
                            <th>Magasin</th>
                            <th>Poids</th>
                            <th>Date de dépôt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="tabac in tabacs" :key="tabac.idTabac">
                            <td>{{ tabac.idTabac }}</td>
                            <td>{{ tabac.recolte }}</td>
                            <td>{{ tabac.varietes}}</td>
                            <td>{{ tabac.grades }}</td>
                            <td>{{ tabac.provenance }}</td>
                            <td>{{ tabac.magasins }}</td>
                            <td>{{ tabac.poids }}</td>
                            <td>{{ tabac.dateDepot }}</td>
                            <td>
                                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>				 
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
    import DepotTabacForm from "./DepotTabacForm.vue";
    import tabacsFonction from "../../Service/TabacsService";
    import { useRouter } from "vue-router";
    import { onMounted } from "vue";

    const router = useRouter()
    const {afficherTabacs, tabacs} = tabacsFonction()

    onMounted(afficherTabacs)

</script>