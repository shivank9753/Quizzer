import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

   public getShuffledQuestionsOfQuiz(quizId:number){
     return this.http.get(`${baseUrl}/question/quiz/${quizId}`)
   }
   public getAllQuestionsOfQuiz(quizId:number){
    return this.http.get(`${baseUrl}/question/quiz/${quizId}/all`)
  }

  public getQuestionById(quesId:number){
    return this.http.get(`${baseUrl}/question/${quesId}`)
  }
  
  public addQuestion(quizId:number,question:any){
    let queryParams= new HttpParams().append('quizId',quizId)

    return this.http.post(`${baseUrl}/question/`,question,{params:queryParams})
  }

  public updateQuestion(quesId:number,questionData:any){
   return this.http.put(`${baseUrl}/question/${quesId}`,questionData)

  }

  public deleteQuestion(questionId:number){
    return this.http.delete(`${baseUrl}/question/${questionId}`)
  }
  
}
