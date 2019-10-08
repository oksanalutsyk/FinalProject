import { Component, OnInit } from '@angular/core';
import { ProductServices } from 'src/app/shared/services/product-services';
import { FirstHomeSliderService } from 'src/app/shared/services/first-home-slider.service';
import { TextService } from 'src/app/shared/services/text.service';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';

import { IColor } from 'src/app/shared/interfaces/color.interface';
import { IText } from 'src/app/shared/interfaces/text.interface';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IFirstHomeSlider } from 'src/app/shared/interfaces/firstHomeSlider.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductServices]

})
export class HomeComponent implements OnInit {
  products: Array<IProduct> = []
  productColor: Array<IColor> = [];
  firstHomeSlider: Array<IFirstHomeSlider> = [];
  adminText:Array<IText> = [];
  changeText: boolean;
  view: IProduct;
  productId: number;


  photos: Array<IFirstHomeSlider>;

  img: Array<IProduct>;
  img1: IProduct;
  img2: IProduct;
  img3: IProduct;
  img4: IProduct;
  img5: IProduct;

  dataEvent: string;

  public imagesUrl:Array<IProduct>

  constructor(private productService: ProductServices,private firstHomeSliderService: FirstHomeSliderService, private textService: TextService, private route: ActivatedRoute) {
    this.getProducts();
    this.getText();
    this.getFirstSliderFotos();
    this.getFirstHomeSlider()
  }

  ngOnInit() {
    this.imagesUrl = this.products
    console.log(this.imagesUrl)
  }


//Великий слайдер
  public onSlide(event) {
    this.dataEvent = JSON.stringify(event);
    // console.log(event);
    const imageIndex = parseInt(event.current.replace("slideId_", ""), 10);
    // console.log("image index", imageIndex);
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

  private getFirstHomeSlider(): void {
    this.firstHomeSliderService.getFirstHomeSlider().subscribe(
      data => {
        this.firstHomeSlider = data;
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

        this.img = this.products.slice(-5);
  console.log(this.img)

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

  private getFirstSliderFotos(): void {
    this.firstHomeSliderService.getFirstHomeSlider().subscribe(
      data => {
        this.firstHomeSlider = data;

        this.photos = this.firstHomeSlider;
  
      },
      err => {
        console.log(err)
      }
    )
  }
}



