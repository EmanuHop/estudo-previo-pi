import { AtividadeTipo } from "./AtividadeTipo";
import { GrauDificuldade } from "./GrauDificuldade";
import { SituacaoAprendizagem } from "./SituacaoAprendizagem";

export class Atividade{
    id !:	number;
    descricao !:	string;
    dataInicio !:	Date | null
    dataFim !: Date | null
    ordem !:	number | null
    status !:	number | null
    situacaoAprendizagemId !:	number | null
    situacaoAprendizagem !:	SituacaoAprendizagem | null
    atividadeTipoId !:	number | null ; 
    atividadeTipo !:	number | null
    grauDificuldadeId !:	number | null;
    grauDificuldade !:	GrauDificuldade | null
    enunciado !: String | null
    alternativas !: String[] | null
}