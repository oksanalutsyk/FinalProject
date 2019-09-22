import { Injectable } from '@angular/core';
import { IMessage } from '../interfaces/message.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServices {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/message'
  }

  public getMessage(): Observable<Array<IMessage>> {
    return this.http.get<Array<IMessage>>(this.url); //запит для прийому даних з сервера
  }
  public addMessage(message: IMessage): Observable<Array<IMessage>> {
    return this.http.post<Array<IMessage>>(this.url, message); 
  }
  public delMessage(id: number): Observable<Array<IMessage>> {
    return this.http.delete<Array<IMessage>>(`${this.url}/${id}`);

  }
}
