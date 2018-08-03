 

 class Order  {
 	constructor (
 		public address: string , 
 		public number :number , 
 		public optional:string ,
 		public paymentOptional:string,
 		public orderItems: OrderItem [] = []){

 }
 		
 }

 class OrderItem {

 	constructor(public quantity: number , public MenuId :string ){}

 	
 }

 export {Order, OrderItem};