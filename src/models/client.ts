
export interface Client {
  id: string
  nom: string
  email: string
  tel: string
  adresse: string
  code_postal: string
  ville: string
}

export interface ClientUpdate {
  nom?: string
  email?: string
  tel?: string
  adresse?: string
  code_postal?: string
  ville?: string
}

export interface ClientFilters {
  nom?: string
  ville?: string
  sort?: string
  fields?: string
  limit?: string
}
