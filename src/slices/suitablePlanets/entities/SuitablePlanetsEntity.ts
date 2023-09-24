import { SuitablePlanets } from "@prisma/client"

export interface SuitablePlanetsData {
  pl_name: string
  hostname: string
  default_flag: string
  sy_snum: string
  sy_pnum: string
  discoverymethod: string
  disc_year: string
  disc_facility: string
  soltype: string
  pl_controv_flag: string
  pl_refname: string
  pl_orbper: string
  pl_orbpererr1: string
  pl_orbpererr2: string
  pl_orbperlim: string
  pl_orbsmax: string
  pl_orbsmaxerr1: string
  pl_orbsmaxerr2: string
  pl_orbsmaxlim: string
  pl_rade: string
  pl_radeerr1: string
  pl_radeerr2: string
  pl_radelim: string
  pl_radj: string
  pl_radjerr1: string
  pl_radjerr2: string
  pl_radjlim: string
  pl_masse: string
  pl_masseerr1: string
  pl_masseerr2: string
  pl_masselim: string
  pl_massj: string
  pl_massjerr1: string
  pl_massjerr2: string
  pl_massjlim: string
  pl_bmasse: string
  pl_bmasseerr1: string
  pl_bmasseerr2: string
  pl_bmasselim: string
  pl_bmassj: string
  pl_bmassjerr1: string
  pl_bmassjerr2: string
  pl_bmassjlim: string
  pl_bmassprov: string
  pl_orbeccen: string
  pl_orbeccenerr1: string
  pl_orbeccenerr2: string
  pl_orbeccenlim: string
  pl_insol: string
  pl_insolerr1: string
  pl_insolerr2: string
  pl_insollim: string
  pl_eqt: string
  pl_eqterr1: string
  pl_eqterr2: string
  pl_eqtlim: string
  ttv_flag: string
  st_refname: string
  st_spectype: string
  st_teff: string
  st_tefferr1: string
  st_tefferr2: string
  st_tefflim: string
  st_rad: string
  st_raderr1: string
  st_raderr2: string
  st_radlim: string
  st_mass: string
  st_masserr1: string
  st_masserr2: string
  st_masslim: string
  st_met: string
  st_meterr1: string
  st_meterr2: string
  st_metlim: string
  st_metratio: string
  st_logg: string
  st_loggerr1: string
  st_loggerr2: string
  st_logglim: string
  sy_refname: string
  rastr: string
  ra: string
  decstr: string
  dec: string
  sy_dist: string
  sy_disterr1: string
  sy_disterr2: string
  sy_vmag: string
  sy_vmagerr1: string
  sy_vmagerr2: string
  sy_kmag: string
  sy_kmagerr1: string
  sy_kmagerr2: string
  sy_gaiamag: string
  sy_gaiamagerr1: string
  sy_gaiamagerr2: string
  rowupdate: string
  pl_pubdate: string
  releasedate: string
}


export class SuitablePlanetsEntity {
  public name: string
  public mass: number
  public hasStation: boolean
  public id: string
  constructor(data: SuitablePlanets){
    this.id = data.id
    this.name = data.name
    this.mass = Number(data.mass) ?? 0
    this.hasStation = false
  }

  static create(data: SuitablePlanets) {
    return new SuitablePlanetsEntity(data)
  }
}