import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { IColor } from '../interfaces/color.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductServices{

  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/products'
  }

  public getProducts(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>(this.url); //запит для прийому даних з сервера
  }
  public addProducts(product: IProduct): Observable<Array<IProduct>> {
    return this.http.post<Array<IProduct>>(this.url, product);

  }
  public delProducts(id: number): Observable<Array<IProduct>> {
    return this.http.delete<Array<IProduct>>(`${this.url}/${id}`);

  }
  public editProducts(product:IProduct):Observable<Array<IProduct>>{
    return this.http.put<Array<IProduct>>(`${this.url}/${product.id}`, product);

  }

  public showProductDetails(id:number):Observable<IProduct>{
    return this.http.get<IProduct>(`${this.url}/${id}`);
  }


//////////////////////GOOD
  public getColors(): Observable<Array<IColor>> {
    return this.http.get<Array<IColor>>(this.url); //запит для прийому даних з сервера
  }

  // public getProductSize(): Observable<Array<IColor>> {
  //   return this.http.get<Array<IColor>>(this.url); //запит для прийому даних з сервера
  // }
}
