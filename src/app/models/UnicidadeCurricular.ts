import { Bibliografias } from "./Bibliografias"
import { Competencias } from "./Competencias"
import { Modulo } from "./Modulo"

export class unicidadeCurricular{
    id !: number
    codigo !: string
    nome !: string
    nomeCurto !: string
    horas !: number
    numeroModulo !: number
    ordem !: number
    status !: number
    moduloId !: number
    modulo !: Modulo
    competencias !: Competencias
    grupos !: String
    bibliografias !: Bibliografias
}