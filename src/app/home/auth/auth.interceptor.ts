import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const json = JSON.parse(localStorage.getItem("token")); 
    
    if (json != null){
        
        req = req.clone({
            setHeaders: {
              'Authorization': `Bearer ${json.access_token}`,
            },
          });
    } else {
        req = req.clone({
            setHeaders: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
          });
    }

    return next.handle(req);
  }
}