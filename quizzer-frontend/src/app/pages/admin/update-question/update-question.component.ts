import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {


  quesId:number=0
  quizId:number=0

  title=''

  prevOpt1=''
  prevOpt2=''
  prevOpt3=''
  prevOpt4=''

  questionData={
    content:'',
    image:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    createdBy:this.login.getUser()['username'],
    quiz:{
      quizId:0,
      title:''
    }
  }

  constructor(private _route:ActivatedRoute,private _question:QuestionService,private login:LoginService,private snack:MatSnackBar,private _router:Router) { }

  ngOnInit(): void {
    this.quesId=this._route.snapshot.params['quesId'] 
    this._question.getQuestionById(this.quesId).subscribe(
      (data:any)=>{
         this.questionData=data
         this.prevOpt1=this.questionData.option1
         this.prevOpt2=this.questionData.option2
         this.prevOpt3=this.questionData.option3
         this.prevOpt4=this.questionData.option4
         
         this.quizId=this.questionData.quiz.quizId
         this.title= this.questionData.quiz.title
        console.log(this.questionData)
      },
      (error)=>{
        console.log(error)
        Swal.fire('Error!!','Error in loading Question','error')
      }
    )
  }

  updateQuestion(){
    if(this.questionData.answer==this.prevOpt1){
      this.questionData.answer=this.questionData.option1
    }
    else if(this.questionData.answer==this.prevOpt2){
      this.questionData.answer=this.questionData.option2
    }
    else if(this.questionData.answer==this.prevOpt3){
      this.questionData.answer=this.questionData.option3
    }
    else {
      this.questionData.answer=this.questionData.option4
    }
    
     console.log(this.questionData)
     if(this.questionData.content.trim()=='' ||this.questionData.content==null || this.questionData.option1.trim()==''||
    this.questionData.option2.trim()==''|| this.questionData.option3.trim()==''|| this.questionData.option4.trim()==''|| this.questionData.answer.trim()=='')
    {
      this.snack.open("Form Incomlete",'',{
        duration:3000
      });
      return
    }

    this._question.updateQuestion(this.quesId,this.questionData).subscribe(
      (data:any)=>{
        Swal.fire("Success!!",`Question successfully updated`,"success").then((result)=>{
          if(result.isConfirmed){
            // window.location.href='/admin/quiz';
            this._router.navigate(["/admin/view-question/"+this.quizId + "/"+ this.title])
          }
        })

        this.questionData={
          content:'',
          image:'',
          option1:'',
          option2:'',
          option3:'',
          option4:'',
          answer:'',
          createdBy:this.login.getUser()['username'],
          quiz:{
            quizId:0,
            title:''
          }
        }
      },
      (error)=>{
        Swal.fire("Error","Failed to Update Question",'error')
        console.log(error)
      }
    )
  }

}
