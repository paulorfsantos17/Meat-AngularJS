import {Injectable} from'@angular/core'
import { ShoppingCardService} from '../restautant-detail/shopping-card/shopping-card.service'
import {CardItem} from '../restautant-detail/shopping-card/cardItem.model'
import {Observable}  from 'rxjs/Observable'
import {Http ,Headers , RequestOptions} from '@angular/http'
import {Order} from './order.model'
import 'rxjs/add/operator/map'
import {MEAT_API} from '../app.api'



@Injectable()
export class OrderService {


	constructor(private cardService: ShoppingCardService, private http:Http){

	}

	itemsValue():number{
		return this.cardService.total()
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
	
	checkOrder (order:Order):Observable <string>{
		const headers = new Headers ()
		headers.append('Content-type' , 'aplication/json')

		return this.http.post(`${MEAT_API}/orders`, 
			JSON.stringify(order), new RequestOptions({headers:headers}))
		.map(respose => respose.json())
		.map(order =>order.id)

	}

	clear (){
		this.cardService.clear()
	}

}