import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  public success(message: string, title = '', time = 5000){
    this.toastr.success(message, title, {progressBar: true, progressAnimation: 'decreasing', timeOut: time, positionClass: "toast-top-center"});
  }

  public error(message: string, title = '', time = 5000){
    this.toastr.error(message, title, {progressBar: true, progressAnimation: 'decreasing', timeOut: time, positionClass: "toast-top-center"});
  }

  public info(message: string, title = '', time = 5000){
    this.toastr.info(message, title, {progressBar: true, progressAnimation: 'decreasing', timeOut: time, positionClass: "toast-top-center"});
  }
}
