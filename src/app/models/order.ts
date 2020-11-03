export class Order {    
    public order_id: number;
    public user_id: number;
    public address_id: number;
    public dateOrder?: Date;
    public dateDelibery?: Date;
    public situation?: string;
    public discount: number;
    public shippingPrice: number;
    public totalPrice: number;
    
    constructor (order_id: number, user_id: number, address_id: number, dateOrder:Date, dateDelibery: Date, situation: string, discount: number, shippingPrice: number, totalPrice: number){
        this.order_id = order_id;
        this.user_id = this.user_id;
        this.address_id = address_id;
        this.dateOrder = dateOrder; 
        this.dateDelibery = dateDelibery; 
        this.situation = situation;
        this.discount = discount;
        this.shippingPrice = shippingPrice; 
        this.totalPrice = totalPrice;
    }
}