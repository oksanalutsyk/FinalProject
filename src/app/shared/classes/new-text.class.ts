import { IText } from '../interfaces/text.interface';

export class NewText implements IText{
    constructor(
        public id: number,
        public newArrivals:string,
        public aboutStoryOne:string,
        public aboutStoryTwo:string,
        public aboutTeam:string,
        public contactTeam:string
    ){}
}
