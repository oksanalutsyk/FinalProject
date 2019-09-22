import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IText } from '../interfaces/text.interface';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/text'
  }

  public getText(): Observable<Array<IText>> {
    return this.http.get<Array<IText>>(this.url); //запит для прийому даних з сервера
  }
  public addText(text: IText): Observable<Array<IText>> {
    return this.http.post<Array<IText>>(this.url, text);
  }
  public editText(text: IText): Observable<Array<IText>> {
    return this.http.put<Array<IText>>(`${this.url}/${text.id}`, text);

  }
}
