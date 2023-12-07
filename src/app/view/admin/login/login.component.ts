import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/service/toast/toast.service';
import { UserService } from 'src/app/shared/service/user/user.service';
import { LoggedUserService } from 'src/app/shared/service/user/logged-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public checked: boolean;
  public error: string = '';
  public loginFormGroup: FormGroup;

  public isShowPassword = false;
  public loading = false;

  public username = '';
  public password = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastService,
    private userService: LoggedUserService,
    private _user: UserService
  ) {}

  ngOnInit(): void {
    this.isLogged();
  }

  public submit(){
    this.loading = true;
    this._user.login(this.username, this.password).subscribe({
      next: data => {
        this.loading = false;
        this.userService.setSessionStorage(data.user);
        this.userService.setToken(data.token);
        this.toastr.success('Login efetuado com sucesso!', 'Sucesso!', 5000);
        this.router.navigate(['admin','solicitacoes']);
      },
      error: error => {
        this.loading = false;
        this.toastr.info(error.error, 'Erro!', 5000);
      },
    });
  }

  private isLogged(){
    let msg: string;
    let logged;
    logged = window.sessionStorage.getItem('hh.session');
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
