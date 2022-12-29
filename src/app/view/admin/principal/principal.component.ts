import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  constructor(
    private route: Router,
    private _user: UserService
    ) { }

  ngOnInit(): void {
  }

  usuarioAtual(){
    return this._user.usuarioAtual();
  }
  logoff(){
    this._user.matarSessao();
  }
}
