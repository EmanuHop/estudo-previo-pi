import { Badge } from "./Badge";
import { GrauDificuldade } from "./GrauDificuldade";
import { planejamentoUC } from "./PlanejamentoUC";

export class SituacaoAprendizagem{
    id: number;
    titulo !: string
    descricao !: string
    ordem !: number
    status !: string
    planejamentoUCId !: number
    planejamentoUC !:	planejamentoUC
    grauDificuldadeId !: number
    grauDificuldade	!: GrauDificuldade
    badgeId !: number
    badge !: Badge
}
