export class User {
    public name: string;
    public surname: string;
    public birthDate: Date;
    public email: string;
    public password: string;

    constructor (name: string, surname: string, birthDate: Date, email: string, password: string){
        this.name = name;
        this.surname = surname;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
    }
}
