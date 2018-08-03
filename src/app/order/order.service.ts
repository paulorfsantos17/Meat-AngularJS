import {Injectable} from'@angular/core'
import { ShoppingCardService} from '../restautant-detail/shopping-card/shopping-card.service'
import {CardItem} from '../restautant-detail/shopping-card/cardItem.model'

@Injectable()
export class OrderService {


	constructor(private cardService: ShoppingCardService){

	}

	cardItems():CardItem[]{
		

		return this.cardService.items

	}

	increaseQty(item:CardItem){
		
		this.cardService.increaseQty(item)
	}
	decreaseQty(item:CardItem){
		this.cardService.decreaseQty(item)
	}

	remove(item:CardItem){
		this.cardService.removeItem(item)
	}



}