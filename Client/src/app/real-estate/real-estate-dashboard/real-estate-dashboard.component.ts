import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './real-estate-dashboard.component.html',
  styleUrls: ['./real-estate-dashboard.component.scss']
})
export class RealEstateDashboardComponent implements OnInit {

  allowNewProperty = false;
  listingAddedStatus = 'No listing was added';
  listing = '';
  displayOn: boolean;
  count = 0;
  constructor() {
    setTimeout(() => {
      this.allowNewProperty = true;
    } , 2000);
  }
  ngOnInit(): void {
  }
  onCreateListing(): void{
    this.listingAddedStatus = 'New listing was created';
  }

  onUpdateListings(event: Event): void {
    console.log(event);
    this.listing = (event.target as HTMLInputElement).value;
  }

  onDisplayDetails(): void {
    this.displayOn = !this.displayOn;
    console.log('Clicked ' + this.count++);
  }

  // tslint:disable-next-line:typedef
  getColor() {
    return this.count > 4 ? 'blue' : '';
  }
}
