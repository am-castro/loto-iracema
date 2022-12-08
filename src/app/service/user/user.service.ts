import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private route: Router) { }

  public usuarioAtual(){
    if(this.getSessionStorage()){
      return this.getSessionStorage().username;
    }else if(this.getLocalStorage()){
      return this.getLocalStorage().username;
    }else{
      this.matarSessao();
    }
  }

  public matarSessao(){
    window.sessionStorage.setItem('hh.session','');
    window.localStorage.setItem('hh.session','');
    this.route.navigateByUrl('login');
  }

  private getSessionStorage(){
    const session = window.sessionStorage.getItem('hh.session');
    return JSON.parse(session!);
  }
  private getLocalStorage(){
    const local = window.localStorage.getItem('hh.session');
    return JSON.parse(local!);
  }

}
