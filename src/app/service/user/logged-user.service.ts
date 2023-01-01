import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/model/user.model';

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
    }else if(this.getLocalStorage()){
      return this.getLocalStorage().name;
    }else{
      this.matarSessao();
    }
  }

  public getUserID() {
    if(this.getSessionStorage()){
      return this.getSessionStorage().id;
    }else if(this.getLocalStorage()){
      return this.getLocalStorage().id;
    }else{
      this.matarSessao();
    }
  }

  public matarSessao(){
    window.sessionStorage.clear();
    window.localStorage.clear();
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
