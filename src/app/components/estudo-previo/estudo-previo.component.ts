import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SituacaoAprendizagem } from 'src/app/models/SituacaoAprendizagem';
import { AtividadesService } from 'src/app/services/atividades.service';
import { EstudoprevioService } from 'src/app/services/estudoprevio.service';

@Component({
  selector: 'app-estudo-previo',
  templateUrl: './estudo-previo.component.html',
  styleUrls: ['./estudo-previo.component.css']
})
export class EstudoPrevioComponent implements OnInit {
  
  constructor(private router: Router,
    private estudoPrevioService : EstudoprevioService,
    private atividadesService: AtividadesService) { 
  }

  ngOnInit(): void {
    this.estudoPrevioService.ObterSituacao(1).subscribe(resultado => {
      this.situacaoAprendizagem = resultado;
    })
  }

  situacaoAprendizagem : SituacaoAprendizagem

  comecarAtividade(){
    this.router.navigate(['/cursos/atividades/'+this.situacaoAprendizagem.id])
  }
}
