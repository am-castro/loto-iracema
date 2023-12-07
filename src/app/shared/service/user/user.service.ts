import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContentTypeService } from '../content-type/content-type.service';
import { UserModel } from '../../model/user.model';
import { LoggedUserService } from './logged-user.service';

const API = `${environment.api_url}/${environment.v1}`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userId = '';

  constructor(
    private _contentType: ContentTypeService,
    private _http: HttpClient,
    private userService: LoggedUserService
  ) {
    this.userId = this.userService.getUserID();
  }

  public getUsers(): Observable<any> {
    const URL = `${API}/${this.userId}/user/all`;
    return this._http.get(`${URL}`, this._contentType.fullJson());
  }

  public newUser(user: UserModel): Observable<any> {
    const URL = `${API}/${this.userId}/user`;
    return this._http.post<any>(`${URL}`, user, this._contentType.fullJson());
  }

  public editUser(user: UserModel): Observable<any> {
    const URL = `${API}/${this.userId}/user`;
    return this._http.put<any>(`${URL}`, user, this._contentType.fullJson());
  }

  public changeDisableState(userId: number): Observable<any> {
    const URL = `${API}/${this.userId}/user/block`;
    return this._http.put<any>(`${URL}`, userId, this._contentType.fullJson());
  }

  public deleteUser(userId: number): Observable<any> {
    const URL = `${API}/${this.userId}/user`;
    return this._http.delete(`${URL}`);
  }

  login(username: any, password: any): Observable<any>{
    const login = {username: username, password: password};
    return this._http.post(`${environment.api_url}/${environment.login}`, login, this._contentType.fullJsonWithoutToken());
  }
}
