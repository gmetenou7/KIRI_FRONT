export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}
export interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string;
  status?: string;
  activity?: number;
  representative?: Representative;
}

export interface ProductModele {
  intitule: string;
  code_bar: string;
  prix_revient: string;
  quantite: number;
  prix_unitaire: string;
  prix_total: string;
  benefice: string;
  code: string;
};
