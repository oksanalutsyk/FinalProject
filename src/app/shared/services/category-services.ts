import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../interfaces/category.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/category'
  }

  public getCategory(): Observable<Array<ICategory>> {
    return this.http.get<Array<ICategory>>(this.url); //запит для прийому даних з сервера
  }
  public addCategory(category: ICategory): Observable<Array<ICategory>> {
    return this.http.post<Array<ICategory>>(this.url, category);
  }
  public delCategory(id: number): Observable<Array<ICategory>> {
    return this.http.delete<Array<ICategory>>(`${this.url}/${id}`);

  }
  public editCategory(category: ICategory): Observable<Array<ICategory>> {
    return this.http.put<Array<ICategory>>(`${this.url}/${category.id}`, category);

  }
}
