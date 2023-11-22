<template>
    <button class="btn btn-info float-end" title="Téléchager la version PDF"  @click="captureAndPrint">
        <i class="fas fa-file-download"></i>
    </button>
    <div class="autorisation">
        <div id="content-to-pdf">
            <div class="container text-center mt-3">
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

                    <!-- <div class="row px-6 m-lg-5 text-start">
                        <p>La société <b>{{ data.nomSociete }} </b> (secteur de <b>{{ autorisationByNumAE.secteurSociete }}</b>) 
                            est autorisée à livrer dans le véhicule immatriculé <b>{{ autorisationByNumAE.immatriculation }} </b>à la SITAM
                            <b>{{ autorisationByNumAE.poids }}</b> Kg de tabacs <b>{{ autorisationByNumAE.variete }}</b>,
                            récolte <b>{{ data.recolte }}</b>  en feuilles emballées
                            à destination de <b>{{ autorisationByNumAE.destination }}</b>.
                        </p>
                        <p>Ce poids correspond aux listes de colisages N° <b>{{ separation }}</b>  jointes dans le présent document. </p>
                        <p>La présente autorisation est valable pour une durée de <b>{{ autorisationByNumAE.validite }}</b> jours 
                            à compter du départ du véhicule le <b>{{ formateDate(autorisationByNumAE.departVehicule) }}</b> </p>
                    </div> -->

                    <div class="row m-lg-5 text-start text-right" style="font-family: 'Times New Roman', Times, serif;">
                        <p><span class="px-4"></span>Le chef de secteur OFMATA <b>MAEVATANANA</b> est autorisé à livrer à la société VOLAMAZAVA, 
                            <b>SIX CENT CINQUANTE KILOGRAMMES (650KG) </b> de <b>TABAC CORSE RNO </b>en feuilles, 
                            emballés en provenance de MAEVATANANA à destination d'ANTSIRABE.</p>
                        <p>Ce poids correspond aux listes de colisage N° ................................................................... jointes au présent 
                            document.</p>
                        <p>Conformément à la décision N° 003/OFT/DG-15/21 du 08 Janvier 2021 portant 
                            réorganisation dela politique de vente de l'OFMATA en son article 5, 
                            les clients sont encouragés à vérifier la qualité des tabacs dans les 
                            balles en magasin conformément à l'autorisation d'enlèvement. Une fois
                            sortie du magasin, la liste de colisage doit dument remplie, et aucune réclamation 
                            ultérieure ne sera acceptée.
                        </p>
                        <p>La présente autorisation est valable pour une période de <b>10 jours</b> : <br>
                        du <b>13 Novembre 2023</b> jusqu'au <b>22 Novembre 2023</b>.</p>
                    </div>

                    <div>
                        <div class=" text-end">
                            <p class="fw-bold">Antananarivo, le <span class="text-muted"><!--{{ formateDate(autorisationByNumAE.dateAE) }} --> 12-10-2323</span></p>
                        </div>
                        <div class="mt-10">
                            <ul class="text-start ">
                                <li class="li list-unstyled"><b>DESTINATAIRES</b></li>
                                <li class="fst-italic fs-6" style="margin-left: 50px;">Société VOLAMAZAVA ANTSIRABE</li>
                                <li class="fst-italic fs-6" style="margin-left: 50px;">Le chef de secteur MAEVATANANA</li>
                                <li class="fst-italic fs-6" style="margin-left: 50px;">Division comptabilité </li>
                                <li class="fst-italic fs-6" style="margin-left: 50px;">Division Recouvrement</li>
                                <li class="fst-italic fs-6" style="margin-left: 50px;">Division commerciale</li>
                                <li class="fst-italic fs-6" style="margin-left: 50px;">Archives</li>
                                <li class="fst-italic fs-6" style="margin-left: 50px;">Département PRODUCTION</li>
                                <li class="fst-italic fs-6" style="margin-left: 50px;">Chef de ZNR</li>
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



