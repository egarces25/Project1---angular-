import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RequestsComponent } from './requests/requests.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RetrievalComponent } from './retrieval/retrieval.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ReseolvereimbursementsComponent } from './reseolvereimbursements/reseolvereimbursements.component';


@NgModule({

  declarations: [
    AppComponent,
    RequestsComponent,
    LoginComponent,
    RetrievalComponent,
    WelcomepageComponent,
    ReseolvereimbursementsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
