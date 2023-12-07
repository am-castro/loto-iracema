import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { LoggedUserService } from '../user/logged-user.service';

@Injectable({ providedIn: 'root' })

export class ContentTypeService {

    private token = '';
    constructor(
      private userService: LoggedUserService
    ) {
      this.token = 'Bearer ' + this.userService.getToken();
    }

    public fullJson(): any {
      if(this.token)
        return {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.token
        })};
      else
        return {
            headers: new HttpHeaders({
                // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8;application/json',
                'Content-Type': 'application/json',
            })};
    }

    public fullJsonWithoutToken(): any {
      return {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
          })
      };
    }

    public pageJson(): any {
        return {
            headers: new HttpHeaders({
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8;application/page+json',
                'Content-Type': 'application/page+json'
            })
        };
    }

    public fullJsonResponseText(): any {
        return {
            headers: new HttpHeaders({
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8;application/json',
                'Content-Type': 'application/json'
            }),
            responseType: 'text',
        };
    }

    public fullJsonResponseBlobProgress(): any {
      return {
          headers: new HttpHeaders({
              'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8;application/json',
              'Content-Type': 'application/json'
          }),
          responseType: 'blob',
          reportProgress: true
      };
    }

    public fullJsonResponseBlob(): any {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            //responseType: 'blob' as 'json',
            responseType: 'arraybuffer',
            reportProgress: true,
            observe: 'events'
        };
    }

    public fullJsonProgress(): any {
      return {
          headers: new HttpHeaders({
              'Content-Type': 'application/json'
          }),
          //responseType: 'blob' as 'json',
          reportProgress: true,
          observe: 'events'
      };
    }

    public pageJsonResponseText(): any {
        return {
            headers: new HttpHeaders({
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8;application/page+json',
                'Content-Type': 'application/page+json'
            }),
            responseType: 'text'
        };
    }

    public fullText(): any {
      return {
          headers: new HttpHeaders({
              'Accept': 'text/html',
              'Content-Type': 'text/html'
          })
      };
    }

    public responseText(): any {
      return {
        headers: new HttpHeaders({
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8;application/json',
          'Content-Type': 'application/json'
        }),
        responseType: 'text'
      }
    }
}
