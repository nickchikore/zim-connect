import {Component} from '@angular/core';

@Component({
  selector: 'app-real-estate-management',
  templateUrl: 'real-estate-management.html',
  styleUrls: ['real-estate-management.scss']
})

export class RealEstateManagementComponent {
  userName = 'Nick';
  taskSelected = false;
  constructor() {
  }
  onTaskSelected(): void{
    this.taskSelected = true;
  }
}
