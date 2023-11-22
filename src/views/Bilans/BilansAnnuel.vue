<template>
    <div>
        <div class="container">
            <div class="table-wrapper">
                <div class="table-title " >
                    <div class="row">
                        <!-- <div class="col-sm-6"> -->
                        <h4>VENTE DE TABACS CORSE (RNO) 2022 PAR CLIENTS (Par ordre décroissant)</h4>
                        <div class="col-sm-6 mt-2">
                            <div class="input-group rounded">
                                <div class="input-group-prepend">
                                    <select class="form-select" title="Rechercher l'année" v-model="selectedYear">
                                        <option value="">2021</option>
                                        <option value="">2022</option>
                                        <option value="">2023</option>
                                    </select>
                                </div>
                                <span class="input-group-text border-0 bg-info" id="search-addon" style="border-radius: 10px;">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <div class="col-sm-6 d-flex flex-row-reverse">
                            <button type="button" class="btn btn-info">
                                <i class="fas fa-calendar-check"></i>
                                {{ selectedYear }}
                            </button>
                        </div>
                    </div>
                </div>
                
                <table class="table table-striped table-hover mt-3" >
                    <thead>
                        <!-- <tr v-for="g in gradesByVariete" :key="g.idGrade"> -->
                        <tr>
                            <th  class="text-center align-middle">Variété</th>
                            <th  class="text-center align-middle">Sociétés</th>
                            <th  class="text-center align-middle">Grades</th>
                            <th  class="text-center align-middle">Poids</th>
                            <th  class="text-center align-middle">% par rapport poids total </th>
                            <th  class="text-center align-middle">Montant</th>
                            <th  class="text-center align-middle">% par rapport vente total</th>
                        </tr>
                    </thead>
                    <tbody class="text-center align-middle">
                        <tr>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th colspan="2">TOTAL variete : </th>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import GradesFonction from '../../Service/GradesService';

    const selectedYear = ref('2022')
    const {gradesByVariete, rechercherParVariete} = GradesFonction()

    // onMounted(() => {
    //     rechercherParVariete("RNO");
    // }),

</script>