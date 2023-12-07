import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoloesFormComponent } from 'src/app/view/admin/boloes/boloes-form/boloes-form.component';
import { ConfirmDeletionComponent } from '../shared/confirm-deletion/confirm-deletion.component';
import { BoloesService } from '../../service/boloes/boloes.service';
import { ToastService } from '../../service/toast/toast.service';
import { CardModel } from '../../model/card.model';

@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.scss']
})
export class AdminCardComponent implements OnInit {

  @Input() card = new CardModel();

  constructor(
    private dialog: MatDialog,
    private _boloes: BoloesService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
  }

  public editCard(){
    const dialogRef = this.dialog.open(BoloesFormComponent,{
      data: this.card,
      width: '400px',
      height: '800px'
    });

    dialogRef.afterClosed().subscribe(data=>{
      if(data && data.id>=0){
        this._boloes.editBolao(data).subscribe(data=>{
          this.toast.success("Bolão editado com sucesso!");
        },()=>{
          this.toast.error("Não foi possível editar o bolão, contate administrador.")
        })
      }
    })
  }
  public deleteCard(){
    const dialogRef = this.dialog.open(ConfirmDeletionComponent,{
      data: {name: this.card.type, delete: false},
      width: '350px'
    })
    dialogRef.afterClosed().subscribe(data=>{
      if(data.delete){
        this._boloes.deleteBolao(this.card.id).subscribe(data=>{
          this.toast.success(`${this.card.type} deletado(a) com sucesso!`);
        })
      }
    })
  }
}
