import { Pipe, PipeTransform } from '@angular/core';
// import { ISize } from '../interfaces/size.interface';
import { IProduct } from '../interfaces/product.interface';

@Pipe({
  name: 'selectSize'
})
export class SelectSizePipe implements PipeTransform {

  transform(products: Array<IProduct>, selectSizes: Array<string>) {
    if (!products) {
      return []
    }

    if (!selectSizes || !selectSizes.length) {
      return products
    }

  
    let selectedProducts = products.filter(function (product, productIndex) {
      let hasSize = selectSizes.find(function (size, sizeIndex):any  {
        if (!product.size || !product.size.length){
          return false
        }
        let sizePresent = product.size.find(function(productSize, productSizeIndex){
            return productSize.name==size
        })
        return sizePresent
      })
      return hasSize
    })
    return selectedProducts

  }
  
}

