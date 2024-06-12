declare global {
  interface User {
    id: number,
    name: string,
    email: string
  }
  interface Blog {
    id: number,
    nama: string,
    rgks: string,
    ktrg: string,
    acak: string,
    pub: boolean
  }
  interface Service {
    id: number,
    nama: string,
    rgks: string,
    ktrg: string,
    acak: string,
    pub: boolean,
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
  interface Brand {
    id: number,
    nama: string,
    rgks: string,
    ktrg: string,
    acak: string,
    pub: boolean
  }
  interface CaseStudy {
    id: number,
    nama: string,
    rgks: string,
    ktrg: string,
    seo: string,
    acak: string,
    pub: boolean,
  }
  interface ImageSlide {
    id: number,
    nama: string,
    rgks: string,
    seo: string,
    acak: string,
    pub: boolean
  }
}

