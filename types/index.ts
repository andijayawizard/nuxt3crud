declare global {
  interface Blog {
    id: number,
    nama: string,
    rgks: string,
    ktrg: string,
    acak: string,
    pub: boolean
  }
  interface Product {
    id: number,
    nama: string,
    rgks: string,
    ktrg: string,
    acak: string,
    pub: boolean,
  }
  interface Menuweb {
    id: number,
    nama: string,
    caption: string,
    slug: string,
    pub: boolean
  }
}