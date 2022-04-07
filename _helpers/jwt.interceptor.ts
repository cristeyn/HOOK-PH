import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/_services/authentication.service';
import { User } from 'src/_models/user';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
        const currentUser = this.authenticationService.currentUserValue;
        const isLoggedIn = currentUser;
        const isApiUrl = request.url.startsWith(environment.webApiUrl);
         if (isLoggedIn && isApiUrl) {
             if(currentUser){
                 request = request.clone({ 
                    setHeaders: {
                        Authorization: `Bearer admin`
                    }
                });
             }
            
           
        }

        return next.handle(request);
    }
}