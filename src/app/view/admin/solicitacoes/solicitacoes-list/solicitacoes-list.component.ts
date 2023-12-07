import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { SolicitacaoModel } from 'src/app/shared/model/solicitacao.model';
import { SolicitacoesService } from 'src/app/shared/service/solicitacoes/solicitacoes.service';
import { ToastService } from 'src/app/shared/service/toast/toast.service';

@Component({
  selector: 'app-solicitacoes-list',
  templateUrl: './solicitacoes-list.component.html',
  styleUrls: ['./solicitacoes-list.component.scss']
})
export class SolicitacoesListComponent implements OnInit{
  icons = {plus: faPlus};
  private ELEMENT_DATA: Array<SolicitacaoModel> = [];

  constructor(
    private _solicitacoes: SolicitacoesService,
    private toast: ToastService
  ){
    this.naoConcluidas();
    this.concluidas();
  }
  ngOnInit() {
    this.getAllSolicitacoes();
  }

  // novaSolicitacao() {
  //   this.ELEMENT_DATA.push({solicitacao: 11, concluida: false, date: new Date().toLocaleDateString('pt-Br'), name: 'Contratante Beltrano', whatsapp: '859999999'});
  // }

  getAllSolicitacoes() {
    this._solicitacoes.getSolicitacoes().subscribe(data=>{
      this.ELEMENT_DATA = data;
    })
  }

  naoConcluidas() {
    return this.ELEMENT_DATA.filter(data=> data.disabled==true);
  }

  concluidas() {
    return this.ELEMENT_DATA.filter(data=> data.disabled!=true);
  }

  changeData(solicitacao: any) {
    this.getAllSolicitacoes();
    // let index = this.ELEMENT_DATA.indexOf(solicitacao);
    // this.ELEMENT_DATA = this.ELEMENT_DATA.filter(item=>item.solicitacao == solicitacao.solicitacao);
  }

  verSolicitacao(id: any){
    console.log(id);
  }
}
