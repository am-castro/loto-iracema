import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CardModel } from '../../model/card.model';

const API = `${environment.api_url}/${environment.v1}`;
@Injectable({
  providedIn: 'root'
})
export class BoloesService {

  constructor(private _http: HttpClient) { }

  // getBoloes(): Observable<any> {
  getBoloes(): Observable<Array<CardModel>> {
    return this._http.get<Array<CardModel>>(`${API}/${environment.boloes}`);
  }

  newBolao(bolao: CardModel): Observable<any> {
    return this._http.post(`${API}/${environment.boloes}`, bolao);
  }

  editBolao(bolao: CardModel): Observable<any> {
    return this._http.put(`${API}/${environment.boloes}/${bolao.id}`, bolao);
  }

  deleteBolao(bolaoId: number): Observable<any> {
    return this._http.delete(`${API}/${environment.boloes}/${bolaoId}`);
  }
}
