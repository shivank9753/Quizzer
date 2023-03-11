import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizId:number =0;
  quizzes=[      
  ]

  categoryId:any

  isAdmin=false
  ans= true;

  title :string =''


  constructor(private quiz:QuizService,private login:LoginService,private _route:ActivatedRoute,private router:Router,private questionService:QuestionService) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.isAdmin=this.login.isAdmin()
      this.categoryId=this._route.snapshot.params['categoryId']
     this.quiz.getQuizzes().subscribe(
      (data:any)=>{
        this.quizzes=data
        if(!this.isAdmin){
          this.quizzes=this.quizzes.filter((quiz)=>quiz['active']!=false && quiz['isEmpty']!=true)
            
        }
        if(this.categoryId!='all'){
          this.quizzes=this.quizzes.filter((quiz)=>quiz['category']['categoryId']==this.categoryId)
        }
        if(this.quizzes.length==0){
          Swal.fire('Sorry!!','No Quizzes Present Here ','info').then((result)=>{
            if(result.isConfirmed){
               if(this.isAdmin){
                this.router.navigate(['/admin/category'])
               }
               else{
                this.router.navigate(['/user/category'])
               }
              
            }
          })
        }
        console.log(this.quizzes)
      },
      (error)=>{
        console.log(error)
        Swal.fire('Error!!','Error in loading Quizzes','error')
      }
     )
  }
  deleteQuiz(quizId:number){
       
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

        this.quiz.deleteQuiz(quizId).subscribe(
          (data)=>{
            Swal.fire('Success!!','Quiz Deleted Successfully','success')
             this.quizzes= this.quizzes.filter((quiz)=>quiz['quizId']!=quizId)
          },
          (error)=>{
            Swal.fire('Error!!','Error in deleteing Quiz','error')
          }
        
        )
         
       }
    })

      
  }

}
