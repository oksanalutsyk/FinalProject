import { IRegistration } from '../interfaces/registration.interface';

export class NewRegistration implements IRegistration{
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public login: string,
        public pass: string
    ){}
}