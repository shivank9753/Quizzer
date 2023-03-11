import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class NormalGuard implements CanActivate {

  constructor(private login:LoginService,private router:Router,private snack:MatSnackBar){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

     if(this.login.IsLoggedIn() && this.login.getRole()=='NORMAL'){
        return true;
      }
      this.snack.open("Please Login via Valid User credentials!!","",{
        duration:3000
      })
      // window.location.href='/login'
      this.router.navigate(['login'])
    return false;
  }
  
}
