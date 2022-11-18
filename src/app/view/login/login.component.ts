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
      this.toastr.error('Preencha todos os campos!');
    }else if(this.loginFormGroup.value.username !== 'admin' || this.loginFormGroup.value.password !== 'admin'){
      this.error = 'Login ou senha incorreto!';
      this.toastr.error('Login ou senha incorreto!');
    }else if(this.loginFormGroup.value.username === 'admin' && this.loginFormGroup.value.password === 'admin'){
      const jsonPrepared = JSON.stringify(this.setUser());
      window.localStorage.setItem('hh.session',jsonPrepared);
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
    let type: number;

    const logged = window.localStorage.getItem('hh.session');
    if(logged){
      const authUser = JSON.parse(logged);
      msg = `Bem vindo ${authUser.username}!`;
      type = 1;
      if(authUser.isAdmin){
        this.router.navigate(['admin', 'dashboard']);
      }else{
        this.router.navigate(['client', 'home']);
      }
    }else{
      msg = this.error ? this.error : 'Por favor, se autentique.';
      type = 2
    }
    this.toastr.success(msg);
  }
}
