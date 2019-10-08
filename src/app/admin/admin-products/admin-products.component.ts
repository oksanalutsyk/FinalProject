import { Component, OnInit } from '@angular/core';
import { ProductServices } from 'src/app/shared/services/product-services';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { NewProduct } from 'src/app/shared/classes/new-product.class';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { CategoryService } from 'src/app/shared/services/category-services';
import { ColorServices } from 'src/app/shared/services/color-services';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { IColor } from 'src/app/shared/interfaces/color.interface';
import { ISize } from 'src/app/shared/interfaces/size.interface';
import { SizeServices } from 'src/app/shared/services/size-services';
import { BrendsService } from 'src/app/shared/services/brends.service';
import { IBrend } from 'src/app/shared/interfaces/brends.interface';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  providers: [ProductServices, CategoryService, ColorServices, SizeServices, BrendsService]

})
export class AdminProductsComponent implements OnInit {

  adminProducts: Array<IProduct> = []
  adminCategory: Array<ICategory> = []
  adminColor: Array<IColor> = []
  adminSize: Array<ISize> = []
  adminBrend: Array<IBrend> = []

  productCategory: ICategory;
  productName: string;
  productDescription: string;
  productPrice: number;
  productId: number;
  productColor: Array<IColor> = [];
  productSize: Array<ISize> = [];
  productBrend: IBrend;
  editStatus: boolean = false;
  editId: number;
  //fireStorage
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadUrl: Observable<string>;
  image: string = null;

  someColor: Array<any> = []
  colorString: any

  newProduct: IProduct



  constructor(private productService: ProductServices, private afStorage: AngularFireStorage, private categoryService: CategoryService, private colorService: ColorServices, private sizeService: SizeServices, private brendService: BrendsService) { }

  ngOnInit() {
    this.getProducts()
    this.getCategory()
    this.getColor()
    this.getSize()
    this.getBrend()
  }

  // GET
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




  public isAddProduct(): void {
    const newProduct: IProduct = new NewProduct(
      0,
      this.productCategory,
      this.productBrend,
      this.productName,
      this.productDescription,
      this.productPrice,
      this.adminColor.filter(color => color.status),
      this.adminSize.filter(size => size.status),
      this.image,
    );
    if (this.adminProducts.length >= 1) {
      newProduct.id = this.adminProducts.slice(-1)[0].id + 1;
      this.productCategory = null,
        this.productBrend = null;
      this.productName = '';
      this.productDescription = '';
      this.productPrice = null;
      this.adminColor.forEach(function (color) {
        color.status = false;
      });
      this.adminSize.forEach(function (size) {
        size.status = false;
      });
      this.image = '';


      this.productService.addProducts(newProduct).subscribe(
        () => {
          this.getProducts();
        })
    }
    else {
      this.newProduct = {
        id: 0,
        category: this.productCategory,
        brend: this.productBrend,
        name: this.productName,
        description: this.productDescription,
        price: this.productPrice,
        color: this.productColor,
        size: this.productSize,
        image: this.image,
      }
      this.adminProducts.push(newProduct)
      this.productService.addProducts(newProduct).subscribe(
        () => {
          this.getProducts();
        })
      this.productCategory = null,
      this.productBrend = null
        this.productName = '';
      this.productDescription = '';
      this.productPrice = null;
      this.adminColor.forEach(function (color) {
        color.status = false;
      });
      this.adminSize.forEach(function (size) {
        size.status = false;
      });
      this.image = '';

    }

  }

  public isDeleteProduct(item: IProduct): void {
    const id = item.id
    this.productService.delProducts(id).subscribe(
      () => {
        this.getProducts()
      }
    )
  }
  public isEditProduct(product: IProduct): void {
    console.log(product)
    this.editStatus = true;
    this.productCategory = product.category;
    this.productBrend = product.brend;
    this.productName = product.name;
    this.productDescription = product.description;
    this.productPrice = product.price;
    this.adminColor
      .filter(color => product.color
        .find(productColor => productColor.id == color.id))
      .forEach(function (color) { color.status = true });
    this.adminSize
      .filter(size => product.size
        .find(productSize => productSize.id == size.id))
      .forEach(function (size) { size.status = true });
    this.image = product.image;
    this.editId = product.id
  }


  public isSaveEditProduct(): void {
    const newProduct: IProduct = new NewProduct(
      this.editId,
      this.productCategory,
      this.productBrend,
      this.productName,
      this.productDescription,
      this.productPrice,
      this.adminColor.filter(color => color.status),
      this.adminSize.filter(size => size.status),
      this.image
    );
    this.productCategory = null;
    this.productBrend = null;
    this.productName = '';
    this.productDescription = '';
    this.productPrice = null;
    this.adminColor.forEach(function (color) {
      color.status = false;
    });
    this.adminSize.forEach(function (size) {
      size.status = false;
    });
    this.image = '';
    this.productService.editProducts(newProduct).subscribe(() => {
      this.getProducts();
    })
    this.editStatus = false;

  }

// Завантаження картинки
  public upload(event): void {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(`images/${id}`);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadUrl = this.ref.getDownloadURL();
        this.downloadUrl.subscribe(url => this.image = url)
      })
    ).subscribe()

  }


  // Додавання checkbox-ів
  public addColor(color) {
    color.status = !color.status
    if (color.status) this.productColor.push(color)
    else {
      let index = this.productColor.findIndex(elem => elem.id === color.id)
      this.productColor.splice(index, 1)
    }
    console.log(this.productColor);
  }

  public addSize(size) {
    size.status = !size.status
    if (size.status) this.productSize.push(size)
    else {
      let index = this.productSize.findIndex(elem => elem.id === size.id)
      this.productSize.splice(index, 1)
    }
    console.log(this.productSize);
  }
}



