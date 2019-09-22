import { IColor } from '../interfaces/color.interface';

export class NewColor implements IColor{
    constructor(
        public id: number,
        public name: string,
        public status: boolean
    ){}
}