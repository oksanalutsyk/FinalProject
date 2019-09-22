import { IBrend } from '../interfaces/brends.interface';

export class NewBrend implements IBrend{
    constructor(
        public id: number,
        public name: string
    ){}
}