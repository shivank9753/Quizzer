import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginData ={
    username :'',
    password :''
  };

  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log('login btn clicked')

     if(this.loginData.username.trim()=='' || this.loginData.username==null){
        this.snack.open("Username is required!!","",{
          duration:3000
        });
        return;
    }

    if(this.loginData.password.trim()==''|| this.loginData.password==null){
      this.snack.open("Password is required!!","",{
        duration:3000
      });
      return;
    }
    //login
     this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("successfully authenticated");
        console.log(data)
        this.login.loginUser(data.token)

        this.login.getCurrentUser().subscribe(
          (user:any) =>{
             console.log(user)
             this.login.setUser(user)
             // redirecting on basis of role
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
          })
      },
      (error)=>{
        console.log("Error! User Credentials can't be authenticated");
        this.snack.open("Invalid Details!! Try Again","",{
          duration:3000
        })
      }

     ) 

  }
  reset(){
    this.loginData ={
      username :'',
      password :''
    };
  }

}
