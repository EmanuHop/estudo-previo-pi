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
    return this.https.get<Atividade[]>(apiUrl);
  }
}
