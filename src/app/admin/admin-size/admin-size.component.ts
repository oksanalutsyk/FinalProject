import { Component, OnInit } from '@angular/core';
import { ISize } from 'src/app/shared/interfaces/size.interface';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { SizeServices } from 'src/app/shared/services/size-services';
import { ProductServices } from 'src/app/shared/services/product-services';
import { NewSize } from 'src/app/shared/classes/new-size.class';

@Component({
  selector: 'app-admin-size',
  templateUrl: './admin-size.component.html',
  styleUrls: ['./admin-size.component.css']
})
export class AdminSizeComponent implements OnInit {
  adminSize: Array<ISize> = []
  adminProducts: Array<IProduct> = []

  sizeName: string;
  editStatus: boolean = false;
  sizeId: number;

  newSize: ISize


  constructor(private sizeService: SizeServices, private productService: ProductServices) { }

  ngOnInit() {
    this.getSize()
    this.getProducts()
  }



  private getSize(): void {
    this.sizeService.getSize().subscribe(
      data => {
        this.adminSize = data;
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
  public isAddSize(): void {
    const newSize: ISize = new NewSize(
      0,
      this.sizeName,
      false
    );
    if (this.adminSize.length >= 1) {
      newSize.id = this.adminSize.slice(-1)[0].id + 1;
      this.sizeName = '';
      this.sizeService.addSize(newSize).subscribe(
        () => {
          this.getSize();
        })
    }
    else {
      this.newSize = {
        id: 0,
        name: this.sizeName,
        status: false
      }
      this.adminSize.push(newSize)
      this.sizeService.addSize(newSize).subscribe(
        () => {
          this.getSize();
        })
      this.sizeName = '';

    }

  }
  public isDeleteSize(size: ISize): void {
    const id = size.id
    this.sizeService.delSize(id).subscribe(
      () => {
        this.getSize();
      }
    )
  }
  public isEditSize(size: ISize): void {
    this.editStatus = true;
    this.sizeName = size.name;
    this.sizeId = size.id
  }
  public isSaveEditSize(): void {
    const newSize: ISize = new NewSize(
      this.sizeId,
      this.sizeName,
      false

    );
    this.sizeName = '';
    this.sizeService.editSize(newSize).subscribe(() => {
      this.getSize();;
    })
    this.editStatus = false;
  }
}
