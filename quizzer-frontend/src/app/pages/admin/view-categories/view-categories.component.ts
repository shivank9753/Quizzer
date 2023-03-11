import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {


  categories=[
    
  ]

  isAdmin=false

  constructor(private category:CategoryService,private login:LoginService) { }

  ngOnInit(): void {
     this.isAdmin=this.login.isAdmin()
    this.category.getCategories().subscribe((data:any)=>{
      this.categories =data
      console.log(this.categories)
    },
    (error)=>{
      console.log(error)
      Swal.fire('Error!!','Error in loading Categories','error')
    })
  }

}