import {PageSidebarLinkModele} from "../models/page-sidebar-link.modele";

export const DashboardPageSideItems: PageSidebarLinkModele [] = [
  {
    link: "/board",
    label: "CA Journalier"
  },
  {
    link: "/board/announcements",
    label: "Annonces",
    count: 5
  },
  {
    link: "/board/annual-growth",
    label: "Croissance Annulle",
  },
  {
    link: "/board/must-selle-products",
    label: "Produits le plus vendus",
  },
  {
    link: "/board/best-clients",
    label: "Meilleurs clients",
  },
  {
    link: "",
    label: "Les dettes",
  },
  {
    link: "",
    label: "Situation de caisse",
  },
  {
    link: "",
    label: "Souce du CA",
  },
]
