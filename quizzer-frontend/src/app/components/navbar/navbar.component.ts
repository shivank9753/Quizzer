import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    isLoggedIn=false;
    user=null;
    isAdmin=false
  constructor(public login:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.login.IsLoggedIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(
      data=>{
        this.isLoggedIn=this.login.IsLoggedIn();
        this.user=this.login.getUser()
        if(this.login.getRole()=='ADMIN'){
          this.isAdmin=true
        }
      }
    )

  }

  public logOut(){
    
    this.login.logOut()
   this.login.loginStatusSubject.next(false)
    // window.location.reload() 
  }

}
