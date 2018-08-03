import { Component, OnInit } from '@angular/core';
import{ RadioOption} from '../shared/radio/radio-options.model'
import {OrderService} from './order.service'
import {CardItem} from '../restautant-detail/shopping-card/cardItem.model'
import {Order , OrderItem} from './order.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery :number = 8
	paymentOptions: RadioOption[]=[
	{label:'Dinheiro' , value:'MON'},
	{label:'Cartão de Debito' , value:'DEB'},
	{label:'Cartão de Refeição' , value:'REF'}
	]
		
    itemsValue():number{
      return this.orderService.itemsValue()

    }
	

  constructor( private orderService :OrderService ){
   }

  ngOnInit() {
  }

  cardItem():CardItem[]{

  	return this.orderService.cardItems()

  }


  increaseQty(item:CardItem){

  	this.orderService.increaseQty(item)


  }
  	decreaseQty(item:CardItem){

  	this.orderService.decreaseQty(item)
	}
  remove (item:CardItem){
  	this.orderService.remove(item)
  }

  checkOrder(order:Order ){
    order.orderItems = this.cardItem()
    .map((item:CardItem) => new OrderItem(item.quantity , item.menuItem.id))
    this.orderService.checkOrder(order)
    .subscribe((orderId:string) =>{
      console.log(`compra concluida: ${orderId}`)
      this.orderService.clear()
 })
    console.log(order)
  }
}
