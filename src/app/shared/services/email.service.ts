import { Injectable } from '@angular/core';
import { IEmail } from '../interfaces/email.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url: string;
  
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/email'
  }

  public getEmail(): Observable<Array<IEmail>> {
    return this.http.get<Array<IEmail>>(this.url); //запит для прийому даних з сервера
  }
  public addEmail(email: IEmail): Observable<Array<IEmail>> {
    return this.http.post<Array<IEmail>>(this.url, email); 
  }
  public delEmail(id: number): Observable<Array<IEmail>> {
    return this.http.delete<Array<IEmail>>(`${this.url}/${id}`);

  }
}
