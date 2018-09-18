import {HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'

export class ErrorHandler {
	static handlerError(error: HttpErrorResponse | any){
		let errorMensage : string 
		if (error instanceof HttpErrorResponse){
			errorMensage = ` error ${error.status} ao acessar a url ${error.url} - ${error.statusText}`
		}else{
			errorMensage = error.toString()
		}
		console.log(errorMensage)
		return Observable.throw (errorMensage);
		;
		

	}
}