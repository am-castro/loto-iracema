import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataSource: any;
  @Output() changeData = new EventEmitter<any>();
  displayedColumns: string[] = ['solicitacao', 'name', 'whatsapp', 'date', 'action'];

  constructor() { }
  ngOnInit(){ }

  changeElement(item: any){
    item.concluida = !item.concluida;
    this.changeData.emit(item);
  }
}
