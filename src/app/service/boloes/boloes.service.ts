import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardModel } from 'src/app/model/card.model';
import { environment } from 'src/environments/environment';

const API = environment.api_url;
@Injectable({
  providedIn: 'root'
})
export class BoloesService {

  constructor(private _http: HttpClient) { }

  // getBoloes(): Observable<any> {
  getBoloes(): Observable<Array<CardModel>> {
    return this._http.get<Array<CardModel>>(`${API}/boloes`);
  }

  newBolao(bolao: CardModel): Observable<any> {
    return this._http.post(`${API}/boloes`, bolao);
  }

  editBolao(bolao: CardModel): Observable<any> {
    console.log(bolao);
    return this._http.put(`${API}/boloes/${bolao.id}`, bolao);
  }

  deleteBolao(bolaoId: number): Observable<any> {
    return this._http.delete(`${API}/boloes/${bolaoId}`);
  }
}
