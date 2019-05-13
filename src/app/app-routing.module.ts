import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RequestsComponent } from './requests/requests.component';
import { RetrievalComponent } from './retrieval/retrieval.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ReseolvereimbursementsComponent } from './reseolvereimbursements/reseolvereimbursements.component';

const routes: Routes = [
  {

    path: 'login',
    component: LoginComponent
},
{
  path: 'welcomepage',
   component: WelcomepageComponent,
  children: [

{
 path: 'reimburstments',
    component: RequestsComponent

  },
{

  path: 'retrieve',
  component: RetrievalComponent
},
{
  path: 'resolve',
  component: ReseolvereimbursementsComponent
}
  ]
},

{

    path: '',
    component: LoginComponent
},
{
 path: 'reimburstments',
    component: RequestsComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
