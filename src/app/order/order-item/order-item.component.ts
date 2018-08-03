import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {OrderService} from 	'../order.service'
import {CardItem} from '../../restautant-detail/shopping-card/cardItem.model'



@Component({
  selector: 'mt-order-item',
  templateUrl: './order-item.component.html'

})
export class OrderItemComponent implements OnInit {

 @Input() items : CardItem[]
 @Output() increaseQty = new EventEmitter <CardItem> ()
@Output() decreaseQty = new EventEmitter <CardItem> ()
 @Output() remove = new EventEmitter <CardItem>  ()

  constructor(private orderService : OrderService) { }

   ViewOutput (){
     alert("remove item ="  + this.remove)
   }

  ngOnInit() {
    
  }

  emitIncreaseQty (item:CardItem){
  	this.increaseQty.emit(item)
  }

   emitDecreaseQty (item:CardItem){
  	this.decreaseQty.emit(item)
  }
  emitRemove (item:CardItem){
  	this.remove.emit(item)
  }

}
