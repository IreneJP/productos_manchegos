export class Cheese {
    public product_id: number;
    public product: string;
    public name: string;
    public type: string;
    public origin: string;
    public quantity: string;
    public description: string;
    public milk: string;
    public time: string;
    public n_products: number;
    public price: number;
    public picture: string;

    constructor (product_id: number, product: string, name: string, type:string, origin: string, quantity: string, description: string, milk: string, time: string,  n_products: number, price: number, picture: string){
        this.product_id = product_id;
        this.product = this.product;
        this.name = name;
        this.type = type; 
        this.origin = origin; 
        this.quantity = quantity;
        this.description = description;
        this.milk = milk; 
        this.time = time;
        this.n_products = n_products;
        this.price = price;
        this.picture = picture;
    }
}
