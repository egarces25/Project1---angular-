import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ReimbursementRequests } from '../models/reimbursementrequest';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolveService {

  private resolveStatusSubject = new Subject<number>();
  public $resolveStatus = this.resolveStatusSubject.asObservable();
  public requests = new Array <ReimbursementRequests>();


  constructor(private httpClient: HttpClient) { }




getRequest(ers_Id: number, user_Role_Id: number){
  const payload = {
ers_Id: ers_Id,
user_Role_Id: user_Role_Id
  };
  this.httpClient.post('http://localhost:8081/reimbursement/getStatus', payload, {
  observe: 'response'
}).pipe(map(response => response.body as Array <ReimbursementRequests>)
).subscribe(response => {
this.resolveStatusSubject.next(200);
response.forEach(element => {
this.requests.push(element);
});
}, err => {
  this.resolveStatusSubject.next(err.status);
});
}

resolveRequest(reimb_Status_Id: number , reimb_Resolver: number , requestId: number ){
  const payload = {
  reimb_Status_Id: reimb_Status_Id,
  reimb_Resolver: reimb_Resolver,
  reimb_Id: requestId
};

  this.httpClient.put('http://localhost:8081/reimbursement/updateStatus', payload,{
  observe:'response'
}).subscribe(response =>{
  this.resolveStatusSubject.next(200);
},err => {
  this.resolveStatusSubject.next(err.status);
});

}






}