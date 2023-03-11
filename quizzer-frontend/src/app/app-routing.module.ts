import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { QuizStartComponent } from './pages/user/quiz-start/quiz-start.component';
import { ShowResultComponent } from './pages/user/show-result/show-result.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
{
    path:'',
    component:HomeComponent,
    pathMatch:'full'
},
{
  path:'signup',
  component:SignupComponent,
  pathMatch:'full',
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
},
{
  path:'admin',
  component:AdminDashboardComponent,
  canActivate:[AdminGuard],
  children:[
    {
      path:'',
      component:WelcomeComponent
    },
    {
      path:'profile',
      component:ProfileComponent
    },
    {
      path:'category',
      component:ViewCategoriesComponent
    },
    {
      path:'add-category',
      component:AddCategoryComponent 
    },
    {
      path:'quiz/:categoryId',
      component:ViewQuizzesComponent
    },
    {
      path:'add-quiz',
      component:AddQuizComponent
    },
    {
      path:'quiz/update/:quizId',
      component:UpdateQuizComponent
    },
    {
      path:'view-question/:quizId/:title',
      component:ViewQuizQuestionsComponent
    },
    {
      path:'add-question/:quizId/:title',
      component:AddQuestionComponent
    },
    {
      path:'question/:quesId',
      component:UpdateQuestionComponent
    }
  ]
},
{
  path:'user',
  component:UserDashboardComponent,
  canActivate:[NormalGuard],
  children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'category',
        component:ViewCategoriesComponent
      },
      {
        path:'quiz/:categoryId',
        component:ViewQuizzesComponent
      },
      {
        path:'instructions/:quizId',
        component: InstructionsComponent
      },
      {
        path:'show-result/:quizId',
        component: ShowResultComponent
      }
    
  ]
},
{
  path:'quiz-start/:quizId/:title',
  component: QuizStartComponent,
  canActivate:[NormalGuard],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
