import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFirstHomeSlider } from '../interfaces/firstHomeSlider.interface';

@Injectable({
  providedIn: 'root'
})
export class FirstHomeSliderService {

  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/firstHomeSlider'
  }


  public getFirstHomeSlider(): Observable<Array<IFirstHomeSlider>> {
    return this.http.get<Array<IFirstHomeSlider>>(this.url); //запит для прийому даних з сервера
  }
  public addFirstHomeSlider(photo: IFirstHomeSlider): Observable<Array<IFirstHomeSlider>> {
    return this.http.post<Array<IFirstHomeSlider>>(this.url, photo);

  }
  public delFirstHomeSlider(id: number): Observable<Array<IFirstHomeSlider>> {
    return this.http.delete<Array<IFirstHomeSlider>>(`${this.url}/${id}`);

  }
  public editFirstHomeSlider(photo:IFirstHomeSlider):Observable<Array<IFirstHomeSlider>>{
    return this.http.put<Array<IFirstHomeSlider>>(`${this.url}/${photo.id}`, photo);

  }
}
