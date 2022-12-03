import { Component, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public icons = {whatsapp: faWhatsapp, arrowUp: faArrowUp}
  constructor() { }

  ngOnInit(): void {
  }

}
