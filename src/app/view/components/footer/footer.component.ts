import { Component } from '@angular/core';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public icons = {
    whatsapp: faWhatsapp,
    facebook: faFacebookF,
    instagram: faInstagram,
    email: faEnvelope};

}
