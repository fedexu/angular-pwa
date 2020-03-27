import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private readonly dbEntity = 'jwt_authentication';

    constructor(
        private readonly http: HttpClient,
        private readonly localStorage: LocalStorage
    ) { }

    login(username: string, password: string): ReplaySubject<User> {
        const response = new ReplaySubject<User>();
        this.http.post<any>(`${environment.baseUrl}/auth/login`, { username, password })
            .subscribe(user => {
                let currentUser = { ...user };
                this.localStorage.setItem(this.dbEntity, currentUser).subscribe(() => {
                });
                response.next(user);
            });
        return response;
    }

    logout() {
        // remove user from local storage to log user out
        this.localStorage.removeItem(this.dbEntity);
    }
}