import { IProduct } from "../interfaces/product.interface";
import { ICategory } from '../interfaces/category.interface';
import { IColor } from '../interfaces/color.interface';
import { ISize } from '../interfaces/size.interface';
import { IBrend } from '../interfaces/brends.interface';

export class NewProduct implements IProduct{
    constructor(
        public id: number,
        public category: ICategory,
        public brend:IBrend,
        public name:string,
        public description: string,
        public price:number,
        public color:Array<IColor>,
        public size: Array<ISize>,
        public image?:string,
       
    ){}
}
