// File: src/composables/useUmkmData.js
import { umkmList } from '../data/umkm.js'

export const useUmkmData = () => {
  // Transform data dari format umkm.js ke format yang dibutuhkan CardUMKM
  const transformedData = umkmList.map(umkm => ({
    id: umkm.id,
    image: umkm.foto,
    title: umkm.nama_umkm,
    description: umkm.deskripsi,
    category: umkm.kategori.toUpperCase()
  }))

  // Ambil kategori unik
  const categories = Array.from(
    new Set(umkmList.map(umkm => umkm.kategori.toUpperCase()))
  )

  return {
    umkmData: transformedData,
    categories
  }
}
