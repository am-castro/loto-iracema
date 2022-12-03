import { Component, OnInit } from '@angular/core';
import { faAddressBook, faAddressCard, faMap } from '@fortawesome/free-regular-svg-icons';
import { faLocationArrow, faMapMarked, faMapMarkedAlt, faMapPin, faMapSigns, faSearchLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public icons = {localization: faMapMarkedAlt}
  constructor() { }

  ngOnInit(): void {
  }

}
