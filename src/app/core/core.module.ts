import {NgModule} from '@angular/core'

import {RestaurantsService} from '../restaurants/restaurants.service'
import {ShoppingCardService} from '../restautant-detail/shopping-card/shopping-card.service'
import {OrderService} from '../order/order.service'

@NgModule ({
	providers:[RestaurantsService,
				 ShoppingCardService,
				 OrderService
	]
})

export class CoreModule {


}