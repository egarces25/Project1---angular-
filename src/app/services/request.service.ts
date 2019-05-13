import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private submitStatusSubject = new Subject<number>();
  public  $submitStatus = this.submitStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  request(reimb_Amount: Number, reimb_Description: String, reimb_Author: Number, reimb_Type_Id: Number): Observable<any> {
  const payload = {
    reimb_Amount: reimb_Amount,
    reimb_Description: reimb_Description,
    reimb_Author: sessionStorage.getItem('employeeId').split(' ')[0],
    reimb_Type_Id: reimb_Type_Id
  };
  return this.httpClient.post('http://localhost:8081/reimbursement/request', payload);
  }
}
