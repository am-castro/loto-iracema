import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/model/user.model';
import { environment } from 'src/environments/environment';
import { ContentTypeService } from '../content-type/content-type.service';

const API = `${environment.api_url}${environment.login}`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private route: Router,
    private _contentType: ContentTypeService,
    private _http: HttpClient
  ) { }

  getUsers(): Observable<Array<UserModel>> {
    return this._http.get<Array<UserModel>>(`${API}`);
  }

  newUser(user: UserModel): Observable<UserModel> {
    return this._http.post<UserModel>(`${API}`, user);
  }

  editUser(user: UserModel): Observable<UserModel> {
    return this._http.put<UserModel>(`${API}/${user.id}`, user);
  }

  deleteUser(userId: number): Observable<any> {
    return this._http.delete(`${API}/${userId}`);
  }

  login(email: any, password: any): Observable<object>{
    const login = {email: email, password: password};
    return this._http.post<object>(`${API}`, login, this._contentType.fullJson());
  }
}
