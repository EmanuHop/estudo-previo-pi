import { BadgeNivel } from "./BadgeNivel";

export class Badge{
    id: number;
    descricao: string;
    imagem: string;
    status: boolean;
    badgeNivelId: number
    badgeNivel: BadgeNivel
}