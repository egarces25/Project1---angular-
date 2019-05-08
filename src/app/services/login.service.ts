import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({

  providedIn: 'root'
})
export class LoginService {
  private loginStatusSubject = new Subject<number>();
  public $loginStatus = this.loginStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(ers_Username: string, ers_Password: string): void {
    const playload = {
      ers_Username: ers_Username,
      ers_Password: ers_Password

    };

    this.httpClient.post('http://localhost:8081/reimbursement/login', playload, {
        observe: 'response'
      }).subscribe(response => {
        sessionStorage.setItem('employeeId', response.body.toString());
        this.loginStatusSubject.next(200);
      }, err => {
        this.loginStatusSubject.next(err.status);
      });

  }
}
