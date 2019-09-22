import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBrend } from '../interfaces/brends.interface';

@Injectable({
  providedIn: 'root'
})
export class BrendsService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/brend'
  }

  public getBrend(): Observable<Array<IBrend>> {
    return this.http.get<Array<IBrend>>(this.url); //запит для прийому даних з сервера
  }
  public addBrend(brend: IBrend): Observable<Array<IBrend>> {
    return this.http.post<Array<IBrend>>(this.url, brend);
  }
  public delBrend(id: number): Observable<Array<IBrend>> {
    return this.http.delete<Array<IBrend>>(`${this.url}/${id}`);

  }
  public editBrend(brend: IBrend): Observable<Array<IBrend>> {
    return this.http.put<Array<IBrend>>(`${this.url}/${brend.id}`, brend);

  }
}
