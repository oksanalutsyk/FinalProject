import { ISize } from '../interfaces/size.interface';

export class NewSize implements ISize{
    constructor(
        public id: number,
        public name: string,
        public status: boolean

    ){}
}