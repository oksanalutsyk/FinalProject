import { Component, OnInit } from '@angular/core';
import { IBrend } from 'src/app/shared/interfaces/brends.interface';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductServices } from 'src/app/shared/services/product-services';
import { BrendsService } from 'src/app/shared/services/brends.service';
import { NewBrend } from 'src/app/shared/classes/new-brend.class';


@Component({
  selector: 'app-admin-brends',
  templateUrl: './admin-brends.component.html',
  styleUrls: ['./admin-brends.component.scss']
})
export class AdminBrendsComponent implements OnInit {
  adminBrend: Array<IBrend> = []
  adminProducts: Array<IProduct> = []

  brendName: string;
  editStatus: boolean = false;
  brendId: number;

  newBrend:IBrend
  constructor(private brendService: BrendsService, private productService: ProductServices) { }

  ngOnInit() {
    this.getBrend()
    this.getProducts()
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

  public isAddBrend(): void {
    const newBrend: IBrend = new NewBrend(
      0,
      this.brendName,
      // false
    );
    if (this.adminBrend.length >= 1){
      newBrend.id = this.adminBrend.slice(-1)[0].id + 1;
      this.brendName = '';
      this.brendService.addBrend(newBrend).subscribe(
        () => {
          this.getBrend();
        })
    }
    else {
      this.newBrend= {
        id: 0,
        name: this.brendName,
      },
      this.adminBrend.push(newBrend)
      this.brendService.addBrend(newBrend).subscribe(
        () => {
          this.getBrend();
        })
      this.brendName = '';

    }
    

  }
  public isDeleteBrend(brend: IBrend): void {
    const id = brend.id
    this.brendService.delBrend(id).subscribe(
      () => {
        this.getBrend();
      }
    )
  }
  public isEditBrend(brend: IBrend): void {
    this.editStatus = true;
    this.brendName = brend.name;
    this.brendId = brend.id
  }

  public isSaveEditBrend(): void {
    const newBrend: IBrend= new NewBrend(
      this.brendId,
      this.brendName,
    );
    this.brendName = '';
    this.brendService.editBrend(newBrend).subscribe(() => {
      this.getBrend();;
    })
    this.editStatus = false;
  }
}
