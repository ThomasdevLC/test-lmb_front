import http from '@/services/api/apiClient.ts'
import type { Client, ClientUpdate, ClientFilters } from '@/models/client'

export async function getClients(filters: ClientFilters = {}) {
  const { data } = await http.get('/get-clients.php', { params: filters })
  return data as { datas: Client[] }
}

export async function getClientById(id: string) {
  const { data } = await http.get('/get-client.php', { params: { id } })
  return data as { datas: Client }
}

export async function updateClient(id: string, updateData: ClientUpdate) {
  const { data } = await http.put(`/update-client.php?id=${id}`, updateData)
  return data
}
