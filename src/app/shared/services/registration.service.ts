import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegistration } from '../interfaces/registration.interface';
import { ILogin } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  private url: string;
  private url2: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/registration'
    this.url2 = 'http://localhost:3000/login'
  }

  // Registration
  public getRegistration(): Observable<Array<IRegistration>> {
    return this.http.get<Array<IRegistration>>(this.url);
  }

  public addRegistration(registration: IRegistration): Observable<Array<IRegistration>> {
    return this.http.post<Array<IRegistration>>(this.url, registration);
  }


  // Login
  public getLogin(): Observable<Array<ILogin>> {
    return this.http.get<Array<ILogin>>(this.url2);
  }

  public addLogin(login: ILogin): Observable<Array<ILogin>> {
    return this.http.post<Array<ILogin>>(this.url2, login);
  }

}
