import {CardItem} from './cardItem.model'
import {MenuItem} from '../menu-item/menu-item.model'
import {NotificationService} from  '../../shared/message/notification.service'
import {Injectable} from '@angular/core'

@Injectable()
export class ShoppingCardService {
	items: CardItem[] = []

	constructor( private notificationService: NotificationService){

	}

	clear(){
		this.items = [] 
	}
	total ():number{
		return this.items
		.map(item =>item.value())
		.reduce((prev, value) => prev + value, 0)
	}

	addItem(item: MenuItem){
		let foundItem = this.items.find((mItem) =>mItem.menuItem.id === item.id)
		if(foundItem){
			this.increaseQty(foundItem)

		}else{
			this.items.push(new CardItem(item))
		}
		this.notificationService.notify(`Você adicionou o Item: ${item.name}`)

	}

		removeItem(item:CardItem){	
		this.items.splice(this.items.indexOf(item), 1);
		this.notificationService.notify(`Você Removeu o Item: ${item.menuItem.name}`)

	}


 increaseQty(item:CardItem){
	item.quantity = item.quantity + 1
}

 decreaseQty(item:CardItem){
	item.quantity = item.quantity - 1
	if(item.quantity === 0 ){
		this.removeItem(item)
	}
}

}