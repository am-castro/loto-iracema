import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.scss']
})
export class SolicitacoesComponent implements OnInit{
  icons = {plus: faPlus};
  private ELEMENT_DATA = [
    {solicitacao: 1, concluida: false, date: new Date().toLocaleDateString('pt-Br'), name: 'João', whatsapp: '859999999'},
    {solicitacao: 2, concluida: true, date: new Date().toLocaleDateString('pt-Br'), name: 'Maria', whatsapp: '859999999'},
    {solicitacao: 3, concluida: false, date: new Date().toLocaleDateString('pt-Br'), name: 'Beltrano', whatsapp: '859999999'},
    {solicitacao: 4, concluida: true, date: new Date().toLocaleDateString('pt-Br'), name: 'Cicrano', whatsapp: '859999999'},
    {solicitacao: 5, concluida: false, date: new Date().toLocaleDateString('pt-Br'), name: 'Pessoa', whatsapp: '859999999'},
    {solicitacao: 6, concluida: false, date: new Date().toLocaleDateString('pt-Br'), name: 'Pessoas', whatsapp: '859999999'},
    {solicitacao: 7, concluida: false, date: new Date().toLocaleDateString('pt-Br'), name: 'Comprador', whatsapp: '859999999'},
    {solicitacao: 8, concluida: false, date: new Date().toLocaleDateString('pt-Br'), name: 'Cliente', whatsapp: '859999999'},
    {solicitacao: 9, concluida: true, date: new Date().toLocaleDateString('pt-Br'), name: 'Apostador', whatsapp: '859999999'},
    {solicitacao: 10, concluida: true, date: new Date().toLocaleDateString('pt-Br'), name: 'Contratante', whatsapp: '859999999'},
  ];

  constructor(
  ){
    this.naoConcluidas();
    this.concluidas();
  }
  ngOnInit() {
  }

  novaSolicitacao() {
    this.ELEMENT_DATA.push({solicitacao: 11, concluida: false, date: new Date().toLocaleDateString('pt-Br'), name: 'Contratante Beltrano', whatsapp: '859999999'});
  }

  naoConcluidas() {
    return this.ELEMENT_DATA.filter(data=> data.concluida==false);
  }

  concluidas() {
    return this.ELEMENT_DATA.filter(data=> data.concluida!=false);
  }

  changeData(solicitacao: any) {
    // let index = this.ELEMENT_DATA.indexOf(solicitacao);
    // this.ELEMENT_DATA = this.ELEMENT_DATA.filter(item=>item.solicitacao == solicitacao.solicitacao);
  }

  verSolicitacao(id: any){
    console.log(id);
  }
}


