import { Component, OnInit } from '@angular/core';
import {RealEstateService} from '../../_services/real-estate.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {RealEstateProperty} from '../../_models/real-estate';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  property: RealEstateProperty | undefined;

  constructor(private propertyService: RealEstateService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getProperty();
  }
  getProperty(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.propertyService.getProperty(id)
      .subscribe(property => this.property = property);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.property) {
      this.propertyService.updateProperty(this.property)
        .subscribe(() => this.goBack());
    }
  }
}
