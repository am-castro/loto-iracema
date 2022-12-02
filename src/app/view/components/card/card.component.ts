import { Component, Input, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { enumCardName } from 'src/app/model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() card: any;
  public icons = {calendar: faCalendarCheck, clock: faClock, award: faClock};
  constructor() { }

  ngOnInit(): void {
  }
}
