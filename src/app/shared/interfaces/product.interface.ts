import { ICategory } from "./category.interface";
import { IColor } from './color.interface';
import { ISize } from './size.interface';
import { IBrend } from './brends.interface';

export interface IProduct{
    id:number;
    category: ICategory;
    brend: IBrend;
    name: string;
    description: string;
    price:number;
    color?:Array<IColor>;
    size?: Array<ISize>;
    image?:string;
    quantity?:number
}