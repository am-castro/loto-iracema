import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  constructor(private router: Router) {
    console.log(
      `




      Olá, tudo bem com você?
      Meu nome é Marcos, o dev por trás do site.
      Aqui está meu portfólio, acesse:
      https://am-castro.github.io

      Vamos trabalhar juntos?




      `
    )
  }
}
