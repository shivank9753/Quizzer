import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }
   
  public getQuizzes(){
    return this.http.get(`${baseUrl}/quiz/`)
  }
  public getQuizById(quizId:number){
    return this.http.get(`${baseUrl}/quiz/${quizId}`)
  }
  public addQuiz(categoryId:number,quizData:any){
    let queryParams= new HttpParams().append('categoryId',categoryId);
    return this.http.post(`${baseUrl}/quiz/`,quizData,{params:queryParams})
  }

  public quizResult(questions:any,userId:number){
    let queryParams= new HttpParams().append('userId',userId);
    return this.http.post(`${baseUrl}/quiz-result/`,questions,{params:queryParams})
  }

  public updateQuiz(quizId:number,categoryId:number,quizData:any){
    let queryParams= new HttpParams().append('categoryId',categoryId)
    return this.http.put(`${baseUrl}/quiz/${quizId}`,quizData,{params:queryParams})
  }

  public deleteQuiz(quizId:number){
    return this.http.delete(`${baseUrl}/quiz/${quizId}/`)
  }
}
