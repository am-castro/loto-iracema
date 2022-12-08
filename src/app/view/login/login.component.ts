import { Router } from '@angular/router';
import { ToastService } from '../../service/toast/toast.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public checked: boolean;
  public error: string = '';
  public loginFormGroup = this.formBuilder.group({
    username: '',
    password: ''
  });
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastService
  ) { }

  ngOnInit(): void {
    this.isLogged();
  }

  public submit(){
    if(!this.loginFormGroup.value.username || !this.loginFormGroup.value.password){
      this.error = 'Preencha todos os campos';
      this.toastr.info('Preencha todos os campos!');
    }else if(this.loginFormGroup.value.username !== 'admin' || this.loginFormGroup.value.password !== 'admin'){
      this.error = 'Login ou senha incorreto!';
      this.toastr.info('Login ou senha incorreto!');
    }else if(this.loginFormGroup.value.username === 'admin' && this.loginFormGroup.value.password === 'admin'){
      const jsonPrepared = JSON.stringify(this.setUser());
      if(this.checked){
        window.localStorage.setItem('hh.session', jsonPrepared);
      }else{
        window.sessionStorage.setItem('hh.session', jsonPrepared);
      }
      this.error = '';
      this.isLogged();
    }
  }

  public setUser(){
    return {
      "username": this.loginFormGroup.value.username,
      "pass": this.loginFormGroup.value.password
    }
  }

  private isLogged(){
    let msg: string;
    let logged;
    if(this.checked){
      logged = window.localStorage.getItem('hh.session');
    }else{
      logged = window.sessionStorage.getItem('hh.session');
    }
    if(logged){
      const authUser = JSON.parse(logged);
      msg = `Bem vindo ${authUser.username}!`;
      this.router.navigate(['admin','solicitacoes']);
      this.toastr.success(msg);
    }else{
      msg = this.error ? this.error : 'Por favor, se autentique.';
      this.toastr.info(msg);
    }
  }
}
