import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReimbursementRequests } from '../models/reimbursementrequest';
import { ResolveService } from '../services/resolve.service';

@Component({
  selector: 'app-reseolvereimbursements',
  templateUrl: './reseolvereimbursements.component.html',
  styleUrls: ['./reseolvereimbursements.component.css']
})
export class ReseolvereimbursementsComponent implements OnInit {
  splitCache = sessionStorage.getItem('employeeId').split(' ');
  user_Role_Id = Number(this.splitCache[1]);
  ers_Id = Number(this.splitCache[0]);
  response: Subscription;
  lastStatus = 200;
  active = new Array <ReimbursementRequests>();
  constructor(private resolveService: ResolveService) { }


  ngOnInit() {
    this.resolveService.requests.length = 0;
    this.resolveService.getRequest(this.ers_Id, this.user_Role_Id);
    this.response = this.resolveService.$resolveStatus.subscribe(status => {
        if (status === 200) {

        } else {
          this.lastStatus = status;

        }
      });
    this.active = this.resolveService.requests;
  }

  ngOnDestroy() {
    if(this.response){
      this.response.unsubscribe();
    }
  }

  resolve(requestId, reimb_Status_Id){
    alert(`Request ID ${requestId} has been resolved `);
    this.resolveService.resolveRequest(reimb_Status_Id,this.ers_Id,requestId);
    for(let i = 0; i < this.resolveService.requests.length; i++){
      if(this.resolveService.requests[i].reimb_Id === requestId){
        this.resolveService.requests.splice(i, 1);
        break;
      }
    }
  }

  isEmpty(){
    return this.active.length === 0;
  }
}
