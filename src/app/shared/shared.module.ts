import {NgModule, ModuleWithProviders} from '@angular/core'
import {FormsModule , ReactiveFormsModule} from '@angular/forms'
import { CommonModule} from '@angular/common'

import { InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import {RatingComponent} from './rating/rating.component'

import {RestaurantsService} from '../restaurants/restaurants.service'
import {ShoppingCardService} from '../restautant-detail/shopping-card/shopping-card.service'
import {OrderService} from '../order/order.service'

@NgModule({

declarations:[
	InputComponent,
	RadioComponent,
	RatingComponent
	], 
	imports:[CommonModule,
			 FormsModule,
			 ReactiveFormsModule
	],
	exports:[
		InputComponent,
		RadioComponent,
		RatingComponent,
		CommonModule,
		FormsModule,
		ReactiveFormsModule
		]
})


export class SharedModule {

	static ForRoot():ModuleWithProviders {
		 return{
		 	ngModule:SharedModule,
		 	providers:[RestaurantsService,
				 ShoppingCardService,
				 OrderService]


		 }

	}

}