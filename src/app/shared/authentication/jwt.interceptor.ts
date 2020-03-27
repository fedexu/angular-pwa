import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { AuthenticationService } from '../../guards/authentication.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/guards/user';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private readonly dbEntity = 'jwt_authentication';
    private readonly credential = { "username": "dummy", "password": "dummy" };

    constructor(private localStorage: LocalStorage, 
        private readonly authenticationService: AuthenticationService
        ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        return from(this.localStorage.getItem(this.dbEntity))
            .pipe(
                switchMap((currentUser: User) => {
                    if (currentUser && currentUser.accessToken) {
                        const headers = request.headers
                            .set('Authorization', `${currentUser.accessToken}`)
                        //   .append('Content-Type', 'application/json');
                        const requestClone = request.clone({
                            headers
                        });
                        return next.handle(requestClone);
                    } else {
                        return next.handle(request);
                    }
                })
            );
            
    }

}