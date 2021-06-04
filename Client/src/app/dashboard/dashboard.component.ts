import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isCommercial: boolean;
  isSocial: boolean;
  isAuthorised: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isAuthorised = false;
  }


  accessBusiness(){
      this.router.navigateByUrl('/business');
  }

  accessCommunity(){
    this.router.navigateByUrl('/community');
  }

  accessDating(){
    this.router.navigateByUrl('/dating-hub/dating-hub');
  }

  accessNews(){
    this.router.navigateByUrl('/news');
  }


  accessProperty(){
    this.router.navigateByUrl('/property');
  }

  accessMarket(){
    this.router.navigateByUrl('/market');
  }

  accessHospitality(){
    this.router.navigateByUrl('/leisure');
  }

  accessHealthcare(){
    this.router.navigateByUrl('/wellness');
  }
  contributors() {
  this.router.navigateByUrl('/contributors');
  }
}
