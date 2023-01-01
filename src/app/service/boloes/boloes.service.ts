import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardModel } from 'src/app/model/card.model';
import { environment } from 'src/environments/environment';

const API = `${environment.api_url}/${environment.boloes}`;
@Injectable({
  providedIn: 'root'
})
export class BoloesService {

  constructor(private _http: HttpClient) { }

  // getBoloes(): Observable<any> {
  getBoloes(): Observable<Array<CardModel>> {
    return this._http.get<Array<CardModel>>(`${API}`);
  }

  newBolao(bolao: CardModel): Observable<any> {
    return this._http.post(`${API}`, bolao);
  }

  editBolao(bolao: CardModel): Observable<any> {
    return this._http.put(`${API}/${bolao.id}`, bolao);
  }

  deleteBolao(bolaoId: number): Observable<any> {
    return this._http.delete(`${API}/${bolaoId}`);
  }
}
