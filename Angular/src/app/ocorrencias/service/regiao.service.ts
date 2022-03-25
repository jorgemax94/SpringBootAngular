import { Injectable } from '@angular/core';
import { Regiao } from '../model/regiao';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor() { }

  listRegioes(): Regiao[]{
    return [
      {
        "id": 1,
        "regiao": "Norte",
        "total_exames": 44
      },
      {
        "id": 2,
        "regiao": "Nordeste",
        "total_exames": 13832
      },
      {
        "id": 3,
        "regiao": "Sudeste",
        "total_exames": 89657
      },
      {
        "id": 4,
        "regiao": "Sul",
        "total_exames": 122
      },
      {
        "id": 5,
        "regiao": "Centro-Oeste",
        "total_exames": 2581
      }
    ]
  }
}
