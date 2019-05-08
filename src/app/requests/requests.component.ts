import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  amount = ' ';
  description = ' ';
  
  submit = undefined;





  constructor(private requestService: RequestService, private router: Router) { }

  ngOnInit() {
  }

}
