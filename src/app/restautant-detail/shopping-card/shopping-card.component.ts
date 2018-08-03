import { Component, OnInit } from '@angular/core';
import{ShoppingCardService} from './shopping-card.service'

@Component({
  selector: 'mt-shopping-card',
  templateUrl: './shopping-card.component.html'
})
  
export class ShoppingCardComponent implements OnInit {

  constructor( private shoppingCardService: ShoppingCardService) { }

  ngOnInit() {
  }
   items(): any []{
   	 return this.shoppingCardService.items;

	}

	total(): number{
	return	this.shoppingCardService.total()
	}
  clear(){
    this.shoppingCardService.clear()
  }

  removeItem(item:any){
    this.shoppingCardService.removeItem(item)
  }
   addItem(item:any){
     this.shoppingCardService.addItem(item)
   }
}

