import { IEmail } from '../interfaces/email.interface';

export class NewEmail implements IEmail{
    constructor(
        public id:number,
        public email:string      
    ){}
}