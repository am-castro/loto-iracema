import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { BoloesFormComponent } from '../boloes-form/boloes-form.component';
import { CardModel } from 'src/app/shared/model/card.model';
import { ToastService } from 'src/app/shared/service/toast/toast.service';
import { BoloesService } from 'src/app/shared/service/boloes/boloes.service';

@Component({
  selector: 'app-boloes-list',
  templateUrl: './boloes-list.component.html',
  styleUrls: ['./boloes-list.component.scss']
})
export class BoloesListComponent implements OnInit {

  public cards: Array<CardModel>;

  public icons = {plus: faPlus};

  constructor(
    private toast: ToastService,
    private dialog: MatDialog,
    private _boloes: BoloesService
  ) {
    this.getBoloes();
  }

  ngOnInit(): void { }

  private getBoloes() {
    this._boloes.getBoloes().subscribe(data=>{
      this.cards = data;
    })
  }

  public newBolao() {
    const dialogRef = this.dialog.open(BoloesFormComponent,{
      width: '400px',
      height: '600px'
    })
    dialogRef.afterClosed().subscribe(data=>{
      if(data){
        this._boloes.newBolao(data).subscribe(data=>{
          this.toast.success("Bolão criado com sucesso!");
        },()=>{
          this.toast.error("Bolão não criado, entre em contato com o administrador.");
        });
        this.cards.push(data);
        // this.naoConcluidas.push(data);
      }
    })
  }
  public activeCards() {
    return this.cards;
    // return this.cards.filter(card=> Date(card.dtPremio) < Date.now());
  }
}
