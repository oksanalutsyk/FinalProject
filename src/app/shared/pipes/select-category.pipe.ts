import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Pipe({
  name: 'selectCategory'
})
export class SelectCategoryPipe implements PipeTransform {

  transform(value: Array<IProduct>, str:string[]): any {

    if (!str) return value
    if (!value) return [];
    if(str.length==0){
      return value
    }
      // let sorted = value.filter(function(product, productIndex, productArray){
      //   let hasCategory = str.find(function(category, categoryIndex, categoryArray){
      //     let match = product.category.name == category;
      //     return match;
      //   })
        
      //   return hasCategory;
      // });

      return value.filter(value => str.find(category=>value.category.name==category))

    
  }


}
