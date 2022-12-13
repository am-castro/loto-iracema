import { Component, OnInit } from '@angular/core';
import { CardModel, enumCardName } from 'src/app/model/card.model';

@Component({
  selector: 'app-boloes-list',
  templateUrl: './boloes-list.component.html',
  styleUrls: ['./boloes-list.component.scss']
})
export class BoloesListComponent implements OnInit {

  card = new CardModel({id: 1, type: enumCardName.MAIS_MILIONARIA, concurso: 2550, dtPremio: '31/12/2022', qntCota: 0, qntTotalCota: 15, qntDezenas: 6, vlPremio: 'R$130.254.649,47', qntGames: 5, vlCota: '4,50'});
  constructor() { }

  ngOnInit(): void {
  }

}
