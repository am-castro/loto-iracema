import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { UsuariosFormComponent } from 'src/app/view/admin/users/usuarios-form/usuarios-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastService } from '../../service/toast/toast.service';
import { UserService } from '../../service/user/user.service';
import { UserModel } from '../../model/user.model';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @Input() dataSource: any;
  filteredData: any;

  @Output() changeData = new EventEmitter<any>();
  displayedColumns: string[] = ['name', 'email', 'createdAt', 'modifiedAt', 'action'];


  constructor(
    private dialog: MatDialog,
    private toast: ToastService,
    private _user: UserService
  ) { }
  ngOnInit(){
    this.filteredData = this.dataSource;
  }

  changeDisableState(item: number){
    this._user.changeDisableState(item).subscribe({
      next: (data: boolean) => {
        this.toast.success(`Usuário ${data ? 'desabilitado' : 'habilitado'}`);
        this.changeData.emit(data);
      },
      error: (error: any) => {
        this.toast.error('Ocorreu um erro ao bloquear usuário', 'Erro!', 5000);
      }
    });
  }

  search(event: String){
    if(event){
      this.filter(event);
    }else{
      this.dataSource = this.filteredData;
    }
  }

  editUser(user: UserModel){
    const dialogRef = this.dialog.open(UsuariosFormComponent,{
      data: user,
      width: '500px'
    })
    dialogRef.afterClosed().subscribe(data=>{
      if(data){
        // this.ativos.push(data);
        this.changeData.emit(data);
      }
    })
  }

  public filter(value: String){
    this.dataSource = this.dataSource.filter((data: any)=> data.name.toLowerCase().includes(value.toLowerCase()));
  }
}
