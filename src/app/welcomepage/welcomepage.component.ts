import { Component, OnInit } from '@angular/core';
import {routerNgProbeToken} from '@angular/router/src/router_module';
import { longStackSupport } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  logOut() {
  sessionStorage.removeItem('employeeId');
  this.router.navigateByUrl('login');
}


}


