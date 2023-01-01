import { Component, Inject, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserModel } from 'src/app/model/user.model';
import { ToastService } from 'src/app/service/toast/toast.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent implements OnInit {

  public hide = true;
  public newUser = new FormGroup({
    id: new FormControl(this.data ? this.data.id : null),
    name: new FormControl(this.data ? this.data.name : '', Validators.required),
    email: new FormControl(this.data ? this.data.email : '', [Validators.email, Validators.required]),
    password: new FormControl(this.data ? this.data.password : '', Validators.required),
    createdAt: new FormControl(this.data ? this.data.createdAt : new Date(Date.now())),
    disabled: new FormControl(this.data ? this.data.disabled : false)
  });
  constructor(
    private toast: ToastService,
    private _user: UserService,
    public dialogRef: MatDialogRef<UsuariosFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel
  ) { }

  ngOnInit(): void {
  }

  public saveUser(){
    if(this.newUser.valid){
      if(this.data && this.data.id){
        this._user.editUser(this.newUser.value).subscribe(data=>{
          this.toast.success(`Usuário ${data.name} editado com sucesso!`);
          this.dialogRef.close(data);
        },()=>{
          this.toast.error('Não foi possível editar usuário.');
        })
      }else{
        this._user.newUser(this.newUser.value).subscribe(data=>{
          this.toast.success(`Usuário ${data.name} criado com sucesso!`);
          this.dialogRef.close(data);
        },()=>{
          this.toast.error('Não foi possível criar usuário.');
        });
      }
    }
  }
}
