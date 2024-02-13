export type PageSidebarLinkModele = {
  label: string,
  icon?: string,
  link?:string,
  count?:number,
  action?: () => void,
  sub?:PageSidebarLinkModele
}
