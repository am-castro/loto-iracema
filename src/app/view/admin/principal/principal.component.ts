import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUserService } from 'src/app/shared/service/user/logged-user.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  constructor(
    private route: Router,
    private _user: LoggedUserService
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
