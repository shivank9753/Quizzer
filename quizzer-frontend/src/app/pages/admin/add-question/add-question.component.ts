import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  

  quizId:number=0
  title=''
  question={
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    createdBy:this.login.getUser()['username'],
  }
  constructor(private _route:ActivatedRoute,private _question:QuestionService,private snack:MatSnackBar,private login:LoginService,private _router:Router) { }

  ngOnInit(): void {
    this.quizId=this._route.snapshot.params['quizId']
    this.title=this._route.snapshot.params['title']

    this._question.addQuestion
  }

  addQuestion(){
    console.log(this.question)
     
    if(this.question.content.trim()=='' ||this.question.content==null || this.question.option1.trim()==''||
    this.question.option2.trim()==''|| this.question.option3.trim()==''|| this.question.option4.trim()==''|| this.question.answer.trim()=='')
    {
      this.snack.open("Form Incomlete",'',{
        duration:3000
      });
      return
    }
    this._question.addQuestion(this.quizId,this.question).subscribe(
      (data:any)=>{
        Swal.fire("Success!!",` Question successfully added in  ${this.title}`,"success").then((result)=>{
          if(result.isConfirmed){
            // window.location.href='/admin/quiz';
            this._router.navigate(["/admin/view-question/"+this.quizId + "/"+ this.title])
          }
        })
        this.question={
          content:'',
          option1:'',
          option2:'',
          option3:'',
          option4:'',
          answer:'',
          createdBy:this.login.getUser()['username']
        }
        // this.quizId=0
        // this.title=''
     },
     (error)=>{
       Swal.fire("Error","Failed to add new Question",'error')
       console.log(error)
     }
    )
    
  }
  


}
