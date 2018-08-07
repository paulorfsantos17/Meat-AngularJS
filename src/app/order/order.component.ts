import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import{ RadioOption} from '../shared/radio/radio-options.model'
import {OrderService} from './order.service'
import {CardItem} from '../restautant-detail/shopping-card/cardItem.model'
import {Order , OrderItem} from './order.model'
import {FormGroup , FormBuilder , Validators,AbstractControl} from '@angular/forms'



@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  emailPath =/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  numberPath =/^[0-9]*$/

  orderForm : FormGroup 

  delivery :number = 8
	paymentOptions: RadioOption[]=[
	{label:'Dinheiro' , value:'MON'},
	{label:'Cartão de Debito' , value:'DEB'},
	{label:'Cartão de Refeição' , value:'REF'}
	]
		
    itemsValue():number{
      return this.orderService.itemsValue()

    }
	

  constructor( private orderService :OrderService,
               private router:Router, 
               private formBuilder : FormBuilder){
   }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('',[Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('',[Validators.required , Validators.pattern(this.emailPath)]),
      emailConfimation: this.formBuilder.control('',[Validators.required , Validators.pattern(this.emailPath)]),
      address: this.formBuilder.control('',[Validators.required, Validators.minLength(5)]),
       number: this.formBuilder.control('',[Validators.required , Validators.pattern(this.numberPath)]),
       optionalAddress: this.formBuilder.control(''),
       paymentOption:  this.formBuilder.control('',[Validators.required]),
   },{validator:OrderComponent.equalTo})

 }

 static equalTo (group:AbstractControl):{[key:string]:boolean}{
   const email = group.get('email')
   const emailConfirmation = group.get('emailConfimation')

   if (!email || !emailConfirmation){
     return undefined
   }

   if (email.value !== emailConfirmation.value){
     return {emailNotMatch: true}
   }

   return undefined

 }

 

  cardItem():CardItem[]{

  	return this.orderService.cardItems()

  }


  increaseQty(item:CardItem){

  	this.orderService.increaseQty(item)


  }
  	decreaseQty(item:CardItem){

  	this.orderService.decreaseQty(item)
	}
  remove (item:CardItem){
  	this.orderService.remove(item)
  }

  checkOrder(order:Order ){
    order.orderItems= this.cardItem()
    .map((item:CardItem) => new OrderItem (item.quantity, item.menuItem.id))

    this.orderService.checkOrder(order)
    .subscribe((orderId:string) =>{
      this.router.navigate(['/order-summary'])
      this.orderService.clear()
    })
    console.log(order)
  }
}
