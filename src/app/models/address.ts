export class Address {
    public user_id: number;
    public name: string;
    public surname: string;
    public address: string;
    public postcode: string;
    public city: string;
    public phone: number;

    constructor (user_id: number, name: string, surname: string, address: string, postcode: string, city: string, phone: number){
        this.user_id = user_id;
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.postcode = postcode;
        this.city = city;
        this.phone = phone;
    }
}

