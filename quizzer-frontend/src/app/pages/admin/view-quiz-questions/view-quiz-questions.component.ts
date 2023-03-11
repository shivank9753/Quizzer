import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

   quizId:number=0
   title:String =''
   questions=[]
  constructor(private _route:ActivatedRoute, private _question:QuestionService) { }
   


  ngOnInit(): void {
    this.quizId=this._route.snapshot.params['quizId']
    this.title=this._route.snapshot.params['title']

    this._question.getAllQuestionsOfQuiz(this.quizId).subscribe((data:any)=>{
      this.questions =data
      console.log(this.questions)
    },
    (error)=>{
      console.log(error)
      Swal.fire('Error!!','Error in loading Questions','error')
    })
  }

  deleteQuestion(quesId:number){
       
    Swal.fire({
      icon:"question",
      title:"Are you sure?",
      confirmButtonText:"DELETE",
      confirmButtonColor:"#f44336",
      showCancelButton:true,
      cancelButtonColor:"#3f51b5",
      iconColor:"grey"

    }).then((result)=>{
       if(result.isConfirmed){

        this._question.deleteQuestion(quesId).subscribe(
          (data)=>{
            Swal.fire('Success!!','Question Deleted Successfully','success')
             this.questions= this.questions.filter((question)=>question['quesId']!=quesId)
          },
          (error)=>{
            Swal.fire('Error!!','Error in deleteing Quiz','error')
          }
        )
         
       }
    })

      
  }

}
