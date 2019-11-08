import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared';


@Injectable({
    providedIn: "root"
})
export class AuthorizeGuard implements CanActivate {
    isAuth: boolean = false;

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        
        if(localStorage.getItem(environment.userInfo)){
            let userInfo: IUser = <IUser>JSON.parse(localStorage.getItem(environment.userInfo));
            if(userInfo.role == environment.admin){
                this.isAuth = true;
            }
            else{
                this.isAuth = false;                
            }
        }

        return this.isAuth;
    }
}
