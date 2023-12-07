import { Component, OnInit } from '@angular/core';
import { ResultService } from '../shared/providers/services/result.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  card: any;
  loterias = [
    { type: 'mega-sena', name: 'Mega Sena', id: 1 },
    { type: 'dupla-sena', name: 'Dupla Sena', id: 2 },
    { type: 'lotomania', name: 'Lotomani', id: 3 },
    { type: 'quina', name: 'Quina', id: 4 },
    { type: 'loteria-federal', name: 'Federal', id: 5 },
    { type: 'loteca', name: 'Loteca', id: 6 },
    { type: 'lotofacil', name: 'Lotofacil', id: 8 },
    { type: 'timemania', name: 'Timemania', id: 9 },
    { type: 'dia-de-sorte', name: 'Dia de Sorte', id: 10 },
    { type: 'super-sete', name: 'Super Sete', id: 11 },
    { type: 'mais-milionaria', name: '+ Milionária', id: 12 },
  ]

  selectedLoteria: any;

  constructor(
    private _result: ResultService,
    private activatedRoute: ActivatedRoute
  ) {
    // this.transformToOptions(this.activatedRoute.snapshot.data['loterias']);
  }
  ngOnInit() {
  }

  getSelected(a: any) {
    this.selectedLoteria = this.loterias.filter(loteria => loteria.id == a.value)[0];
    this._result.getResults(a.value).subscribe({
      next: data => {
        this.card = data;
      },
      error: error => {}
    });
  }
}
