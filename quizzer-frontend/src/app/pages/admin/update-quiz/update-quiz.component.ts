import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  quizId:number= 0
  categoryId:number = 0
  quizData={
    title:'',
    description:'',
    maxMarks:'',
    noOfQuestions:'',
    active:false,
    createdBy: this.login.getUser()['username'],
    category:{
       categoryId :0,
       title:''
    }
  }
  
  categories=[]
  
  
  constructor(private _route:ActivatedRoute,private _quiz:QuizService,private login:LoginService,private _category:CategoryService,private _snack:MatSnackBar,private _router:Router) { }

  ngOnInit(): void {
    this.quizId=this._route.snapshot.params['quizId'] 
    this._quiz.getQuizById(this.quizId).subscribe(
      (data:any)=>{
        this.quizData= data
        this.categoryId=this.quizData.category.categoryId
        console.log(this.quizData)
      },
      (error)=>{
        Swal.fire('Error!!','Error in loading Quiz','error')
        console.log(error)
      }
    )
      this._category.getCategories().subscribe((data:any)=>{
      this.categories =data
      console.log(this.categories)
    },
    (error)=>{
      console.log(error)
      Swal.fire('Error!!','Error in loading Categories','error')
    })
  }

   updateQuiz(){
    console.log(this.quizData)

     if(this.quizData.title.trim()==''||this.quizData.title==null||this.quizData.maxMarks==''|| this.quizData.noOfQuestions==''){
       this._snack.open("Form Incomlete",'',{
         duration:3000
       });
       return;
     }
     this._quiz.updateQuiz(this.quizId,this.categoryId,this.quizData).subscribe(
       (data:any)=>{

          Swal.fire("Success!!",`${this.quizData.title}  successfully updated`,"success").then((result)=>{
            if(result.isConfirmed){
              this._router.navigate(['/admin/quiz/all'])
            }
          })
          
          this.quizData={
           title:'',
           description:'',
           maxMarks:'',
           noOfQuestions:'',
           active:false,
           createdBy: this.login.getUser()['username'],
           category:{
            categoryId :0,
            title:''
           }
         }
          this.categoryId=0
       },
       (error)=>{
         Swal.fire("Error","Failed to Update Quiz",'error')
         console.log(error)
       }
     )
 }
}

