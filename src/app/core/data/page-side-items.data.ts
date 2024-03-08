import {PageSidebarLinkModel} from "../models/page-sidebar-link.model";

export const DashboardPageSideItems: PageSidebarLinkModel [] = [
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
    link: "/board/cash-situation",
    label: "Situation de caisse",
  },
  {
    link: "/board/ca-sources",
    label: "Source du CA",
  },
  {
    link: "/board/products-per-client",
    label: "Produits par client",
  },
]

export const CommunicationSideBarLinks: PageSidebarLinkModel [] = [
  {
    label: "Envoi",
    icon: 'pi pi-plus',
    action: "new-message",
  },
  {
    label: "Messages pré-enregistrés",
    icon: 'pi pi-comment',
    action: "pre-saved-messages",
  },
  {
    label: "Clients",
    icon: 'pi pi-users',
    action: "clients-list",
  },
]
