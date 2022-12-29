import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @Input() dataSource: any;
  @Output() changeData = new EventEmitter<any>();
  displayedColumns: string[] = ['name', 'email', 'action'];


  constructor() { }
  ngOnInit(){}

  changeElement(item: any){
    item.concluida = !item.concluida;
    this.changeData.emit(item);
  }
}
