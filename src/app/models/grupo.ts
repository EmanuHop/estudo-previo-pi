import { Turno } from "./Turno";
import { UnidadeCurricular } from "./UnidadeCurricular";

export class Grupo{
    id !: number;
    descricao !: String
    dataInicio !: Date
    dataFim !: Date
    status !: number
    turnoId !: number
    turno !: Turno
    unicidadeCurricular !: number
    unididadeCurricular !: UnidadeCurricular
}