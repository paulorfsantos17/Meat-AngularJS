import {Routes} from '@angular/router'
import  {HomeComponent} from './home/home.component'
import  {AboutComponent} from './about/about.component'
import  {RestaurantsComponent} from './restaurants/restaurants.component'
import {RestaurantDetailComponent} from './restautant-detail/restautant-detail.component'
import {MenuComponent} from './restautant-detail/menu/menu.component'
import {ReviewsComponent} from './restautant-detail/reviews/reviews.component'
import{OrderComponent} from'./order/order.component'

export const ROUTES: Routes = [
{path:'', component :HomeComponent},
{path:'about', component : AboutComponent},
{path:'restaurants', component: RestaurantsComponent},
{path:'order', component: OrderComponent},
{path:'restaurant/:id', component: RestaurantDetailComponent,
	children: [
	{path: '' , redirectTo: 'menu', pathMatch:'full'},
	{path: 'menu', component: MenuComponent},
	{path: 'reviews' , component: ReviewsComponent}
	]
}


]