<template>
    <button class="btn btn-info float-end" title="Téléchager la version PDF"  @click="captureAndPrint">
        <i class="fas fa-file-download"></i>
    </button>
    <div class="facture">
        <div  id="content-to-pdf">
          <div class="container text-center">
            <!-- entete -->
            <div class="row">
              <div class="col-md-2 mt-2 text-start">
                <img src="../../assets/logoOfmata.png" alt="Logo ofmata" width="75">
              </div>
              <div class="col-md-7 text-center">
                <ul class="list-unstyled">
                  <li class="fs-4 fw-bold">OFFICE MALGACHE DES TABACS</li>
                  <li>Etablissement Public à caractère Industriel et Commercial</li>
                  <li>123, Avenue EVEKA Jerôme RAKOTOMALALA</li>
                  <li>B.P 1004</li>
                  <li>ANTANIMENA - 101 -ANTANANARIVO</li>
                  <li>N° d'identification à la statistique: 51235 11 1982 0 00006</li>
                  <li>N° d'identification fiscale: 3 000 064 086</li>
                </ul>
                <hr>
              </div>
              <div class="col-md-3 float-end">
                <ul class="list-unstyled">
                    <li class="fs-4 fw-bold">FACTURE <br><span class="fs-5">N° {{ facturesByNum.numeroFacture }} /23</span></li>
                    <li class="fs-6 fw-bold"> {{ data.variete }} </li>
                    <li>Doit</li>
                    <div class="bordered-content">
                        <li class="fs-6 fw-bold">{{ data.societeClients }}</li>
                        <li>{{ data.secteurSociete }}</li>
                    </div>
                </ul>
              </div>
            </div>
            <br>
            <div class="row text-center">
              <p>
                Les marchandises, matières consommables, matériels ou prestation de service ci-après désignés à la commande
                sont livrés en bonnes conditions, suivant le bon de livraison ou la liste de colisage.
              </p>
              <p>LC N° {{ data.numeroLC }}<br>
              AE N° {{ data.numeroAE }}  du {{ formateDate(data.dateAE) }} </p>
            </div>
  
            <div class="row mx-10">
              <table class="table table-bordered" >
                <thead>
                  <tr>
                    <th colspan="4">Designation</th>
                    <th rowspan="3" class="text-center align-middle">Quantité</th>
                    <th rowspan="3" class="text-center align-middle">Prix Unitaire</th>
                    <th rowspan="3" class="text-center align-middle">Montant</th>
                  </tr>
                  <tr>
                    <th colspan="4">Tabacs CORSE en feuille</th>
                  </tr>
                  <tr>
                    <th>Provenance</th>
                    <th>Récolte</th>
                    <th>Nombre de balle</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="r in facturesByNum.recapitulationLC" :key="r.idRecap">
                    <td rowspan="1" class="text-center align-middle">{{ facturesByNum.magasin }}</td>
                    <td>{{ r.recolte }}</td>
                    <td>{{ r.nbBalle }}</td>
                    <td>{{ r.nomGrade }}</td>
                    <td>{{ r.poidsBrute }}</td>
                    <td>{{ r.prixUnitaire }}</td>
                    <td>{{ r.montant }}</td>
                  </tr>
                  <tr>
                    <th colspan="2">TOTAL</th>
                    <td>{{ facturesByNum.sommeNB }}</td>
                    <td></td>
                    <td>{{ facturesByNum.sommePB }}</td>
                    <td></td>
                    <td>{{ facturesByNum.sommeMontant }}</td>
                  </tr>
            
                  <tr>
                    <th colspan="6" class="text-end">CRACT 5%</th>
                    <td>{{ facturesByNum.montantCRACT }}</td>
                  </tr>
                  <tr>
                    <th colspan="6" class="text-end">Total hors TVA</th>
                    <td>{{ facturesByNum.montantTotalAvecCRACT }}</td>
                  </tr>
                  <tr>
                    <th colspan="6" class="text-end">TVA 20%</th>
                    <td>{{ facturesByNum.montantTVA }}</td>
                  </tr>
                  <tr>
                    <th colspan="6" class="text-end">Total</th>
                    <td>{{ facturesByNum.montantTotalAvecTVA }}</td>
                  </tr>
                  <tr>
                    <th colspan="6" class="text-end">Transport</th>
                    <td>{{ facturesByNum.transport }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="row text-end">
                <p class="fs-5 fw-bold" style="color: red;">
                  Total: {{ facturesByNum.totalFacture }} 
                </p>
            </div>
            <hr class="mt-0">
  
            <div class="row text-start">
              <p>Arrétée la présente facture à  la somme de : <span class="fw-bold">{{ NombreEnLettres(facturesByNum.totalFacture) }} Ariary </span></p>
            </div>
  
            <div class="row mt-2">
              <div class="col-md-6">
                <ul class="list-unstyled text-start">
                  <li><b>Mode de paiement</b></li>
                  <li style="margin-left: 50px;">Par chèque N° ....................................</li>
                  <li style="margin-left: 50px;">Par lettre de change ........................</li>
                  <li style="margin-left: 50px;">Par virement .......................................</li>
                  <li style="margin-left: 50px;">Par espèce ...........................................</li>
                </ul>
              </div>
              <div class="col-md-6 text-end">
                <p class="fw-bold">
                  Antananarivo, le <span class="text-muted"><!-- {{ formateDate(facturesByNum.dateFacture)  }} --> 12-10-2023</span>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    
</template>
  
<style>
    .facture {
        background-color: white;
        width: 210mm; /* Largeur d'une page A4 en mm */
        height: 297mm; /* Hauteur d'une page A4 en mm */
        margin: 0 auto;
        padding: 3mm;
    }
    p, ul, li {
        font-size: 14px; 
    }
    .bordered-content {
        border: 1px solid black;
        padding: 3px; 
        margin-top: 5px; 
        border-radius: 10px;
    }   
</style>
  

<script setup>
    import jsPDF from 'jspdf'; 
    import html2canvas from 'html2canvas';
    import { onMounted, reactive } from 'vue';
    import FactureFonction from '../../Service/FactureService.js';
    import NombreEnLettres from '../../Service/NombreEnLettre';

    const {facturesByNum, rechercherParNumFacture} = FactureFonction()

    const props = defineProps ({
      numeroFacture: {
        required: true
      },
      trnasport: {
        required: true
      }
    })

    const captureAndPrint = () => {
        const element = document.getElementById('content-to-pdf');

        html2canvas(element).then((canvas) => {
            const img = new Image();
            img.src = canvas.toDataURL('image/png');

            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(img, 'PNG', 0, 0);
            pdf.save('facture.pdf');
        });
    }

    const formateDate = (dateToFormate) => {
        const date = new Date(dateToFormate);
        return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    }

    const data = reactive({
      variete : null,
      societeClients: null,
      secteurSociete: null,
      numeroLC: null,
      numeroAE: null,
      dateAE: null
    })

    onMounted(async() => {
      await rechercherParNumFacture(props.numeroFacture);
      data.variete =  facturesByNum.value.autorisation['variete'];
      data.societeClients = facturesByNum.value.autorisation['societeClients']['nomSociete'];
      data.secteurSociete = facturesByNum.value.autorisation['secteurSociete'];
      data.numeroLC = facturesByNum.value.autorisation['numeroLC'].join(' - ');
      data.numeroAE = facturesByNum.value.autorisation['numeroAE'];
      data.dateAE = facturesByNum.value.autorisation['dateAE']
    });

    // const pdf = new jsPDF('p', 'mm', 'a4');

    // const content = document.getElementById('content-to-pdf');
    // const contentWidth = 190; // Largeur du contenu en mm (pour A4, 210 mm - marges)
    // const contentHeight = 277; // Hauteur du contenu en mm (pour A4, 297 mm - marges)

    // let yOffset = 15; // Marge supérieure
    // let sectionHeight = 0;
    // let page = 1;

    // html2canvas(content).then((canvas) => {
    //   const img = new Image();
    //   img.src = canvas.toDataURL('image/png');
    
    //   sectionHeight = img.height * (contentWidth / img.width);
    
    //   while (yOffset + sectionHeight > contentHeight) {
    //     pdf.addPage();
    //     yOffset = 15;
    //     page++;
    //   }

    //   pdf.addImage(img, 'PNG', 10, yOffset, contentWidth, sectionHeight);
    //   pdf.save(`facture_page_${page}.pdf`);
    // });


</script>
