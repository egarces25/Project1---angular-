import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  request(reimb_Amount: Number, reimb_Receipt: String, reimb_Description: String, reimb_Author: Number, reimb_Type_Id: Number): Observable<any> {
const payload = {
    reimb_Amount: reimb_Amount,
    reimb_Receipt: reimb_Receipt,
    reimb_Description: reimb_Description,
    reimb_Author: reimb_Author,
    reimb_Type_Id: reimb_Type_Id
  };
  return this.httpClient.post('http://localhost:8081/reimbursement/request', payload);
  }
}
