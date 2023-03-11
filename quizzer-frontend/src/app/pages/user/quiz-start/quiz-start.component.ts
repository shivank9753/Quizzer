import { LocationStrategy } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import { LoginService } from 'src/app/services/login.service';
import { DOCUMENT } from '@angular/common'; 

import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css']
})
export class QuizStartComponent implements OnInit {

   quizId:number=0;
   title=""
   questions:any = []
   isSubmit=false
   timer=0
   timeLeft=""
   result={
    marksGot:0,
    attemptNo:0,
    attempted:0,
    correctAnswers:0
   }
   t :any
  constructor(
    private locationStrategy:LocationStrategy,
    private _route:ActivatedRoute,
    private questionService:QuestionService,
    private router:Router,
    private quizService:QuizService,
    private login:LoginService,
    @Inject(DOCUMENT) document: Document
    ) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.quizId=this._route.snapshot.params['quizId']
    this.title=this._route.snapshot.params['title']
    this.questionService.getShuffledQuestionsOfQuiz(this.quizId).subscribe(
      (data:any)=>{
        this.questions=data
        this.timer= this.questions.length *1*60;
        this.startTimer()
      },
      (error)=>{
        console.log(error)
        Swal.fire('Error!!','Error in loading Questions','error')
      }
    )
  }

  preventBackButton():void{
    history.pushState(null,"",location.href)
    this.locationStrategy.onPopState(()=>{
    history.pushState(null,"",location.href)
    })

  }
  secondsToHms(d:number) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}

  submitQuiz(){
    Swal.fire({
      icon:"question",
      title:"Submit Quiz?",
      confirmButtonText:"SUBMIT",
      confirmButtonColor:"#3f51b5",
      showCancelButton:true,
      iconColor:"grey"
    }).then((result)=>{
      if(result.isConfirmed){
        this.evalQuiz()
      }
    })
  }

  startTimer(){
     this.t= window.setInterval(()=>{
      if(this.timer<=0){
        this.evalQuiz()
      }
      else(
        this.timer--
      )
      this.timeLeft = this.secondsToHms(this.timer)
    },1000)
  }

  evalQuiz(){
        
            this.quizService.quizResult(this.questions,this.login.getUser()['userId'])
            .subscribe((data:any)=>{
              clearInterval(this.t)
              this.router.navigate(['/user/show-result/'+ this.quizId],{queryParams:{resultData: JSON.stringify(data)}})
            },
            (error)=>{
              console.log(error)
              Swal.fire('Error!!','Error in evaluating Quiz','error')
            })
      }
      scrollToDiv(quesId:string){
        document.getElementById(this.title+'_'+quesId)?.scrollIntoView()
      }
      
}
