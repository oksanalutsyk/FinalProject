import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductDetailsService } from 'src/app/shared/services/product-details.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],

})
export class BasketComponent implements OnInit {
  defaultQuantity: number = 1;
  productAddToCart: any;
  allTotal: number

  product: Array<IProduct> = []
  view: IProduct;
  constructor(private productDetailsService: ProductDetailsService) {

  }

  ngOnInit() {

    this.productAddToCart = this.productDetailsService.getProductFromCart();
    for (let i in this.productAddToCart) {
      this.productAddToCart[i].quantity = 1

    }
    this.productDetailsService.removeAllProductFromCart();
    this.productDetailsService.addProductToCart(this.productAddToCart);
    this.calculateAllTotal(this.productAddToCart)

  }

  // Збільшення кількості продуктів
  public onAddQuantity(view: IProduct) {
    this.productAddToCart.find(p => p.id == view.id).quantity = view.quantity + 1;
    this.calculateAllTotal(this.productAddToCart)
    localStorage.setItem('product', JSON.stringify(this.productAddToCart))

  }
  // Зменшення кількості продуктів
  public onRemoveQuantity(view: IProduct) {
    if (view.quantity > 0) {
      this.productAddToCart.find(p => p.id == view.id).quantity = view.quantity - 1;
      this.calculateAllTotal(this.productAddToCart)
    }
  }
  // Підрахунок суми
  public calculateAllTotal(allItems: IProduct[]) {
    let total = 0;
    for (let i in allItems) {
      total = total + (allItems[i].quantity * allItems[i].price);
    }
    this.allTotal = total
  }
  // Перезавантаження сторінки
  public refresh(): void {
    window.location.reload();
  }
  // Видалення продукту з корзини
  public deleteProduct(i, view): void {
    this.productAddToCart.splice(i, 1);
    localStorage.setItem('product', JSON.stringify(this.productAddToCart));
  }
  // Очищення корзини
  public deleteCart(): void {
    localStorage.removeItem('product');
    getClass('.block1').style.display = 'none'
    getClass('.secondTable').style.display = 'none'
    getClass('.block2').style.display = 'block'

  }

}
let getClass = x => document.querySelector(x)
