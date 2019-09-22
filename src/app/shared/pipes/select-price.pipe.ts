import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Pipe({
  name: 'selectPrice'
})
export class SelectPricePipe implements PipeTransform {

  transform(products: Array<IProduct>, minPrice: number, maxPrice: number) {
    let selectedProducts = products.filter(function (product, productIndex) {
      return product.price >= minPrice && product.price <= maxPrice
    })
    return selectedProducts
  }

}
