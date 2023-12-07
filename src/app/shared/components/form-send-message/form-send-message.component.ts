import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../service/toast/toast.service';

@Component({
  selector: 'app-form-send-message',
  templateUrl: './form-send-message.component.html',
  styleUrls: ['./form-send-message.component.scss']
})
export class FormSendMessageComponent implements OnInit {

  public contatoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    assunto: new FormControl('', Validators.required),
    mensagem: new FormControl('', Validators.required)
  });
  constructor(
    private toastr: ToastService
  ) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.contatoForm.valid){
    // this.toastr.success('Formulário enviado!');
    this.toastr.error('Desculpe pelo transtorno. Sua dúvida não foi registrada, por favor entre em contato pelo número: (85) 3274.7360');
    }else{
      this.toastr.error('Por favor, verifique se seu e-mail está escrito corretamente ou se tem algum campo vazio.');
    }
  }
}
