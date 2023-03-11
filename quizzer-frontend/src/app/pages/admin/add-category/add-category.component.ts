import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {


  category={
    title:'',
    description:'',
    createdBy: this.login.getUser()['username']
  }

  constructor(private login :LoginService, private snack:MatSnackBar,private _category:CategoryService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.category.title.trim()==''|| this.category.title==null){
      this.snack.open("Title Required!!",'',{
        duration:3000
      });
      return;
    }

    this._category.addCategory(this.category).subscribe(
      (data:any)=>{
        Swal.fire("Success!!",`Category:${this.category.title} added`,'success')
        this.category.title='';
        this.category.description=''
       
      },

      (error)=>{
        Swal.fire("Error","Failed to add new category",'error')
        console.log(error)
      }
    )
  }

}
