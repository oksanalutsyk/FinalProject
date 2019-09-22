import { Injectable } from '@angular/core';
import { ISize } from '../interfaces/size.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SizeServices {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/size'
  }


  public getSize(): Observable<Array<ISize>> {
    return this.http.get<Array<ISize>>(this.url); //запит для прийому даних з сервера
  }
  public addSize(size: ISize): Observable<Array<ISize>> {
    return this.http.post<Array<ISize>>(this.url, size);
  }
  public delSize(id: number): Observable<Array<ISize>> {
    return this.http.delete<Array<ISize>>(`${this.url}/${id}`);

  }
  public editSize(size:ISize):Observable<Array<ISize>>{
    return this.http.put<Array<ISize>>(`${this.url}/${size.id}`, size);

  }
}
