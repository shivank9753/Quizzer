import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private login:LoginService,private router:Router,private snack:MatSnackBar){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.login.IsLoggedIn() && this.login.getRole()=='ADMIN'){
        return true;
      }
      console.log('is logged in called and returning false')
      this.snack.open("Please Login via Valid Admin credentials!!","",{
        duration:3000
      })
       this.router.navigate(['login'])
    return false;
  }
  
}
