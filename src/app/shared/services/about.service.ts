import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAbout } from '../interfaces/about.interface';


@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/about'
  }

  public getAbout(): Observable<Array<IAbout>> {
    return this.http.get<Array<IAbout>>(this.url); //запит для прийому даних з сервера
  }
  public addAbout(about: IAbout): Observable<Array<IAbout>> {
    return this.http.post<Array<IAbout>>(this.url, about);
  }
  public editAbout(about: IAbout): Observable<Array<IAbout>> {
    return this.http.put<Array<IAbout>>(`${this.url}/${about.id}`, about);

  }
}
