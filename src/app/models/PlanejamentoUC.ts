import { Grupo } from "./grupo";

export class planejamentoUC{
    id !: number;
    descricao !: string;
    status !: string;
    grupoId !: number;
    grupo !: Grupo;
}