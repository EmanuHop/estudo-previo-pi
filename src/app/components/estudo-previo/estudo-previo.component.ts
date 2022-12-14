import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atividade } from 'src/app/models/Atividade';
import { SituacaoAprendizagem } from 'src/app/models/SituacaoAprendizagem';
import { AtividadesService } from 'src/app/services/atividades.service';
import { EstudoprevioService } from 'src/app/services/estudoprevio.service';

@Component({
  selector: 'app-estudo-previo',
  templateUrl: './estudo-previo.component.html',
  styleUrls: ['./estudo-previo.component.css']
})
export class EstudoPrevioComponent implements OnInit {
  loading: boolean= true;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private estudoPrevioService : EstudoprevioService,
    private atividadesService: AtividadesService) {
  }
  teste : string;
  ngOnInit(): void {
    this.situacaoId = this.route.snapshot.params['id'];
    // this.situacaoId = 1;
    this.estudoPrevioService.ObterSituacao(this.situacaoId).subscribe(resultado => {
      this.situacaoAprendizagem = resultado;
      
      this.atividadesService.popularAtividades(1, this.atividade1).then(atv =>{
        this.atividades = atv;
      })
      this.atividadesService.formatarAtividades(this.atividades).then(atv => {
        this.atividades = atv;
      })
    })
    this.loading = false;
    this.teste = "teste"
  }
  atividades : Atividade[] = []
  situacaoId : number;
  situacaoAprendizagem : SituacaoAprendizagem;
  atividade1 : Atividade = {
    id: 1,
    descricao: "Qual a melhor linguaguem de programação?::Java::Python::C++::Angular",
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
    alternativas: null,
    enunciado: null
  }

  comecarAtividade(){
    
    this.router.navigate(['/cursos/atividades/'+this.situacaoAprendizagem.id])
  }
}
