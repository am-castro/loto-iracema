import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface confirmation {
  name: string,
  delete: boolean
}

@Component({
  selector: 'app-confirm-deletion',
  templateUrl: './confirm-deletion.component.html',
  styleUrls: ['./confirm-deletion.component.scss']
})
export class ConfirmDeletionComponent implements OnInit {

  public checked: any;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeletionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: confirmation
  ) { }

  ngOnInit(): void {
  }

  public close(del: boolean){
    this.data.delete = del;
    this.dialogRef.close(this.data);
  }
}
