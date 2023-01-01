import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SolicitacaoModel } from 'src/app/model/solicitacao.model';
import { environment } from 'src/environments/environment';

const API = `${environment.api_url}/${environment.solicitacoes}`;
@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {

  constructor(
    private route: Router,
    private _http: HttpClient
  ) { }

  getSolicitacoes(): Observable<Array<SolicitacaoModel>> {
    return this._http.get<Array<SolicitacaoModel>>(`${API}`);
  }

  newSolicitacoes(solicitacao: SolicitacaoModel): Observable<SolicitacaoModel> {
    return this._http.post<SolicitacaoModel>(`${API}`, solicitacao);
  }

  editSolicitacoes(solicitacao: SolicitacaoModel): Observable<SolicitacaoModel> {
    return this._http.put<SolicitacaoModel>(`${API}/${solicitacao.id}`, solicitacao);
  }

  deleteSolicitacoes(solicitacaoId: number): Observable<any> {
    return this._http.delete(`${API}/${solicitacaoId}`);
  }
}
