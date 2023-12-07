import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  constructor(
    private route: Router
  ) { }

  public usuarioAtual(){
    if(this.getSessionStorage()){
      return this.getSessionStorage().name;
    }else{
      this.matarSessao();
    }
  }

  public getUserID() {
    if(this.getSessionStorage()){
      return this.getSessionStorage().id;
    }else{
      this.matarSessao();
    }
  }

  public matarSessao(){
    window.sessionStorage.clear();
    window.localStorage.clear();
    this.route.navigateByUrl('login');
  }

  public setSessionStorage(session: object) {
    window.sessionStorage.setItem('hh.session', JSON.stringify(session));
  }

  public setToken(token: string) {
    window.sessionStorage.setItem('hh.token', token);
  }

  public getToken() {
    return window.sessionStorage.getItem('hh.token');
  }

  public getSessionStorage(){
    const session = window.sessionStorage.getItem('hh.session');
    return JSON.parse(session!);
  }
}
