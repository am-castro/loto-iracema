import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SolicitacoesService } from '../../service/solicitacoes/solicitacoes.service';
import { ToastService } from '../../service/toast/toast.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataSource: any;
  @Output() changeData = new EventEmitter<any>();
  displayedColumns: string[] = ['id', 'name', 'tel', 'createdAt', 'action'];

  constructor(
    private _solicitacoes: SolicitacoesService,
    private toast: ToastService
  ) { }
  ngOnInit(){ }

  changeElement(item: any){
    item.disabled = !item.disabled;
    this._solicitacoes.editSolicitacoes(item).subscribe(data=>{
      this.toast.success(`Solicitação ${item.disabled ? 'atendida': 'não atendida'}`);
      this.changeData.emit(data);
    })
  }
}
