import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { UsuariosFormComponent } from 'src/app/view/admin/users/usuarios-form/usuarios-form.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user/user.service';
import { UserModel } from 'src/app/model/user.model';
import { ToastService } from 'src/app/service/toast/toast.service';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @Input() dataSource: any;
  @Output() changeData = new EventEmitter<any>();
  displayedColumns: string[] = ['name', 'email', 'action'];


  constructor(
    private dialog: MatDialog,
    private toast: ToastService,
    private _user: UserService
  ) { }
  ngOnInit(){}

  changeElement(item: any){
    item.disabled = !item.disabled;
    this._user.editUser(item).subscribe(data=>{
      this.toast.success(`Usuário ${data.disabled ? 'desabilitado' : 'habilitado'}`);
      this.changeData.emit(data);
    })
  }

  editUser(user: UserModel){
    const dialogRef = this.dialog.open(UsuariosFormComponent,{
      data: user,
      width: '400px'
    })
    dialogRef.afterClosed().subscribe(data=>{
      if(data){
        // this.ativos.push(data);
        this.changeData.emit(data);
      }
    })
  }
}
