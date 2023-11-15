<template>
    <div>
        <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <!-- <div class="col-sm-6"> -->
                        <h2>Stock de tabacs</h2>
                        <div class="col-sm-5">
                            <div class="input-group rounded">
                                <input type="search" class="form-control rounded" placeholder="Entrer le nom du magasin" aria-label="Search" aria-describedby="search-addon" />
                                <span class="input-group-text border-0" id="search-addon">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <div class="col-sm-7 d-flex flex-row-reverse">
                            <div class="dropdown">
                                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Récolte
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                </ul>
                             </div>
                        </div>
                    </div>
                </div>

                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Provenance</th>
                            <th>Variété</th>
                            <th>Grade</th>
                            <th>Magasin</th>
                            <th>Poids</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p1</td>
                            <td>v1</td>
                            <td>g1</td>
                            <td>m1</td>
                            <td>pd1</td>
                        </tr>				 
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>