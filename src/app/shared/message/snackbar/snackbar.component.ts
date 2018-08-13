import { Component, OnInit } from '@angular/core';
import {trigger,state, style, transition, animate} from "@angular/animations"
import{NotificationService} from '../notification.service'
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],

  animations:[

  trigger('snack-visibile',[
  	state('hidden', style({
  		opacity:0,
  		bottom:'0px'

  	})),
  	state('visible', style({
  		opacity:1,
  		bottom:'30px'
  	})),
  	transition('hidden => visible', animate('500ms 0ms ease-in')),
  	
  	 transition('visible => hidden', animate('500ms 0ms ease-out'))

  	])
  ]
})
export class SnackbarComponent implements OnInit {

	message:string =' Helon There'
	snackVisibile :string ="hidden"

  constructor( private notificationService : NotificationService) { }

toggleSnack(){
	this.snackVisibile=  this.snackVisibile === 'hidden' ? 'vivible' :"hidden"
}

  ngOnInit() {
  	this.notificationService.notifier
  	.do(message => {
  		this.message = message
  		this.snackVisibile ='visible'
  		})
  			.switchMap(message => Observable.timer(3000))
  			.subscribe(timer=> this.snackVisibile = "hidden")
  }

}
