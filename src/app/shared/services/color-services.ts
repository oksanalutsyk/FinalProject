import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IColor } from '../interfaces/color.interface';
@Injectable({
  providedIn: 'root'
})
export class ColorServices {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/color'
  }

  public getColor(): Observable<Array<IColor>> {
    return this.http.get<Array<IColor>>(this.url); //запит для прийому даних з сервера
  }
  public addColor(color: IColor): Observable<Array<IColor>> {
    return this.http.post<Array<IColor>>(this.url, color);

  }
  public delColor(id: number): Observable<Array<IColor>> {
    return this.http.delete<Array<IColor>>(`${this.url}/${id}`);

  }
  public editColor(color: IColor): Observable<Array<IColor>> {
    return this.http.put<Array<IColor>>(`${this.url}/${color.id}`, color);

  }



}
