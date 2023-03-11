import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  categories=[
  ]

  quizData={
    title:'',
    description:'',
    maxMarks:'',
    noOfQuestions:'',
    active:false,
    createdBy: this.login.getUser()['username'],
  }
   categoryId: number = 0;

  constructor(private category:CategoryService,private login:LoginService,private snack:MatSnackBar,private _quiz:QuizService,private _router:Router) { }

  ngOnInit(): void {
    this.category.getCategories().subscribe((data:any)=>{
      this.categories =data
      console.log(this.categories)
    },
    (error)=>{
      console.log(error)
      Swal.fire('Error!!','Error in loading Categories','error')
    })
  }

  addQuiz(){
     console.log(this.quizData)

      if(this.quizData.title.trim()==''||this.quizData.title==null||this.quizData.maxMarks==''|| this.quizData.noOfQuestions==''|| this.categoryId==0){
        this.snack.open("Form Incomlete",'',{
          duration:3000
        });
        return;
      }
      this._quiz.addQuiz(this.categoryId,this.quizData).subscribe(
        (data:any)=>{
           Swal.fire("Success!!",`${this.quizData.title}  successfully added in  ${data['category']['title']}`,"success").then((result)=>{
            if(result.isConfirmed){
              // window.location.href='/admin/quiz';
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
          }
           this.categoryId=0
        },
        (error)=>{
          Swal.fire("Error","Failed to add new Quiz",'error')
          console.log(error)
        }
      )
  }
}
