import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModel } from 'src/app/model/card.model';
import { BoloesFormComponent } from 'src/app/view/admin/boloes-form/boloes-form.component';

@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.scss']
})
export class AdminCardComponent implements OnInit {

  @Input() card = new CardModel();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public editCard(){
    this.dialog.open(BoloesFormComponent,{
      data: this.card.id,
      width: '700px',
      height: '700px'
    })
  }
}
