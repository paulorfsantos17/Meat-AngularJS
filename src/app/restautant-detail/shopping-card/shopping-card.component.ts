import { Component, OnInit } from '@angular/core';
import{ShoppingCardService} from './shopping-card.service'
import {trigger,state, style, transition, animate, keyframes} from "@angular/animations"

@Component({
  selector: 'mt-shopping-card',
  templateUrl: './shopping-card.component.html',
  animations: [
    trigger('row',[
      state('ready',style({opacity:1})),
      transition("void => ready", animate ('300ms 0ms ease-in', keyframes([
        style({opacity:0 , transform:"translateX(-50px)", offset:0}),
        style({opacity:0.8 , transform:"translateX(10px)", offset:0.8}),
        style({opacity:1 , transform:"translateX(0px)", offset:1})
        ]))),
       transition("ready => void", animate ('300ms 0ms ease-out', keyframes([
        style({opacity:1 , transform:"translateX( 0px)", offset:0}),
        style({opacity:0.8 , transform:"translateX(10px)", offset:0.2}),
        style({opacity:0 , transform:"translateX(-30px)", offset:1})
        ])))
      ])
  ]
})
  
export class ShoppingCardComponent implements OnInit {

  rowState="ready"

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

