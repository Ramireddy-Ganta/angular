import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AccountGuard implements CanActivate {
    constructor(
        private readonly router: Router) {

    }
    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        debugger;
        var cookie = document.cookie;
        if (cookie) {
            this.router.navigate(['projects']);
            return false;
        } else {
            return true;
        }
    }
}