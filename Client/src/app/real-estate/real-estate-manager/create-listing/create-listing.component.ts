import { Component, OnInit } from '@angular/core';
import {RealEstateService} from '../../../_services/real-estate.service';
import {RealEstateProperty} from '../../../_models/real-estate';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {
  properties: RealEstateProperty[] = [];

  constructor(private propertyService: RealEstateService) { }

  ngOnInit(): void {
  this.getProperties();
  }

  getProperties(): void {
    this.propertyService.getProperties()
      .subscribe(properties => this.properties = properties);
  }

  delete(property: RealEstateProperty): void {
    this.properties = this.properties.filter(p => p !== property);
    this.propertyService.deleteProperty(property.id).subscribe();
  }

  add(type: string): void {
    type = type.trim();
    if (!type) { return; }
    this.propertyService.addProperty({type} as unknown as RealEstateProperty)
      .subscribe(property => {
        this.properties.push(property);
      });
  }

}
