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
    descricao: "Qual a melhor linguaguem de programação?::Java::Python::C++::Angular",
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
    alternativas: null,
    enunciado: null
  }
  constructor(private atividadesService : AtividadesService,
    private route: ActivatedRoute) { 
      
    }
    
    loading: boolean = true;

    
    ngOnInit(): void {
      this.atividades = this.atividadesService.atividades;
      // this.atividadesService.atividades.forEach(element => {
      //   this.atividades.push(element)
      // });
      // this.situacaoId = this.route.snapshot.params['id'];
      // this.atividadesService.ObterAtividadePorSituacaoId(1).subscribe(resultado =>{
      //   this.atividades = resultado
      //   this.atividades.push(this.atividade1)
      // });
      // this.atividades.forEach((atividade, index) => {
      //   if(atividade.atividadeTipo == 1){
      //     atividade.enunciado = atividade.descricao;
      //   }
      //   else{
      //     if(atividade.atividadeTipo == 20){
      //       let enunciados : String[] = atividade.descricao.split("::");
      //       atividade.enunciado = enunciados[0];
      //       for (let index = 1; index < enunciados.length; index++) {
      //         atividade.alternativas?.push(enunciados[index]);
      //       } 
      //     }
      //   }
      // });
      this.loading = false;
  }

  enviarResposta(){
    
  }
}
