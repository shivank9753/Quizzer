import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
   
  quizId:number=0
  quiz :any
  constructor(private _route:ActivatedRoute,private _quiz:QuizService,private router:Router) { }

  ngOnInit(): void {
    this.quizId=this._route.snapshot.params['quizId']
    this._quiz.getQuizById(this.quizId).subscribe(
      (data:any)=>{
        console.log(data)
        this.quiz= data
      },
      (error)=>{
        console.log(error)
        Swal.fire('Error!!','Error in loading Quiz','error')
      }
    )

  }
  startQuiz() :void{
    Swal.fire({
      icon:"question",
      title:"Start Quiz?",
      confirmButtonText:"START",
      confirmButtonColor:"#3f51b5",
      showCancelButton:true,
      iconColor:"grey"

    }).then((result)=>{
       if(result.isConfirmed){
           this.router.navigate(['/quiz-start/'+ this.quizId + "/"+ this.quiz['title']])
       }
    })
  }

}
