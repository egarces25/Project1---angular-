import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , OnDestroy {
  title = 'Project1';
  ers_Username = '';
  ers_Password = '';
  loginResponse: Subscription;
  lastStatus = 200;

  constructor(private loginService: LoginService , private router: Router) { }

  ngOnInit() {
    this.loginResponse = this.loginService.$loginStatus.subscribe(status => {
      if(status === 200){
        this.router.navigateByUrl('reimburstments');
      } else {
        this.lastStatus = status;
      }
    });
  }

  ngOnDestroy() {
    if (this.loginResponse) {
      this.loginResponse.unsubscribe()
    }
  }

  formValidation(): boolean {
    return this.ers_Username.length > 0 && this.ers_Password.length > 0;
  }

  submit() {
    console.log(this.ers_Username);
    console.log(this.ers_Password);
    this.loginService.login(this.ers_Username, this.ers_Password);
  }
}