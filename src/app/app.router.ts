import {Routes} from '@angular/router'
import  {HomeComponent} from './home/home.component'
import  {AboutComponent} from './about/about.component'
import  {RestaurantsComponent} from './restaurants/restaurants.component'
import {RestaurantDetailComponent} from './restautant-detail/restautant-detail.component'
import {MenuComponent} from './restautant-detail/menu/menu.component'
import {ReviewsComponent} from './restautant-detail/reviews/reviews.component'
import{OrderComponent} from'./order/order.component'
import {OrderSummaryComponent} from './order-summary/order-summary.component'
import {NotFoundComponent} from './not-found/not-found.component'
import{LoginComponent} from './security/login/login.component'



export const ROUTES: Routes = [
{path:'', component :HomeComponent},
{path:'login', component :LoginComponent},
{path:'about', loadChildren:'./about/about.module#AboutModule'},
{path:'restaurants', component: RestaurantsComponent},
{path:'order', loadChildren: './order/order.module#OrderModule'},
{path:'order', loadChildren: './order/order.module#OrderModule'},
{path:'restaurant/:id', component: RestaurantDetailComponent,
	children: [
	{path: '' , redirectTo: 'menu', pathMatch:'full'},
	{path: 'menu', component: MenuComponent},
	{path: 'reviews' , component: ReviewsComponent}
	]
},	{path:'order-summary', component: OrderSummaryComponent},
	{path:'**', component: NotFoundComponent},

]
