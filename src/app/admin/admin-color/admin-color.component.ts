import { Component, OnInit } from '@angular/core';
import { IColor } from 'src/app/shared/interfaces/color.interface';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductServices } from 'src/app/shared/services/product-services';
import { ColorServices } from 'src/app/shared/services/color-services';
import { NewColor } from 'src/app/shared/classes/new-color.class';

@Component({
  selector: 'app-admin-color',
  templateUrl: './admin-color.component.html',
  styleUrls: ['./admin-color.component.scss']
})
export class AdminColorComponent implements OnInit {
  adminColor: Array<IColor> = []
  adminProducts: Array<IProduct> = []

  colorName: string;
  editStatus: boolean = false;
  colorId: number;

  newColor:IColor

  constructor(private colorService: ColorServices, private productService: ProductServices) { }

  ngOnInit() {
    this.getColor()
    this.getProducts()
  }



  private getColor(): void {
    this.colorService.getColor().subscribe(
      data => {
        this.adminColor = data;
      },
      err => {
        console.log(err)
      }
    )
  }
  private getProducts(): void {
    this.productService.getProducts().subscribe(
      data => {
        this.adminProducts = data;
      },
      err => {
        console.log(err)
      }
    )
  }
  public isAddColor(): void {
    const newColor: IColor = new NewColor(
      0,
      this.colorName,
      false
    );
    if (this.adminColor.length >= 1){
      newColor.id = this.adminColor.slice(-1)[0].id + 1;
      this.colorName = '';
      this.colorService.addColor(newColor).subscribe(
        () => {
          this.getColor();
        })
    }
    else {
      this.newColor = {
        id: 0,
        name: this.colorName,
        status:false
      },
      this.adminColor.push(newColor)
      this.colorService.addColor(newColor).subscribe(
        () => {
          this.getColor();
        })
      this.colorName = '';

    }
   
  }
  public isDeleteColor(color: IColor): void {
    const id = color.id
    this.colorService.delColor(id).subscribe(
      () => {
        this.getColor();
      }
    )
  }

  public isEditColor(color: IColor): void {
    this.editStatus = true;
    this.colorName = color.name;
    this.colorId = color.id
  }
  public isSaveEditColor(): void {
    const newColor: IColor= new NewColor(
      this.colorId,
      this.colorName,
      false
    );
    this.colorName = '';
    this.colorService.editColor(newColor).subscribe(() => {
      this.getColor();;
    })
    this.editStatus = false;
  }
}
