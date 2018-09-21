import {Injectable} from'@angular/core'
import { ShoppingCardService} from '../restautant-detail/shopping-card/shopping-card.service'
import {CardItem} from '../restautant-detail/shopping-card/cardItem.model'
import {Observable}  from 'rxjs/Observable'
import {HttpClient, HttpHeaders } from '@angular/common/http'
import {Order} from './order.model'
import 'rxjs/add/operator/map'
import {MEAT_API} from '../app.api'
import {LoginService} from '../security/login/login.service'




@Injectable()
export class OrderService {


	constructor(private cardService: ShoppingCardService,
				private http:HttpClient,
				private loginService : LoginService){

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
		let hearders = new HttpHeaders()
		if(this.loginService.isLoggedIn()){

			hearders = hearders.set('Authorization', `Bearer ${this.loginService.user.acessToken}`)

		}
		return this.http.post<Order>(`${MEAT_API}/orders`, order, {headers : hearders})
							.map( order => order.id)

	}

	clear (){
		this.cardService.clear()
	}

}