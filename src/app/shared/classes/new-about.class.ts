import { IAbout } from '../interfaces/about.interface';

export class NewAbout implements IAbout{
    constructor(
        public id: number,
        public oldPersentOne:number,
        public newPersentOne:number,
        public oldPersentTwo:number,
        public newPersentTwo:number
    ){}
}