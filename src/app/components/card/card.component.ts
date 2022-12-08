import { Component, Input, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { CardModel, enumCardName } from 'src/app/model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardsComponent {

  @Input() card: CardModel;
  public icons = {calendar: faCalendarCheck, clock: faClock, award: faClock};
  constructor() { }

  getClass(cssClass: string){
    if(cssClass == enumCardName.MEGA_SENA || cssClass == enumCardName.MEGA_DA_VIRADA){
      return 'mega';
    }else if(cssClass == enumCardName.MAIS_MILIONARIA){
      return 'milionaria';
    }else if(cssClass == enumCardName.LOTO_FACIL){
      return 'lotofacil';
    }else if(cssClass == enumCardName.QUINA){
      return 'quina';
    }else if(cssClass == enumCardName.LOTO_MANIA){
      return 'lotomania';
    }else if(cssClass == enumCardName.TIME_MANIA){
      return 'timemania';
    }else if(cssClass == enumCardName.DUPLA_SENA){
      return 'duplasena';
    }else if(cssClass == enumCardName.FEDERAL){
      return 'federal';
    }else if(cssClass == enumCardName.LOTECA){
      return 'loteca';
    }else if(cssClass == enumCardName.DIA_DE_SORTE){
      return 'diadesorte';
    }else if(cssClass == enumCardName.SUPER_SETE){
      return 'supersete';
    }else{
      return 'milionaria';
    }
  }
}
