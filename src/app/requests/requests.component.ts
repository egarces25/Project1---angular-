import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  reimb_Amount: number;
  reimb_Description = '';
  reimb_Receipt : any;
  splitCache = sessionStorage.getItem('employeeId').split(' ');
  reimb_Author = Number(this.splitCache[0]);
  submitAttemptSucceeded = undefined;
  submitResponse: Subscription;
  laststatus = 200;
  reimb_Type_Id = 0;


  constructor(private requestService: RequestService, private router: Router) { }

  ngOnInit() {
    this.submitResponse = this.requestService.$submitStatus.subscribe( status =>{
      if(status === 200) {
        alert('Request submit');
      } else {
        this.laststatus = status;
      }
    });
  }
submit() {
  console.log(this.reimb_Amount, this.reimb_Description, this.reimb_Type_Id);
  this.requestService.request(this.reimb_Amount,this.reimb_Description,
    this.reimb_Author,this.reimb_Type_Id).subscribe(result =>{
    this.submitAttemptSucceeded = true;
    alert('Request has Submitted');
  }, error =>{
    this.submitAttemptSucceeded = false;
  });
}
}
