import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { NewCategory } from 'src/app/shared/classes/new-category.class';
import { CategoryService } from 'src/app/shared/services/category-services';
import { ProductServices } from 'src/app/shared/services/product-services';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {

  adminCategory: Array<ICategory> = []
  adminProducts: Array<IProduct> = []

  categoryName: string;
  editStatus: boolean = false;
  categoryId: number;

  newCategory: ICategory
  constructor(private categoryService: CategoryService, private productService: ProductServices) { }

  ngOnInit() {
    this.getCategory()//виклик методу
    this.getProducts()//виклик методу
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


  public isAddCategory(): void {
    const newCategory: ICategory = new NewCategory(
      0,
      this.categoryName
    );
    if (this.adminCategory.length >= 1) {
      newCategory.id = this.adminCategory.slice(-1)[0].id + 1;
      this.categoryName = '';
      this.categoryService.addCategory(newCategory).subscribe(
        () => {
          this.getCategory();
        })
    }
    else {
      this.newCategory = {
        id: 0,
        name: this.categoryName
      }
      this.adminCategory.push(newCategory)
      this.categoryService.addCategory(newCategory).subscribe(
        () => {
          this.getCategory();
        })
      this.categoryName = '';

    }
  }


  public isDeleteCategory(category: ICategory): void {
    const id = category.id
    this.categoryService.delCategory(id).subscribe(
      () => {
        this.getCategory();
      }
    )
  }

  public isEditCategory(category: ICategory): void {
    this.editStatus = true;
    this.categoryName = category.name;
    this.categoryId = category.id
  }

  public isSaveEditCategory(): void {
    const newCategory: ICategory = new NewCategory(
      this.categoryId,
      this.categoryName,

    );
    this.categoryName = '';
    this.categoryService.editCategory(newCategory).subscribe(() => {
      this.getCategory();;
    })
    this.editStatus = false;
  }
}