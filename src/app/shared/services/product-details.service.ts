import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';
import { IColor } from '../interfaces/color.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  private url: string;

  private _products:IProduct[]
  public  get products(){
    return this._products || []
  }

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/products';
  }

  public getProductDetails(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/${id}`);
  }


  public getColorDetails(id: number): Observable<IColor> {
    return this.http.get<IColor>(`${this.url}/${id}`);
  }

  // Cart
  public addProductToCart(view: IProduct[]) {
    localStorage.setItem('product', JSON.stringify(view))
    this._products = view
 
  }
  public getProductFromCart() {
    let result = []
    let json = localStorage.getItem('product')
    if (json){
      result = JSON.parse(json)
    }
    
    this._products=result
    return result;
  }
  public removeAllProductFromCart() {
    this._products = []
    return localStorage.removeItem('product')

  }

}
