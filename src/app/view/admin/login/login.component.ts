import { Router } from '@angular/router';
import { ToastService } from '../../../service/toast/toast.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public checked: boolean;
  public error: string = '';
  public loginFormGroup = this.formBuilder.group({
    email: '',
    password: ''
  });
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastService,
    private _user: UserService
  ) { }

  ngOnInit(): void {
    this.isLogged();
  }

  public submit(){
    this._user.login(this.loginFormGroup.value.email, this.loginFormGroup.value.password).subscribe(data=>{
      console.log(data);

      // if(data[0] && data[0].email){
      //   const user = data[0];
      //   if(this.loginFormGroup.value.email==user.email && this.loginFormGroup.value.password==user.password){
      //     const jsonPrepared = JSON.stringify(user);
      //     if(this.checked){
      //       window.localStorage.setItem('hh.session', jsonPrepared);
      //     }else{
      //       window.sessionStorage.setItem('hh.session', jsonPrepared);
      //     }
      //     this.error = '';
      //     this.isLogged();
      //   }else if(this.loginFormGroup.value.email==user.email && this.loginFormGroup.value.password!=user.password){
      //     this.error = 'Senha incorreta!';
      //     this.toastr.info('Senha incorreta!');
      //   }
      // }else{
      //   this.error = 'E-mail incorreto!';
      //   this.toastr.info('E-mail incorreto!');
      // }
    }),(error:any)=>{
      console.log(error);

        // this.toastr.error(error.error);
    }
    // if(!this.loginFormGroup.value.username || !this.loginFormGroup.value.password){
    //   this.error = 'Preencha todos os campos';
    //   this.toastr.info('Preencha todos os campos!');
    // }else if(this.loginFormGroup.value.username !== 'admin' || this.loginFormGroup.value.password !== 'admin'){
    //   this.error = 'Login ou senha incorreto!';
    //   this.toastr.info('Login ou senha incorreto!');
    // }else if(this.loginFormGroup.value.username === 'admin' && this.loginFormGroup.value.password === 'admin'){
    //   const jsonPrepared = JSON.stringify(this.setUser());
    //   if(this.checked){
    //     window.localStorage.setItem('hh.session', jsonPrepared);
    //   }else{
    //     window.sessionStorage.setItem('hh.session', jsonPrepared);
    //   }
    //   this.error = '';
    //   this.isLogged();
    // }
  }

  check(){
    this.checked = !this.checked;
  }
  // public setUser(){
  //   return {
  //     "email": this.loginFormGroup.value.email,
  //     "pass": this.loginFormGroup.value.password
  //   }
  // }

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
      msg = `Bem vindo ${authUser.name}!`;
      this.router.navigate(['admin','solicitacoes']);
      this.toastr.success(msg);
    }else{
      msg = this.error ? this.error : 'Por favor, se autentique.';
      this.toastr.info(msg);
    }
  }
}
