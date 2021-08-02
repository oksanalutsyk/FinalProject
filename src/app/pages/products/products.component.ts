import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { ProductServices } from 'src/app/shared/services/product-services';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';

import { IColor } from 'src/app/shared/interfaces/color.interface';
import { SizeServices } from 'src/app/shared/services/size-services';
import { ISize } from 'src/app/shared/interfaces/size.interface';
import { BrendsService } from 'src/app/shared/services/brends.service';
import { CategoryService } from 'src/app/shared/services/category-services';
import { IBrend } from 'src/app/shared/interfaces/brends.interface';
import { ICategory } from 'src/app/shared/interfaces/category.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductServices, SizeServices]

})
export class ProductsComponent implements OnInit {
  products: Array<IProduct> = [];

  productColor: Array<IColor> = [];
  adminSize: Array<ISize> = [];
  adminBrend: Array<IBrend> = [];
  adminCategory: Array<ICategory> = [];

  // функції для фільтрів продуктів
  get selectedCategories():string[]{
    return this.adminCategory.filter(category=>category.selected).map(category=>category.name)
  };
  get selectedBrendes():string[]{
    return this.adminBrend.filter(brend=>brend.selected).map(brend=>brend.name)
  };
  get selectedSizes():string[]{
    return this.adminSize.filter(size=>size.selected).map(size=>size.name)
  };


  changeText: boolean;
  view: IProduct;
  productId: number;

  

  constructor(private productService: ProductServices, private route: ActivatedRoute, private sizeService: SizeServices,private brendService: BrendsService, private categoryService: CategoryService,) {
    this.getProducts();
    this.getColors();
  }

  // Фільтр по ціні
  minValue: number = 0;
  maxValue: number = 250;
  options: Options = {
    floor: 0,
    ceil: 250
  };

  ngOnInit() {
    this.getSize();
    this.getBrend();
    this.getCategory();
  }

// Scroll to top
   public gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe(
      data => {

        this.products = data;
      },
      err => {
        console.log(err)
      }
    )
  }


  public getColors(): void {
    this.productService.getColors().subscribe(
      data => {
        this.productColor = data;
      },
      err => {
        console.log(err)
      }
    )
  }
  public getSize(): void {
    this.sizeService.getSize().subscribe(
      data => {
        this.adminSize = data;
      },
      err => {
        console.log(err)
      }
    )
  }

  private getBrend(): void {
    this.brendService.getBrend().subscribe(
      data => {
        this.adminBrend = data;
      },
      err => {
        console.log(err)
      }
    )
  }
  private getCategory(): void {
    this.categoryService.getCategory().subscribe(
      data => {
        this.adminCategory = data;
      },
      err => {
        console.log(err)
      }
    )
  }
}



