import { Component, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.scss']
})
export class FloatButtonComponent {

  public icons = {whatsapp: faWhatsapp, arrowUp: faArrowUp}

  constructor() { }

  public toTop(){
    let element: any = document.getElementById("toolbar");
    element.scrollIntoView({behavior: "smooth"});
  }
}
