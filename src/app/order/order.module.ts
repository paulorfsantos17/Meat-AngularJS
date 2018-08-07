import {NgModule} from '@angular/core'
import{OrderComponent} from './order.component'
import{OrderItemComponent} from './order-item/order-item.component'
import {DeliveryCostsComponent}from './delivery-costs/delivery-costs.component'
import {RouterModule , Routes} from '@angular/router'

import {SharedModule} from '../shared/shared.module'

const ROUTES : Routes = [
{path:'', component:OrderComponent }
]

@NgModule({
	declarations:[OrderComponent,
	OrderItemComponent,
	DeliveryCostsComponent],

	imports:[ SharedModule,
			  RouterModule.forChild(ROUTES)]

	
})

export class OrderModule {

} 