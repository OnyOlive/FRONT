import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        // LISTE DE COLISAGE
        {
          path: 'listeColisage',
          name: 'colisage',
          component: () => import('../views/ListeColisage/LCView.vue')
        },
        {
          path: 'listeColisage/showLC/:numeroLC',
          name: 'show LC',
          props: true,
          component: () => import('../views/ListeColisage/ShowLC.vue')
        },
        {
          path: 'listeColisage/showRecap/:numeroLC',
          name: 'show recap',
          component: () => import('../views/ListeColisage/ShowRecap.vue'),
          props: true,
        },
        //AUTORISATIONS
        {
          path: 'autorisation',
          name: 'all autorisation',
          component: () => import('../views/Autorisation/ViewAE.vue')
        },
        {
          path: 'autorisation/showAE/:numeroAE',
          name: 'show autorisation',
          props: true,
          component: () => import('../views/Autorisation/AE.vue')
        },
        //FACTURES
        {
          path: 'facture',
          name: 'all factures',
          component: () => import('../views/Facture/viewFacture.vue')
        },
        {
          // path: 'facture/showFacture/:numeroAE',
          path: 'facture/showFacture/:numeroFacture',
          name: 'show facture',
          props: true,
          component: () => import('../views/Facture/ShowFacture.vue')
        },
        // VARIETES
        {
          path: 'varietes',
          name: 'all varietes',
          component: () => import('../views/Varietes/ViewVarietes.vue')
        },

        // GRADES
        {
          path: 'grades',
          name: 'all grades',
          component: () => import('../views/Grades/ViewGrades.vue')
        },

        // SOCIETES CLIENTS
        {
          path: 'clients',
          name: 'all clients',
          component: () => import('../views/Clients/ViewClients.vue')
        },

        // ZONES
        {
          path: 'zones',
          name: 'all zones',
          component: () => import('../views/Zones/ViewZone.vue')
        },
        // SECTEURS
        {
          path: 'secteurs',
          name: 'all secteurs',
          component: () => import('../views/Secteurs/ViewSecteurs.vue')
        },
        // MAGASINS
        {
          path: 'magasins',
          name: 'all magasins',
          component: () => import('../views/Magasins/ViewMagasins.vue')
        },
        // TABACS
        {
          path: 'tabacs',
          name: 'all tabacs',
          component: () => import('../views/Tabacs/ViewTabacs.vue')
        },
        {
          path: 'tabacs/stock',
          name: 'stock tabacs',
          component: () => import('../views/Tabacs/ViewStock.vue')
        }


      ]
    },
    // {
    //   // path: 'facture/showFacture/{:numeroAE}',
    //   path: '/facture/showFacture',
    //   name: 'show facture',
    //   // props: true,
    //   component: () => import('../views/Facture/ShowFacture.vue')
    // },
    {
      path: '/:catchAll(.*)',
      component: () => import('../components/404Page.vue'),
    }
  ]
})

export default router
