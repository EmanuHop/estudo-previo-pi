import { CompetenciaIndicadores } from "./CompetenciaIndicadores"

export class Competencias{
    id !: number
    descricao !: string
    status !: string
    unidadeCurricularId !: number
    unidadeCurricular !: string
    competenciaIndicadores !: CompetenciaIndicadores
}