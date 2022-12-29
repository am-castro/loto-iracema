import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ToastService } from 'src/app/service/toast/toast.service';


@Component({
  selector: 'app-boloes-form',
  templateUrl: './boloes-form.component.html',
  styleUrls: ['./boloes-form.component.scss']
})
export class BoloesFormComponent implements OnInit {
  options: string[] = [
    'MEGA-SENA',
    'MEGA DA VIRADA',
    '+MILIONÁRIA',
    'LOTOFÁCIL',
    'QUINA',
    'LOTOMANIA',
    'TIMEMANIA',
    'DUPLA SENA',
    'FEDERAL',
    'LOTECA',
    'DIA DE SORTE',
    'SUPER SETE'
  ];
  // options: number[] = [
  //   1,2,3,4,5,6,7,8,9,10,
  //   11,12,13,14,15,16,17,18,19,20,
  //   21,22,23,24,25,26,27,28,29,30,
  //   31,32,33,34,35,36,37,38,39,40,
  //   41,42,43,44,45,46,47,48,49,50,
  //   51,52,53,54,55,56,57,58,59,60
  // ];
  filteredOptions: Observable<string[]>;

  public newBolao = new FormGroup({
    id: new FormControl(this.data ? this.data.id : null),
    type: new FormControl(this.data ? this.data.type : '', Validators.required),
    qntGames: new FormControl(this.data ? this.data.qntGames : null, Validators.required),
    qntDezenas: new FormControl(this.data ? this.data.qntDezenas : null, Validators.required),
    concurso: new FormControl(this.data ? this.data.concurso : null, Validators.required),
    qntCota: new FormControl(this.data ? this.data.qntCota : null, Validators.required),
    qntTotalCota: new FormControl(this.data ? this.data.qntTotalCota : null, Validators.required),
    vlCota: new FormControl(this.data ? this.data.vlCota : null, Validators.required),
    vlPremio: new FormControl(this.data ? this.data.vlPremio : null, Validators.required),
    dtPremio: new FormControl(this.data ? this.data.dtPremio : null, Validators.required)
  });
  constructor(
    private toast: ToastService,
    public dialogRef: MatDialogRef<BoloesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.filteredOptions = this.newBolao.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value.type || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  saveBolao(){
    if(!this.newBolao.invalid){
      this.dialogRef.close(this.newBolao.value);
    }else{
      this.toast.info("Verifique se você preencheu todos os dados corretamente!")
    }
  }
}