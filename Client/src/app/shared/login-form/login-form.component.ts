import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../_services/account.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  model: any = {};
  loggedIn:boolean | undefined ;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response)
      this.loggedIn = true;
    }, error => {
      console.log(error);
      }
    )
  }

  logOut(){
    this.loggedIn = false;
  }
}
