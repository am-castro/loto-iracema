import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { UsuariosFormComponent } from '../usuarios-form/usuarios-form.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  icons = {plus: faPlus};
  private ELEMENT_DATA = [
    {id: 1, ativo: false, email: 'email@email.com', name: 'Admin', senha: 'admin'},
    {id: 2, ativo: true, email: 'email@email.com', name: 'Antonio', senha: 'admin'},
    {id: 3, ativo: false, email: 'email@email.com', name: 'Teste 1', senha: 'admin'},
    {id: 4, ativo: true, email: 'email@email.com', name: 'Kimberli', senha: 'admin'},
    {id: 5, ativo: false, email: 'email@email.com', name: 'Danilo', senha: 'admin'},
    {id: 6, ativo: false, email: 'email@email.com', name: 'Teste 2', senha: 'admin'},
    {id: 7, ativo: false, email: 'email@email.com', name: 'Usuário de teste', senha: 'admin'},
    {id: 8, ativo: false, email: 'email@email.com', name: 'Novo usuário', senha: 'admin'},
    {id: 9, ativo: true, email: 'email@email.com', name: 'Novo username', senha: 'admin'},
    {id: 10, ativo: true, email: 'email@email.com', name: 'Teste de usuário', senha: 'admin'},
  ];
  public ativos: Array<any> = [];
  public bloqueados: Array<any> = [];
  constructor(
    private dialog: MatDialog
  ) {
    this.ativos = this.ELEMENT_DATA.filter(data=> data.ativo!=false);
    this.bloqueados = this.ELEMENT_DATA.filter(data=> data.ativo==false);
  }

  ngOnInit(): void {
  }

  novoUsuario(){
    const dialogRef = this.dialog.open(UsuariosFormComponent,{
      width: '400px'
    })
    dialogRef.afterClosed().subscribe(data=>{
      if(data){
        // this.naoConcluidas.push(data);
      }
    })
  }
}
