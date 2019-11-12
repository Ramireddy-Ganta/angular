import {Injectable} from '@angular/core';
import {CanActivate,CanActivateChild,CanDeactivate,Router} from '@angular/router';
import {Observable} from 'rxjs';
import { promise } from 'protractor';
Injectable();

export class AdminGuard implements CanActivate{
    
    constructor(private router:Router){

    }
    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        var cookie=document.cookie;
        if(cookie){
            this.router.navigateByUrl('/projetcs');
            return false;
        }else{
            return true;
        }
    }
}