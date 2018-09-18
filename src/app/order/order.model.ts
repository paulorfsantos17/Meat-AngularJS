 

 class Order  {
 	constructor (
 		public address: string , 
 		public number :number , 
 		public optional:string ,
 		public paymentOption:string,
 		public id:string,
 		public orderItems: OrderItem [] = []){

 }
 		
 }

 class OrderItem {

 	constructor(public quantity: number , public MenuId :string ){}

 	
 }

 export {Order, OrderItem};