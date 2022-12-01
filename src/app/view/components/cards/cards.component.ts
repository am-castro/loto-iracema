import { Component, Input, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() card: any;
  public concurso = 2556;
  id = 5;
  public icons = {calendar: faCalendarCheck, clock: faClock, award: faClock};
  qntGames = 1;
  qntDezenas = 2;
  award = 'R$ 3.000.000,00';
  constructor() { }

  ngOnInit(): void {
  }

}
