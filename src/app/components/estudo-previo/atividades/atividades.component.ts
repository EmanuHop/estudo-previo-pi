import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Atividade } from 'src/app/models/Atividade';
import { AtividadesService } from 'src/app/services/atividades.service';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

  resposta : string[];
  situacaoId : number;
  atividades : Atividade[]
  atividade1 : Atividade = {
    id: 1,
    descricao: "faca qualquer cooisa",
    dataInicio: null,
    dataFim: null,
    atividadeTipo: 1,
    grauDificuldade: null,
    atividadeTipoId: null,
    grauDificuldadeId: null,
    ordem: null,
    situacaoAprendizagem: null,
    situacaoAprendizagemId: null,
    status: null,
    alternativas: null
  }
  atividade2 : Atividade = {
    id: 1,
    descricao: "faca qualquer cooisa12",
    dataInicio: null,
    dataFim: null,
    atividadeTipo: 2,
    grauDificuldade: null,
    atividadeTipoId: null,
    grauDificuldadeId: null,
    ordem: null,
    situacaoAprendizagem: null,
    situacaoAprendizagemId: null,
    status: null,
    alternativas: null
  }
  constructor(private atividadesService : AtividadesService,
    private route: ActivatedRoute) { 
    }
    
    loading: boolean = true;

    
    ngOnInit(): void {
      this.situacaoId = this.route.snapshot.params['id'];
      this.atividadesService.ObterAtividadePorSituacaoId(1).subscribe(resultado =>{
        this.atividades = resultado
        this.loading = false;
        this.atividades.push(this.atividade1)
        this.atividades.push(this.atividade2)
      });
      this.atividades.forEach((atividade, index) => {
        
      });
  }
}
