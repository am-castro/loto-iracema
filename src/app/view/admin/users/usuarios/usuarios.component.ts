import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { UsuariosFormComponent } from '../usuarios-form/usuarios-form.component';
import { UserService } from 'src/app/shared/service/user/user.service';
import { ToastService } from 'src/app/shared/service/toast/toast.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  icons = {plus: faPlus};
  public ativos: Array<any> = [];
  public bloqueados: Array<any> = [];
  constructor(
    private dialog: MatDialog,
    private _user: UserService,
    private toastr: ToastService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  private getAllUsers(){
    this._user.getUsers().subscribe({
      next: data => {
        this.ativos = data.filter((data: any)=> data.disabled==false);
        this.bloqueados = data.filter((data: any)=> data.disabled!=false);
      },
      error: error => {
        this.toastr.info(error.error, 'Erro!', 5000);
      }
    })
  }

  public change(item: any){
    this.getAllUsers();
  }

  novoUsuario(){
    const dialogRef = this.dialog.open(UsuariosFormComponent,{
      width: '500px'
    })
    dialogRef.afterClosed().subscribe(data=>{
      if(data){
        this.getAllUsers();
      }
    })
  }
}
