import { Component, OnInit } from '@angular/core';
import{ RadioOption} from '../shared/radio/radio-options.model'
import {OrderService} from './order.service'
import {CardItem} from '../restautant-detail/shopping-card/cardItem.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
	paymentOptions: RadioOption[]=[
	{label:'Dinheiro' , value:'MON'},
	{label:'Cartão de Debito' , value:'DEB'},
	{label:'Cartão de Refeição' , value:'REF'}
	]
		
	

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
}
