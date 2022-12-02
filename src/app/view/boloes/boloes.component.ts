import { Component, OnInit } from '@angular/core';
import { CardModel, enumCardName } from 'src/app/model/card.model';

@Component({
  selector: 'app-boloes',
  templateUrl: './boloes.component.html',
  styleUrls: ['./boloes.component.scss']
})
export class BoloesComponent implements OnInit {

  cards = [
    new CardModel({id: 1, type: enumCardName.LOTO_FACIL, concurso: 1549, dtPremio: new Date(), qntCota: 5, qntTotalCota: 15, qntDezenas: 10, vlPremio: 'R$3.000.000,00', qntGames: 5, vlCota: '16,00'}),
    new CardModel({id: 2, type: enumCardName.DUPLA_SENA, concurso: 1550, dtPremio: new Date(), qntCota: 5, qntTotalCota: 15, qntDezenas: 10, vlPremio: 'R$5.500.000,00', qntGames: 5, vlCota: '17,00'}),
    new CardModel({id: 3, type: enumCardName.LOTECA, concurso: 1551, dtPremio: new Date(), qntCota: 15, qntTotalCota: 15, qntDezenas: 10, vlPremio: 'R$2.500.000,00', qntGames: 5, vlCota: '5,00'}),
    new CardModel({id: 4, type: enumCardName.DUPLA_SENA, concurso: 1552, dtPremio: new Date(), qntCota: 15, qntTotalCota: 15, qntDezenas: 10, vlPremio: 'R$3.000.000,00', qntGames: 5, vlCota: '10,00'}),
    new CardModel({id: 5, type: enumCardName.DIA_DE_SORTE, concurso: 1553, dtPremio: new Date(), qntCota: 5, qntTotalCota: 15, qntDezenas: 10, vlPremio: 'R$1.500.000,00', qntGames: 5, vlCota: '13,00'}),
    new CardModel({id: 6, type: enumCardName.DIA_DE_SORTE, concurso: 1554, dtPremio: new Date(), qntCota: 5, qntTotalCota: 15, qntDezenas: 10, vlPremio: 'R$500.000,00', qntGames: 5, vlCota: '12,00'}),
    new CardModel({id: 7, type: enumCardName.DIA_DE_SORTE, concurso: 1555, dtPremio: new Date(), qntCota: 5, qntTotalCota: 15, qntDezenas: 10, vlPremio: 'R$350.000,00', qntGames: 5, vlCota: '10,00'}),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
