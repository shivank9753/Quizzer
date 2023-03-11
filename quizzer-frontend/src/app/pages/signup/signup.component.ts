import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserServiceService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }
  isAdmin=false
   public user ={
     username : '',
     password :'',
     firstName:'',
     lastName:'',
     emailId:'',
     phone:'',
     userRole:"NORMAL"

   };
  formSubmit(){
     // console.log(this.user)
      if(this.user.username==''|| this.user.username==null){
       // alert('user name cannot be empty')
       this.snack.open('Username is required!!!!','',{
        duration:3000,
       });
        return;
      }
      if(this.isAdmin){
        this.user.userRole="ADMIN"
      }
      // calling add user api function 

       this.userService.addUser(this.user).subscribe(
        (data:any)=>{
         console.log(data);
         Swal.fire('Done !!',`You are registered with ID: ${data.userId}`,'success').then((result)=>{
          if(result.isConfirmed){
         
            this.router.navigate(['/login'])
          }
        })
        },
        (error)=>{
          console.log(error)

          this.snack.open('something went wrong!!!!','',{
            duration:3000,
           });
        }
       )

    }

    reset(){
       this.user ={
        username : '',
        password :'',
        firstName:'',
        lastName:'',
        emailId:'',
        phone:'',
        userRole:''
   
      };
    }
   
}
