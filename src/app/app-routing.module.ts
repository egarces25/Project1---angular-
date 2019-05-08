import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  {

    path: 'login',
    component: LoginComponent
},
{
 path: 'reimburstments',
    component: RequestsComponent

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
