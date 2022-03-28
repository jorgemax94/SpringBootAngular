import { Component, OnInit } from '@angular/core';
import { Regiao } from '../model/regiao';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.css'],
  animations: [
    
  ]
})
export class OcorrenciasComponent implements OnInit {

  regioes: Regiao[] = [];

  constructor(private regiaoService:RegiaoService) { }

  ngOnInit(): void {
    this.regiaoService.listRegioes().subscribe(regioes => this.regioes = regioes);

  }


}
