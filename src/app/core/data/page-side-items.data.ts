import { PageSidebarLinkModel } from "../models/page-sidebar-link.model";

export const DashboardPageSideItems: PageSidebarLinkModel[] = [
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

export const CommunicationSideBarLinks: PageSidebarLinkModel[] = [
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

export const stockSidebarLinks: PageSidebarLinkModel[] = [
  {
    label: "Famille",
    link: "/board/stock"
  },
  {
    label: "Sous Famille",
    link: "/board/stock/sub-family"
  },
  {
    label: "Tags",
    link: "/board/stock/tags"
  },
  {
    label: "Fournisseurs",
    link: "/board/stock/providers"
  },
  {
    label: "Variants",
    link: "/board/stock/variants"
  },
  {
    label: "Article",
    link: "/board/stock/article"
  },
  {
    label: "Depot",
    link: "/board/stock/depot"
  },
  {
    label: "Entrer en Stock",
    link: "/board/stock/entrer-en-stock"
  },
  {
    label: "Mouvement Entrer",
    link: "/board/stock/mouvement-entrer"
  },
  {
    label: "Mouvement Sorti",
    link: "/board/stock/mouvement-sorti"
  },
  {
    label: "Transfert de Stock",
    link: "/board/stock/transfert-de-stock"
  },
  {
    label: "Inventaire",
    link: "/board/stock/inventaire"
  },
  {
    label: "Alert Stock",
    link: "/board/stock/alert-stock"
  },
  {
    label: "Suivi Article",
    link: "/board/stock/suivi-article"
  },
  {
    label: "Commande",
    link: "/board/stock/commande"
  },
  {
    label: "Remboursement",
    link: "/board/stock/remboursement"
  },
  {
    label: "Promotions",
    link: "/board/stock/promotions"
  },
  {
    label: "Code Promo",
    link: "/board/stock/code-promo"
  },
  {
    label: "Paniers",
    link: "/board/stock/paniers"
  },
  {
    label: "Favoris",
    link: "/board/stock/favoris"
  },
  {
    label: "Marques",
    link: "/board/stock/marques"
  }
];

