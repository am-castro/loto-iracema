import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { UserModel } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user/user.service';
import { UsuariosFormComponent } from '../usuarios-form/usuarios-form.component';

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
    private _user: UserService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  private getAllUsers(){
    this._user.getUsers().subscribe(data=>{
      this.ativos = data.filter(data=> data.disabled==false);
      this.bloqueados = data.filter(data=> data.disabled!=false);
    })
  }

  public change(item: any){
    this.getAllUsers();
  }

  novoUsuario(){
    const dialogRef = this.dialog.open(UsuariosFormComponent,{
      width: '400px'
    })
    dialogRef.afterClosed().subscribe(data=>{
      if(data){
        // this.ativos.push(data);
        this._user.getUsers().subscribe(data=>{
          this.ativos = data.filter(data=> data.disabled==false);
          this.bloqueados = data.filter(data=> data.disabled!=false);
        })
      }
    })
  }
}
