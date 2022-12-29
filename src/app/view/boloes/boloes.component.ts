import { Component, OnInit } from '@angular/core';
import { BoloesService } from 'src/app/service/boloes/boloes.service';

@Component({
  selector: 'app-boloes',
  templateUrl: './boloes.component.html',
  styleUrls: ['./boloes.component.scss']
})
export class BoloesComponent implements OnInit {

  public cards: any = [];

  constructor(private _boloes: BoloesService) {
    this.getBoloes();
  }

  ngOnInit(): void { }

  getBoloes() {
    this._boloes.getBoloes().subscribe(data=>{
      this.cards = data;
    })
  }

}
