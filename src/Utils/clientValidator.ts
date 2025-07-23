
export interface ClientForm {
  nom: string
  email: string
  tel: string
  adresse: string
  code_postal: string
  ville: string
}

export function validateClientForm(form: ClientForm): string | null {
  const phoneRegex = /^[0-9]{10}$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const postalCodeRegex = /^[0-9]{5}$/

  if (!form.nom.trim()) return 'Le nom est requis.'
  if (!phoneRegex.test(form.tel)) return 'Téléphone invalide (10 chiffres requis).'
  if (!emailRegex.test(form.email)) return 'Email invalide.'
  if (!postalCodeRegex.test(form.code_postal)) return 'Code postal invalide (5 chiffres requis).'

  return null
}
