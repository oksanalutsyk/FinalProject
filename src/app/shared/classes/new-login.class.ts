import { ILogin } from '../interfaces/login.interface';

export class NewLogin implements ILogin{
    constructor(
        public id: number,
        public login: string,
        public pass: string
    ){}
}