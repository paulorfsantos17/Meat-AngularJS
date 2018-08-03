import {CardItem} from './cardItem.model'
import {MenuItem} from '../menu-item/menu-item.model'
export class ShoppingCardService {
	items: CardItem[] = []

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

	}

		removeItem(item:CardItem){	
		this.items.splice(this.items.indexOf(item), 1);

	}


		public increaseQty(item:CardItem){
			item.quantity = item.quantity + 1
		}

		public decreaseQty(item:CardItem){
			item.quantity = item.quantity - 1
			if(item.quantity === 0 ){
			this.removeItem(item)
			}
		}

}