import { Component, OnInit } from '@angular/core';
import { ProductServices } from 'src/app/shared/services/product-services';
import { TextService } from 'src/app/shared/services/text.service';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';

import { IColor } from 'src/app/shared/interfaces/color.interface';
import { IText } from 'src/app/shared/interfaces/text.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductServices]

})
export class HomeComponent implements OnInit {
  products: Array<IProduct> = []
  productColor: Array<IColor> = [];
  adminText:Array<IText> = [];
  changeText: boolean;
  view: IProduct;
  productId: number;


  img1: IProduct;
  img2: IProduct;
  img3: IProduct;
  img4: IProduct;
  img5: IProduct;


  constructor(private productService: ProductServices, private textService: TextService, private route: ActivatedRoute) {
    this.getProducts();
    this. getText()
  }

  ngOnInit() {
  }

  private getText(): void {
    this.textService.getText().subscribe(
      data => {
        this.adminText = data;
      },
      err => {
        console.log(err)
      }
    )
  }

  // Отримання 5-ти останніх продуктів з масиву
  private getProducts(): void {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;

        this.img1 = this.products.slice(-5)[0];
        this.img2 = this.products.slice(-5)[1];
        this.img3 = this.products.slice(-5)[2];
        this.img4 = this.products.slice(-5)[3];
        this.img5 = this.products.slice(-5)[4];
      },
      err => {
        console.log(err)
      }
    )
  }
}



