import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any

  constructor(private login:LoginService,private router:Router) { }

  ngOnInit(): void {
  
    if(this.login.getRole()=='ADMIN'){
      // window.location.href='/admin';
      this.router.navigate(['admin'])
      this.login.loginStatusSubject.next(true);
      }
      else if(this.login.getRole()=='NORMAL'){
       this.router.navigate(['user'])
       this.login.loginStatusSubject.next(true);
        // window.location.href='/user';
      }
      else{
        this.login.logOut();
      }

  }
}
