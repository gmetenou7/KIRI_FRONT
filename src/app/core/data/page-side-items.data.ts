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
    link: "/board/debts",
    label: "Les dettes",
  },
  {
    link: "",
    label: "Situation de caisse",
  },
  {
    link: "/board/ca-sources",
    label: "Source du CA",
  },
]
