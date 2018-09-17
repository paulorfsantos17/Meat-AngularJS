import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handlerError = function (error) {
        var errorMensage;
        if (error instanceof Response) {
            errorMensage = " error " + error.status + " ao acessar a url " + error.url + " - " + error.statusText;
        }
        else {
            errorMensage = error.toString();
        }
        console.log(errorMensage);
        return Observable.throw(errorMensage);
        ;
    };
    return ErrorHandler;
}());
export { ErrorHandler };
//# sourceMappingURL=app.error-handler.js.map