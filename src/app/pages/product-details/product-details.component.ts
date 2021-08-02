import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductDetailsService } from 'src/app/shared/services/product-details.service';
import { ActivatedRoute } from '@angular/router';
import { IColor } from 'src/app/shared/interfaces/color.interface';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],

})
export class ProductDetailsComponent implements OnInit {
  view: IProduct;
  productId: number;

  currentNumber: number = 0;
  colorId: number;

  // Basket
  productName: string;
  productPrice: number;
  editStatus: boolean = false;
  productCount: number;

  editId: number;
  image: string;


  // Cart
  productAddToCart: any
  cartItemCount: number


  constructor(private productDetailsService: ProductDetailsService, private route: ActivatedRoute) {
    this.getProduct()
  }

  ngOnInit() {
  }
// Перезавантаження сторінки
  public refresh(): void {
    window.location.reload();
  }

  public getProduct(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productDetailsService.getProductDetails(this.productId).subscribe(
      data => {
        this.view = data;
      }
    )
  }
// Додавання продукту в корзину
  public onAddCart(view: IProduct): void {
    console.log(view)
    this.productAddToCart = this.productDetailsService.getProductFromCart();
    if (this.productAddToCart == null) {
      this.productAddToCart = [];
      this.productAddToCart.push(view);
      this.productDetailsService.addProductToCart(this.productAddToCart);
    }
    else {
      let temptProduct = this.productAddToCart.find(p => p.id == view.id);
      if (temptProduct == null) {
        this.productAddToCart.push(view);
        this.productDetailsService.addProductToCart(this.productAddToCart);
      }
    }
  }
}
