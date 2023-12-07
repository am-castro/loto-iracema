import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentTypeService } from 'src/app/shared/service/content-type/content-type.service';
import { environment } from 'src/environments/environment';

const API = `${environment.api_types}`;
@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(
    private _http: HttpClient,
    private _contentType: ContentTypeService
  ) { }

  public getLoterias(): Observable<any> {
    return this._http.get(`${API}`);
  }

  public getResults(loteria: string): Observable<any>{
    return this._http.get(`${API}/${loteria}`);
  }
}
