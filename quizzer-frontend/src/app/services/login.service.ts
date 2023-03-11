import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>(); 

  constructor(private http:HttpClient) { }

  public getCurrentUser(){
     return this.http.get(`${baseUrl}/authenticate/current`)
  }


  // authenticate user
  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/authenticate/token`,loginData);
  }

  // login user : saves token in local storage
   public loginUser(token:string){
     localStorage.setItem('token',token);
     return true;
   }

   public IsLoggedIn(){
        let tokenStr=localStorage.getItem('token');
        
        if(tokenStr==null || tokenStr==''||tokenStr==undefined){

          return false;
      
        }
        return true;
   }

   // Log out : Remove token from local storage

   public logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true
   }

   public getToken(){
    return localStorage.getItem('token')
   }

   public setUser(user:any){
      localStorage.setItem('user',JSON.stringify(user));

   }

   public getUser(){
    let userStr= localStorage.getItem('user');
     if(userStr!=null){
       return JSON.parse(userStr)
     }
     else{
      this.logOut();
      return null;
     }
   }

   public getRole(){
      let user = this.getUser()
      return user.authorities[0].authority
   }

   public isAdmin(){
      if(this.getRole()=='ADMIN'){
        return true;
      }
      return false;
   }
 
}
