import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { CardModel, enumCardName } from 'src/app/model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardsComponent {

  @Input() result: boolean = false;
  @Input() card: CardModel;
  public icons = {calendar: faCalendarCheck, clock: faClock, award: faClock};
  constructor(
    private router: Router
  ) { }

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
  getUrl(url?: string){
    if(url == enumCardName.MEGA_SENA || url == enumCardName.MEGA_DA_VIRADA){
      return 'Mega-Sena.aspx';
    }else if(url == enumCardName.MAIS_MILIONARIA){
      return 'Mais-Milionaria.aspx';
    }else if(url == enumCardName.LOTO_FACIL){
      return 'Lotofacil.aspx';
    }else if(url == enumCardName.QUINA){
      return 'Quina.aspx';
    }else if(url == enumCardName.LOTO_MANIA){
      return 'Lotomania.aspx';
    }else if(url == enumCardName.TIME_MANIA){
      return 'Timemania.aspx';
    }else if(url == enumCardName.DUPLA_SENA){
      return 'Dupla-Sena.aspx';
    }else if(url == enumCardName.FEDERAL){
      return 'Federal.aspx';
    }else if(url == enumCardName.LOTECA){
      return 'Loteca.aspx';
    }else if(url == enumCardName.DIA_DE_SORTE){
      return 'Dia-de-Sorte.aspx';
    }else if(url == enumCardName.SUPER_SETE){
      return 'Super-Sete.aspx';
    }else{
      return 'Mais-Milionaria.aspx';
    }
  }

  public onRedirect(card: CardModel) {
    this.router.navigate(['resultados', card.id]);
  }
}
