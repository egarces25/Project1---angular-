import { Component, OnInit } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';
import {ReimbursementRequests} from 'src/app/models/reimbursementrequest';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-retrieval',
  templateUrl: './retrieval.component.html',
  styleUrls: ['./retrieval.component.css']
})
export class RetrievalComponent implements OnInit {

splitCache = sessionStorage.getItem('employeeId').split(' ');
user_Role_Id = Number(this.splitCache[1]);
user_Id = Number(this.splitCache[0]);
requests = new Array <ReimbursementRequests>();
allRequests = new Array<ReimbursementRequests>();
pendingRequests =  new Array <ReimbursementRequests>();
approvedRequests = new Array <ReimbursementRequests>();
deniedRequests = new Array <ReimbursementRequests>();
active =  new  Array <ReimbursementRequests>();
response: Subscription;
  lastStatus = 200;
  private retrievalStatusSubject = new Subject<number>();
  public $retrievalStatus = this.retrievalStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
 
  this.retrievals(this.user_Id, this.user_Role_Id);
  this.response = this.$retrievalStatus.subscribe(status => {
    if (status === 200) {
     } else {
        this.lastStatus = status;
      }
  });

}

ngOnDestroy() {
  if (this.response) {
    this.response.unsubscribe();
  }
}
 
retrievals(ers_Id: number, user_Role_Id: number) { 
  const payload = {
    ers_Id: ers_Id,
    user_Role_Id: user_Role_Id
  };


  return this.httpClient.post('http://localhost:8081/reimbursement/retrieve', payload, {
observe: 'response'
  }).pipe(map(response => response.body as Array <ReimbursementRequests>)
  ).subscribe(response => {
  this.retrievalStatusSubject.next(200) ;
  response.forEach(element => {
    console.log(element)
    this.requests.push(element);
  });
  this.allRequests = this.requests;
  this.active = this.allRequests;
  this.instantiate();

  }, err => {
    this.retrievalStatusSubject.next(err.status);
  });
}

instantiate(){
this.requests.forEach(request => {
  if(request.reimb_Status_Id === 1){
    this.pendingRequests.push(request);
  }
});
this.requests.forEach(request => {
  if(request.reimb_Status_Id === 2){
    this.approvedRequests.push(request);
  }});
this.requests.forEach(request => {
    if(request.reimb_Status_Id === 2){
      this.deniedRequests.push(request);
    }
  });
}

all(){
  this.active = this.allRequests;
}

pending(){
  this.active = this.pendingRequests;
}

approved(){
  this.active = this.approvedRequests;
}

denied(){
  this.active = this.deniedRequests;
}

}

