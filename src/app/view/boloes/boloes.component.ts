import { Component, OnInit } from '@angular/core';
import { CardModel, enumCardName } from 'src/app/model/card.model';

@Component({
  selector: 'app-boloes',
  templateUrl: './boloes.component.html',
  styleUrls: ['./boloes.component.scss']
})
export class BoloesComponent implements OnInit {

  cards = [
    new CardModel({id: 1, type: enumCardName.MEGA_SENA, concurso: 2545, dtPremio: '07/12/2022', qntCota: 5, qntTotalCota: 15, qntDezenas: 6, vlPremio: 'R$115.000.000,00', qntGames: 5, vlCota: '4,50'}),
    new CardModel({id: 1, type: enumCardName.MEGA_DA_VIRADA, concurso: 2550, dtPremio: '31/12/2022', qntCota: 0, qntTotalCota: 15, qntDezenas: 6, vlPremio: 'R$130.254.649,47', qntGames: 5, vlCota: '4,50'}),
    new CardModel({id: 1, type: enumCardName.MAIS_MILIONARIA, concurso: 2550, dtPremio: '31/12/2022', qntCota: 0, qntTotalCota: 15, qntDezenas: 6, vlPremio: 'R$130.254.649,47', qntGames: 5, vlCota: '4,50'}),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
