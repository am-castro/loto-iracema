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
    {solicitacao: 1, concluida: false, date: new Date().toLocaleDateString('pt-Br'), name: 'João'},
    {solicitacao: 2, concluida: true, date: new Date().toLocaleDateString('pt-Br'), name: 'Maria'},
    {solicitacao: 3, concluida: false, date: new Date().toLocaleDateString('pt-Br'), name: 'Beltrano'},
    {solicitacao: 4, concluida: true, date: new Date().toLocaleDateString('pt-Br'), name: 'Cicrano'},
    {solicitacao: 5, concluida: false, date: new Date().toLocaleDateString('pt-Br'), name: 'Pessoa'},
    {solicitacao: 6, concluida: false, date: new Date().toLocaleDateString('pt-Br'), name: 'Pessoas'},
    {solicitacao: 7, concluida: false, date: new Date().toLocaleDateString('pt-Br'), name: 'Comprador'},
    {solicitacao: 8, concluida: false, date: new Date().toLocaleDateString('pt-Br'), name: 'Cliente'},
    {solicitacao: 9, concluida: true, date: new Date().toLocaleDateString('pt-Br'), name: 'Apostador'},
    {solicitacao: 10, concluida: true, date: new Date().toLocaleDateString('pt-Br'), name: 'Contratante'},
  ];
  public concluidas: Array<any> = [];
  public naoConcluidas: Array<any> = [];

  constructor(
  ){
    this.concluidas = this.ELEMENT_DATA.filter(data=> data.concluida!=false);
    this.naoConcluidas = this.ELEMENT_DATA.filter(data=> data.concluida==false);
  }
  ngOnInit() {
  }


  verSolicitacao(id: any){
    console.log(id);
  }
}


