import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { UserAccount } from 'src/app/models/UserAccount';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { concatMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedin: boolean = false;
  url:string = "http://localhost:8081";

  constructor(private http:HttpClient) { }

  saveUser(user:UserAccount):Observable<String>{
    return this.http.post<String>(this.url + "/createUser", user, {headers : new HttpHeaders({'Content-type' : 'application/x-www-form-urlencoded'})});
  }

  login(email:String, password:String):Observable<string> {
    let body = `email=${email}&password=${password}`;
    return this.http.post<string>(this.url + "/userlogin", body);
  }

  getUser(email:String):Observable<UserAccount>{
    return this.http.get<UserAccount>(this.url + "/users/" + email);
  }

}
