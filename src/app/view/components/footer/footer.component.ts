import { Component, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public icons = {whatsapp: faWhatsapp, email: faMailBulk};
  constructor() { }

  ngOnInit(): void {
  }

}
