<template>
    <button class="btn btn-info float-end" title="Téléchager la version PDF"  @click="captureAndPrint">
        <i class="fas fa-file-download"></i>
    </button>
    <div class="autorisation">
        <div id="content-to-pdf">
            <div class="container text-center">
                    <div class="row">
                        <div class="col-md-5">
                            <ul class="list-unstyled">
                                <li class="fs-4 fw-bold" style="font-family: 'Times New Roman', Times, serif;">REPOBLIKAN'I MADAGASIKARA</li>
                                <li class="fs-6 fw-bold fst-italic" style="font-family: 'Times New Roman', Times, serif;">Fitiavana - Tanindrazana - Fandrosoana</li>
                                <li class="mt-3 fw-bold">OFFICE MALGACHE DES TABACS</li>
                                <li class="fs-6 fw-bold fst-italic">(OF.MA.TA)</li>
                                <li class="mt-3 fw-bold">DIRECTION GENERALE</li>
                            </ul>
                        </div>
                        <div class="col-md-2">
                            <img src="../../assets/logoOfmata.png" alt="Logo ofmata" width="120">
                        </div>
                        
                        <div class="col-md-5">
                            <ul class="list-unstyled ">
                                <li class="fw-bold ">123, RUE Eveka JERÔME RAKOTOMALALA</li>
                                <li class="mt-2 fw-semibold " style="font-family: 'Times New Roman', Times, serif;">Tel: +261 020 22 623 25</li>
                                <li class="fw-bold"> B.P: 1004</li>
                                <li class="fs-6 fw-bold" >101 - ANTANANARIVO</li>
                                <li class="fs-6 fw-bold " >MADAGASCAR</li>
                                <li class="mt-2 fw-semibold" style="font-family: 'Times New Roman', Times, serif;"><span class="text-decoration-underline">E-mail:</span> ofmata@moov.mg</li>
                            </ul>
                        </div>
                    </div>
                    <hr>
                    <div class="row text-center">
                        <h1 class="fw-bold fst-italic" style="font-family: 'Times New Roman', Times, serif;" >
                            AUTORISATION D'ENLEVEMENT
                        </h1>
                        <h3  class="fst-italic" style="font-family: 'Times New Roman', Times, serif;" >N° {{ autorisationByNumAE.numeroAE }} - {{getYearDigits()}}/OFT/DG/CV - 61/{{getYearDigits()}}/SVC</h3> 
                    </div>

                    <div class="row px-6 m-lg-5 text-start">
                        <p>La société <b>{{ data.nomSociete }} </b> (secteur de <b>{{ autorisationByNumAE.secteurSociete }}</b>) 
                            est autorisée à livrer dans le véhicule immatriculé <b>{{ autorisationByNumAE.immatriculation }} </b>à la SITAM
                            <b>{{ autorisationByNumAE.poids }}</b> Kg de tabacs <b>{{ autorisationByNumAE.variete }}</b>,
                            récolte <b>{{ data.recolte }}</b>  en feuilles emballées
                            à destination de <b>{{ autorisationByNumAE.destination }}</b>.
                        </p>
                        <p>Ce poids correspond aux listes de colisages N° <b>{{ separation }}</b>  jointes dans le présent document. </p>
                        <p>La présente autorisation est valable pour une durée de <b>{{ autorisationByNumAE.validite }}</b> jours 
                            à compter du départ du véhicule le <b>{{ formateDate(autorisationByNumAE.departVehicule) }}</b> </p>
                    </div>

                    <div>
                        <div class=" text-end">
                            <p class="fw-bold">Date: <span class="text-muted">{{ formateDate(autorisationByNumAE.dateAE) }}</span></p>
                        </div>
                        <div class="mt-10">
                            <ul class="text-start">
                                <li class="li list-unstyled"><b>DESTINATAIRES</b></li>
                                <li style="margin-left: 50px;">Société ....................................</li>
                                <li style="margin-left: 50px;"> {{ data.nomSociete }}</li>
                                <li style="margin-left: 50px;">Archive</li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<style>
    .autorisation {
        background-color: white;
        width: 210mm; /* Largeur d'une page A4 en mm */
        height: 297mm; /* Hauteur d'une page A4 en mm */
        margin: 0 auto;
        padding: 3mm;
    }       
</style>

<script setup>
    import { onMounted, reactive } from 'vue';
    import AutorisationFonction from '../../Service/Autorisation.js';
    import jsPDF from 'jspdf'; 
    import html2canvas from 'html2canvas';

    const captureAndPrint = () => {
        const element = document.getElementById('content-to-pdf');

        html2canvas(element).then((canvas) => {
            const img = new Image();
            img.src = canvas.toDataURL('image/png');

            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(img, 'PNG', 0, 0);
            pdf.save('autorisation.pdf');
        });
    }

    const {autorisationByNumAE, rechercherParNumAE} = AutorisationFonction()
    const props = defineProps({
        numeroAE : {
            required : true
        }
    })

    const formateDate = (dateToFormate) => {
        const date = new Date(dateToFormate);
        return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    }

    // Fonction pour obtenir les deux derniers chiffres de l'année actuelle
    const getYearDigits = () => {
    const currentYear = new Date().getFullYear().toString();
    return currentYear.slice(-2);
    };

    let separation = null;

    const data = reactive({
        nomSociete : null,
        recolte : null
    });

    onMounted(async() => {
        await rechercherParNumAE(props.numeroAE);
        separation = autorisationByNumAE.value.numeroLC.join(' - ');
        data.nomSociete =  autorisationByNumAE.value.societeClients['nomSociete']; 
        const unParValeur = new Set(autorisationByNumAE.value.recoltes);
        data.recolte = [...unParValeur].join(' - ');
    })
</script>



