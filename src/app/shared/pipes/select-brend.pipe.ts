import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';


@Pipe({
  name: 'selectBrend'
})
export class SelectBrendPipe implements PipeTransform {

  transform(value: Array<IProduct>, str:string[]): any {
    if (!str) return value
    if (!value) return [];

    if(str.length==0){
      return value
    }
      return value.filter(value => str.find(brend=>value.brend.name==brend))
  }

}
