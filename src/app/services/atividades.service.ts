import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Atividade } from '../models/Atividade';


const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type' : 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('TokenUsuarioLogado')}`
  }),
};
@Injectable({
  providedIn: 'root'
})
export class AtividadesService {
  url:string = environment.apiServer + 'api/Atividade';

  constructor(private https: HttpClient) { }

  ObterAtividadePorSituacaoId (situacaoId: number) : Observable<Atividade[]>
  {
    const apiUrl = `${this.url}/FiltrarAtividadeBySituacaoAprendizagemId/${situacaoId}`
    return  this.https.get<Atividade[]>(apiUrl);
  }
  atividades : Atividade[] = []

  async popularAtividades(situacaoId : number, atividade1 : Atividade) : Promise<Atividade[]>{
    this.ObterAtividadePorSituacaoId(situacaoId).subscribe(resultado =>{
      this.atividades = resultado
      this.atividades.push(atividade1)
    });
    return await Promise.resolve(this.atividades)
  }
  async formatarAtividades(questoes : Atividade[]) {
    questoes.forEach((atividade) => {
      if(atividade.atividadeTipo == null){
        atividade.enunciado = atividade.descricao;
      }
      else{
        if(atividade.atividadeTipo == 2){
          let enunciados : String[] = atividade.descricao.split("::");
          atividade.enunciado = enunciados[0];
          for (let index = 1; index < enunciados.length; index++) {
            atividade.alternativas?.push(enunciados[index]);
          } 
        }
      }
    });
    return await Promise.resolve(questoes)
  }
}
