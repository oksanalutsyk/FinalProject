import { IFirstHomeSlider } from '../interfaces/firstHomeSlider.interface';

export class NewFirstHomeSlider implements IFirstHomeSlider{
    constructor(
        public id: number,
        public name:string,
        public image:string
       
    ){}
}