import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() cardTitle: string;
  @Input() synopsis: string;
  @Input() url: string;
  @Input() cta: string;
  @Input() hasImg: string;
  @Input() hasTitle: string;
  @Input() hasSynopsis: string;
  @Input() hasCta: string;
  closeLogin = true;
  registerMode = false;
  loggedIn: boolean;
  constructor() {}

  ngOnInit(): void {
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }

}
