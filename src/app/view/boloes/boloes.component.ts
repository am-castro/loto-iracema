import { Component, OnInit } from '@angular/core';
import { CardModel, enumCardName } from 'src/app/model/card.model';

@Component({
  selector: 'app-boloes',
  templateUrl: './boloes.component.html',
  styleUrls: ['./boloes.component.scss']
})
export class BoloesComponent implements OnInit {

  cards = [
    new CardModel({
        id: 1,
        type: enumCardName.MEGA_SENA,
        concurso: 2549,
        dtPremio: '17/12/2022',
        qntCota: 0,
        qntTotalCota: 6,
        qntDezenas: 6,
        vlPremio: 'R$3.000.000,00',
        qntGames: 10,
        vlCota: '10,12'
      }),
    new CardModel({
        id: 2,
        type: enumCardName.MEGA_DA_VIRADA,
        concurso: 2550,
        dtPremio: '31/12/2022',
        qntCota: 0,
        qntTotalCota: 51,
        qntDezenas: 9,
        vlPremio: 'R$450.000.000,00',
        qntGames: 10,
        vlCota: '100,05'
      }),
    new CardModel({
        id: 3,
        type: enumCardName.MEGA_DA_VIRADA,
        concurso: 2550,
        dtPremio: '31/12/2022',
        qntCota: 0,
        qntTotalCota: 51,
        qntDezenas: 10,
        vlPremio: 'R$450.000.000,00',
        qntGames: 10,
        vlCota: '250,14'
      }),
      new CardModel({
        id: 4,
        type: enumCardName.LOTO_FACIL,
        concurso: 2689,
        dtPremio: '15/12/2022',
        qntCota: 0,
        qntTotalCota: 5,
        qntDezenas: 15,
        vlPremio: 'R$1.500.000,00',
        qntGames: 10,
        vlCota: '6,75'
      }),
      new CardModel({
        id: 5,
        type: enumCardName.MAIS_MILIONARIA,
        concurso: '0030',
        dtPremio: '17/12/2022',
        qntCota: 0,
        qntTotalCota: 8,
        qntDezenas: 6,
        vlPremio: 'R$21.000.000,00',
        qntGames: 10,
        vlCota: '10,12'
      }),
      new CardModel({
        id: 6,
        type: enumCardName.QUINA,
        concurso: '6025',
        dtPremio: '15/12/2022',
        qntCota: 0,
        qntTotalCota: 16,
        qntDezenas: 6,
        vlPremio: 'R$6.500.000,00',
        qntGames: 10,
        vlCota: '10,12'
      }),
      new CardModel({
        id: 7,
        type: enumCardName.TIME_MANIA,
        concurso: '1873',
        dtPremio: '15/12/2022',
        qntCota: 0,
        qntTotalCota: 6,
        qntDezenas: 10,
        vlPremio: 'R$13.100.000,00',
        qntGames: 15,
        vlCota: '10,14'
      }),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
